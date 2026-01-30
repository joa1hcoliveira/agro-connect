"use client";

import { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Circle } from '@react-google-maps/api';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px'
};

const defaultCenter = {
  lat: -23.5505,
  lng: -46.6333
};

const libraries: ("places" | "geometry" | "drawing")[] = ["places"];

interface LocationMapPickerProps {
  onLocationSelect: (location: {
    latitude: number;
    longitude: number;
    city: string;
    state: string;
    radius: number;
  }) => void;
  initialRadius?: number;
}

export default function LocationMapPicker({ onLocationSelect, initialRadius = 50 }: LocationMapPickerProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState(defaultCenter);
  const [radius, setRadius] = useState(initialRadius);
  const [locationInfo, setLocationInfo] = useState({ city: '', state: '' });
  const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const requestLocationPermission = async () => {
    setIsLoadingLocation(true);
    
    if (!navigator.geolocation) {
      alert('Geolocalização não é suportada pelo seu navegador');
      setIsLoadingLocation(false);
      return;
    }

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        });
      });

      const { latitude, longitude } = position.coords;
      const newCenter = { lat: latitude, lng: longitude };
      
      setCenter(newCenter);
      setPermissionStatus('granted');
      
      // Geocoding reverso para obter cidade e estado
      if (window.google && window.google.maps) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: newCenter }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const addressComponents = results[0].address_components;
            let city = '';
            let state = '';

            addressComponents.forEach(component => {
              if (component.types.includes('administrative_area_level_2')) {
                city = component.long_name;
              }
              if (component.types.includes('administrative_area_level_1')) {
                state = component.short_name;
              }
            });

            setLocationInfo({ city, state });
            onLocationSelect({
              latitude,
              longitude,
              city,
              state,
              radius
            });
          }
        });
      }
    } catch (error: any) {
      console.error('Erro ao obter localização:', error);
      
      if (error.code === 1) {
        setPermissionStatus('denied');
        alert('Você negou o acesso à localização. Por favor, habilite nas configurações do navegador.');
      } else if (error.code === 2) {
        alert('Localização indisponível. Verifique se o GPS está ativado.');
      } else if (error.code === 3) {
        alert('Tempo esgotado ao tentar obter sua localização.');
      } else {
        alert('Erro ao obter localização. Tente novamente.');
      }
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const newCenter = { lat, lng };
      
      setCenter(newCenter);

      // Geocoding reverso
      if (window.google && window.google.maps) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: newCenter }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const addressComponents = results[0].address_components;
            let city = '';
            let state = '';

            addressComponents.forEach(component => {
              if (component.types.includes('administrative_area_level_2')) {
                city = component.long_name;
              }
              if (component.types.includes('administrative_area_level_1')) {
                state = component.short_name;
              }
            });

            setLocationInfo({ city, state });
            onLocationSelect({
              latitude: lat,
              longitude: lng,
              city,
              state,
              radius
            });
          }
        });
      }
    }
  }, [radius, onLocationSelect]);

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
    onLocationSelect({
      latitude: center.lat,
      longitude: center.lng,
      city: locationInfo.city,
      state: locationInfo.state,
      radius: newRadius
    });
  };

  useEffect(() => {
    // Verificar status de permissão ao montar
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        setPermissionStatus(result.state as 'prompt' | 'granted' | 'denied');
      });
    }
  }, []);

  if (loadError) {
    return (
      <Card className="p-6 bg-red-50 border-2 border-red-200">
        <div className="flex items-center gap-3 text-red-700">
          <AlertCircle className="w-6 h-6" />
          <div>
            <p className="font-bold">Erro ao carregar o mapa</p>
            <p className="text-sm">Verifique sua conexão com a internet e tente novamente.</p>
          </div>
        </div>
      </Card>
    );
  }

  if (!isLoaded) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-center gap-3 text-gray-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <p>Carregando mapa...</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-blue-50 border-2 border-blue-200">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-blue-900 mb-2">
              Como usar o mapa:
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Clique no botão abaixo para usar sua localização atual</li>
              <li>• Ou clique no mapa para selecionar manualmente</li>
              <li>• Ajuste o raio de atuação com o controle deslizante</li>
            </ul>
          </div>
        </div>
      </Card>

      <Button
        onClick={requestLocationPermission}
        disabled={isLoadingLocation || permissionStatus === 'denied'}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
      >
        {isLoadingLocation ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Obtendo localização...
          </>
        ) : permissionStatus === 'denied' ? (
          <>
            <AlertCircle className="w-4 h-4 mr-2" />
            Permissão de localização negada
          </>
        ) : (
          <>
            <MapPin className="w-4 h-4 mr-2" />
            Usar Minha Localização Atual
          </>
        )}
      </Button>

      {permissionStatus === 'denied' && (
        <Card className="p-4 bg-orange-50 border-2 border-orange-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
            <div className="text-sm text-orange-800">
              <p className="font-medium mb-1">Permissão de localização negada</p>
              <p>Para usar sua localização, habilite nas configurações do navegador e recarregue a página.</p>
            </div>
          </div>
        </Card>
      )}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleMapClick}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
      >
        <Marker position={center} />
        <Circle
          center={center}
          radius={radius * 1000} // Converter km para metros
          options={{
            fillColor: '#10b981',
            fillOpacity: 0.2,
            strokeColor: '#059669',
            strokeOpacity: 0.8,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>

      {locationInfo.city && locationInfo.state && (
        <Card className="p-4 bg-green-50 border-2 border-green-200">
          <div className="flex items-center gap-2 text-green-800">
            <MapPin className="w-5 h-5 text-green-600" />
            <p className="font-medium">
              Localização selecionada: {locationInfo.city}, {locationInfo.state}
            </p>
          </div>
        </Card>
      )}

      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Raio de Atuação: {radius} km
        </label>
        <input
          type="range"
          min="10"
          max="2000"
          step="10"
          value={radius}
          onChange={(e) => handleRadiusChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>10 km</span>
          <span>2.000 km</span>
        </div>
      </div>
    </div>
  );
}
