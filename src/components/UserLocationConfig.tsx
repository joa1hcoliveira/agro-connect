"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleMap, useJsApiLoader, Circle, Marker } from '@react-google-maps/api';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MapPin, Save, Loader2, AlertCircle, Navigation, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";

interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0.5rem'
};

const defaultCenter = {
  lat: -23.5505,
  lng: -46.6333
};

// CRÍTICO: Definir libraries FORA do componente para evitar re-criação
const GOOGLE_MAPS_LIBRARIES: ("places" | "geometry" | "drawing" | "visualization")[] = ["places"];

export default function UserLocationConfig() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [radius, setRadius] = useState([5]); // em km
  const [radiusMode, setRadiusMode] = useState<'suggested' | 'custom'>('suggested');
  const [loading, setLoading] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);
  const geocoder = useRef<google.maps.Geocoder | null>(null);
  const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const isValidApiKey = apiKey && apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY_HERE' && apiKey.length > 20;

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
    libraries: GOOGLE_MAPS_LIBRARIES
  });

  // Carregar localização existente
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/api/user/location');
        const data = await response.json();
        if (data.location) {
          setSelectedLocation({
            address: data.location.address,
            latitude: data.location.latitude,
            longitude: data.location.longitude,
          });
          setRadius([data.location.radius / 1000]); // converter metros para km
          setInput(data.location.address);
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };
    fetchLocation();
  }, []);

  // Inicializar serviços do Google Maps
  useEffect(() => {
    if (isLoaded && window.google) {
      if (!autocompleteService.current) {
        try {
          autocompleteService.current = new window.google.maps.places.AutocompleteService();
        } catch (error) {
          console.error('Error initializing AutocompleteService:', error);
        }
      }
      if (!geocoder.current) {
        try {
          geocoder.current = new window.google.maps.Geocoder();
        } catch (error) {
          console.error('Error initializing Geocoder:', error);
        }
      }
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && map && window.google && !placesService.current) {
      try {
        placesService.current = new window.google.maps.places.PlacesService(map);
      } catch (error) {
        console.error('Error initializing PlacesService:', error);
      }
    }
  }, [isLoaded, map]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Buscar sugestões usando Google Places Autocomplete
  const searchPlaces = useCallback((query: string) => {
    if (query.length < 3 || !autocompleteService.current) {
      setPredictions([]);
      return;
    }

    const request: google.maps.places.AutocompletionRequest = {
      input: query,
      componentRestrictions: { country: 'br' }, // Restringir ao Brasil
      types: ['geocode', 'establishment']
    };

    try {
      autocompleteService.current.getPlacePredictions(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          setPredictions(results);
        } else {
          setPredictions([]);
        }
      });
    } catch (error) {
      console.error('Error getting predictions:', error);
      setPredictions([]);
    }
  }, []);

  // Selecionar localização da lista de sugestões
  const selectLocation = useCallback((prediction: google.maps.places.AutocompletePrediction) => {
    if (!placesService.current) return;

    const request: google.maps.places.PlaceDetailsRequest = {
      placeId: prediction.place_id,
      fields: ['geometry', 'formatted_address', 'name']
    };

    try {
      placesService.current.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.geometry?.location) {
          const latitude = place.geometry.location.lat();
          const longitude = place.geometry.location.lng();
          const address = place.formatted_address || prediction.description;

          setSelectedLocation({
            address,
            latitude,
            longitude,
          });
          setPredictions([]);
          setInput(address);

          // Centralizar mapa na nova localização
          if (map) {
            map.panTo({ lat: latitude, lng: longitude });
            map.setZoom(14);
          }
        }
      });
    } catch (error) {
      console.error('Error getting place details:', error);
    }
  }, [map]);

  // Obter localização atual do usuário
  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      alert('❌ Geolocalização não é suportada pelo seu navegador');
      return;
    }

    console.log('🔍 Solicitando permissão de localização ao navegador...');
    console.log('📍 Uma janela de permissão deve aparecer - clique em "Permitir"');
    setGettingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('✅ Permissão concedida! Coordenadas obtidas:', position.coords);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Usar Geocoder para obter endereço a partir das coordenadas
        if (geocoder.current) {
          try {
            geocoder.current.geocode(
              { location: { lat: latitude, lng: longitude } },
              (results, status) => {
                setGettingLocation(false);
                
                if (status === 'OK' && results && results[0]) {
                  const address = results[0].formatted_address;
                  
                  setSelectedLocation({
                    address,
                    latitude,
                    longitude,
                  });
                  setInput(address);

                  // Centralizar mapa na localização atual
                  if (map) {
                    map.panTo({ lat: latitude, lng: longitude });
                    map.setZoom(14);
                  }

                  console.log('✅ Endereço obtido:', address);
                } else {
                  // Se falhar o geocoding, usar coordenadas como endereço
                  const address = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
                  setSelectedLocation({
                    address,
                    latitude,
                    longitude,
                  });
                  setInput(address);

                  if (map) {
                    map.panTo({ lat: latitude, lng: longitude });
                    map.setZoom(14);
                  }
                }
              }
            );
          } catch (error) {
            console.error('Error geocoding:', error);
            setGettingLocation(false);
            const address = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            setSelectedLocation({
              address,
              latitude,
              longitude,
            });
            setInput(address);

            if (map) {
              map.panTo({ lat: latitude, lng: longitude });
              map.setZoom(14);
            }
          }
        } else {
          setGettingLocation(false);
          const address = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setSelectedLocation({
            address,
            latitude,
            longitude,
          });
          setInput(address);

          if (map) {
            map.panTo({ lat: latitude, lng: longitude });
            map.setZoom(14);
          }
        }
      },
      (error) => {
        setGettingLocation(false);
        
        // Tratamento robusto de erros - verificar se error tem propriedades válidas
        const errorCode = error?.code;
        const errorMessage = error?.message || 'Erro desconhecido';
        
        console.error('❌ Erro de geolocalização:', {
          code: errorCode,
          message: errorMessage,
          fullError: error
        });
        
        // Verificar se o erro tem código válido
        if (errorCode === 1 || (error && error.PERMISSION_DENIED && errorCode === error.PERMISSION_DENIED)) {
          console.log('🚫 Usuário negou a permissão de localização');
          alert('❌ Você negou a permissão de localização.\n\n💡 Para permitir:\n\n1. Clique no ícone de cadeado/informação na barra de endereço\n2. Procure por "Localização" ou "Location"\n3. Altere para "Permitir"\n4. Recarregue a página e tente novamente');
        } else if (errorCode === 2 || (error && error.POSITION_UNAVAILABLE && errorCode === error.POSITION_UNAVAILABLE)) {
          console.log('📍 Informações de localização não disponíveis');
          alert('❌ Informações de localização não disponíveis no momento.\n\n💡 Verifique se:\n- Você está usando HTTPS ou localhost\n- O GPS do dispositivo está ativado\n- Há conexão com a internet');
        } else if (errorCode === 3 || (error && error.TIMEOUT && errorCode === error.TIMEOUT)) {
          console.log('⏱️ Tempo esgotado ao obter localização');
          alert('❌ Tempo esgotado ao tentar obter localização.\n\nTente novamente.');
        } else {
          // Erro sem código válido - provavelmente bloqueio de segurança
          console.log('🔒 Possível bloqueio de segurança ou erro de contexto');
          alert('❌ Não foi possível obter sua localização.\n\n💡 Possíveis causas:\n\n1. Site não está em HTTPS (necessário para geolocalização)\n2. Permissão foi bloqueada pelo navegador\n3. Recurso não disponível neste contexto\n\n📝 Solução alternativa:\nDigite seu endereço manualmente no campo de busca acima.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }, [map]);

  const saveLocationAndContinue = async () => {
    if (!selectedLocation) {
      alert('⚠️ Por favor, selecione uma localização antes de continuar');
      return;
    }

    setLoading(true);
    console.log('💾 Salvando localização:', selectedLocation);
    
    try {
      const response = await fetch('/api/user/location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: selectedLocation.address,
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
          radius: radius[0] * 1000, // converter km para metros
        }),
      });

      const data = await response.json();
      console.log('📡 Resposta da API:', data);

      if (response.ok) {
        console.log('✅ Localização salva com sucesso!');
        console.log('🚀 Redirecionando para /profile em 1 segundo...');
        
        // Mostrar feedback visual
        alert('✅ Localização salva com sucesso!\n\nRedirecionando para seu perfil...');
        
        // Redirecionar após 1 segundo
        setTimeout(() => {
          console.log('➡️ Executando router.push("/profile")...');
          router.push('/profile');
        }, 1000);
      } else {
        console.error('❌ Erro na resposta:', data);
        alert('❌ Erro ao salvar localização: ' + (data.error || 'Erro desconhecido'));
      }
    } catch (error) {
      console.error('❌ Erro ao salvar localização:', error);
      alert('❌ Erro ao salvar localização. Verifique o console para mais detalhes.');
    } finally {
      setLoading(false);
    }
  };

  const suggestedRadius = 10; // 10km como sugestão

  // Mostrar mensagem de erro se a chave da API não estiver configurada
  if (!isValidApiKey) {
    return (
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4 p-6 bg-amber-50 border-2 border-amber-200 rounded-lg">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                🔑 Configuração da API do Google Maps Necessária
              </h3>
              <p className="text-sm text-amber-800 mb-4">
                Para usar o mapa interativo, você precisa configurar uma chave válida da API do Google Maps.
              </p>
              
              <div className="space-y-3 text-sm text-amber-900">
                <div className="bg-white p-4 rounded border border-amber-200">
                  <p className="font-semibold mb-2">📋 Passo a passo:</p>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Acesse o <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Google Cloud Console</a></li>
                    <li>Crie um novo projeto ou selecione um existente</li>
                    <li>Ative as seguintes APIs:
                      <ul className="list-disc list-inside ml-4 mt-1 text-xs">
                        <li>Maps JavaScript API</li>
                        <li>Places API</li>
                        <li>Geocoding API</li>
                      </ul>
                    </li>
                    <li>Vá em "Credenciais" e crie uma chave de API</li>
                    <li>Copie a chave gerada</li>
                    <li>Clique no banner laranja acima para configurar a variável de ambiente</li>
                    <li>Cole sua chave no campo NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <p className="font-semibold mb-2">💡 Exemplo de chave válida:</p>
                  <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto font-mono">
{`AIzaSyC1234567890abcdefghijklmnopqrstuv`}
                  </pre>
                </div>

                <div className="bg-red-50 p-4 rounded border border-red-200">
                  <p className="font-semibold mb-2">⚠️ Importante:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                    <li>Mantenha sua chave segura e não compartilhe publicamente</li>
                    <li>Configure restrições de uso no Google Cloud Console</li>
                    <li>A API do Google Maps pode ter custos após o uso gratuito</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Mostrar erro de carregamento
  if (loadError) {
    return (
      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4 p-6 bg-red-50 border-2 border-red-200 rounded-lg">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                ❌ Erro ao Carregar Google Maps
              </h3>
              <p className="text-sm text-red-800 mb-2">
                Ocorreu um erro ao carregar a API do Google Maps. Verifique:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-red-700 ml-2">
                <li>Se a chave da API está correta</li>
                <li>Se as APIs necessárias estão ativadas no Google Cloud Console</li>
                <li>Se há restrições configuradas que estão bloqueando o uso</li>
              </ul>
              <p className="text-xs text-red-600 mt-3 font-mono bg-red-100 p-2 rounded">
                Erro: {loadError.message}
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        {/* Header com botão de voltar e título */}
        <div className="flex items-center gap-3 mb-4">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 rounded-full px-3 py-2 shadow-md transition-all duration-200 hover:shadow-lg flex-shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-2xl font-bold">Configurar Local de Atuação</h2>
        </div>
        
        {/* Campo de busca */}
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium mb-2">
              Buscar endereço ou lugar
            </label>
            <Input
              type="text"
              placeholder="Digite cidade, bairro, rua ou nome do estabelecimento..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                searchPlaces(e.target.value);
              }}
              className="pl-10"
            />
            <MapPin className="absolute left-3 top-11 h-4 w-4 text-gray-400" />
            
            {predictions.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                {predictions.map((prediction) => (
                  <div
                    key={prediction.place_id}
                    className="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 transition-colors"
                    onClick={() => selectLocation(prediction)}
                  >
                    <p className="font-medium text-sm">
                      {prediction.structured_formatting.main_text}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {prediction.structured_formatting.secondary_text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Botão de localização atual */}
          <Button
            onClick={getCurrentLocation}
            disabled={gettingLocation || !isLoaded}
            variant="outline"
            className="w-full"
          >
            {gettingLocation ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Obtendo localização...
              </>
            ) : (
              <>
                <Navigation className="h-4 w-4 mr-2" />
                Usar Minha Localização Atual
              </>
            )}
          </Button>

          {/* Mapa interativo */}
          {isLoaded && (
            <div className="rounded-lg overflow-hidden border-2 border-gray-200">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={selectedLocation ? 
                  { lat: selectedLocation.latitude, lng: selectedLocation.longitude } : 
                  defaultCenter
                }
                zoom={selectedLocation ? 14 : 11}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false,
                }}
              >
                {selectedLocation && (
                  <>
                    {/* Círculo de raio - renderizado primeiro para ficar atrás */}
                    <Circle
                      center={{
                        lat: selectedLocation.latitude,
                        lng: selectedLocation.longitude
                      }}
                      radius={radius[0] * 1000} // converter km para metros
                      options={{
                        fillColor: '#3B82F6',
                        fillOpacity: 0.15,
                        strokeColor: '#3B82F6',
                        strokeOpacity: 0.6,
                        strokeWeight: 2,
                        clickable: false,
                        draggable: false,
                        editable: false,
                        visible: true,
                        zIndex: 1,
                      }}
                    />
                    
                    {/* Marcador central - renderizado por último para ficar na frente */}
                    <Marker
                      position={{
                        lat: selectedLocation.latitude,
                        lng: selectedLocation.longitude
                      }}
                      options={{
                        zIndex: 2,
                      }}
                    />
                  </>
                )}
              </GoogleMap>
            </div>
          )}

          {!isLoaded && (
            <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          )}

          {/* Controles de raio */}
          <div className="space-y-4 pt-4">
            <RadioGroup value={radiusMode} onValueChange={(value) => setRadiusMode(value as 'suggested' | 'custom')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="suggested" id="suggested" />
                <Label htmlFor="suggested" className="cursor-pointer">
                  Raio sugerido ({suggestedRadius} km)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom" className="cursor-pointer">
                  Raio personalizado
                </Label>
              </div>
            </RadioGroup>

            {radiusMode === 'custom' && (
              <div className="space-y-2 pl-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Ajustar raio
                  </label>
                  <span className="text-sm font-bold text-blue-600">
                    {radius[0]} km
                  </span>
                </div>
                <Slider
                  value={radius}
                  onValueChange={setRadius}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1 km</span>
                  <span>50 km</span>
                </div>
              </div>
            )}

            {radiusMode === 'suggested' && (
              <div className="pl-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setRadius([suggestedRadius])}
                  className="w-full"
                >
                  Aplicar raio sugerido ({suggestedRadius} km)
                </Button>
              </div>
            )}
          </div>

          {/* Informações do local selecionado */}
          {selectedLocation && (
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-blue-900">Local Selecionado:</p>
                  <p className="text-sm text-blue-700 mt-1">{selectedLocation.address}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    Coordenadas: {selectedLocation.latitude.toFixed(6)}, {selectedLocation.longitude.toFixed(6)}
                  </p>
                  <p className="text-xs text-blue-600">
                    Raio de atuação: {radius[0]} km
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Botão de salvar e continuar */}
          <Button
            onClick={saveLocationAndContinue}
            disabled={!selectedLocation || loading}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Salvando...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Salvar e Continuar
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}
