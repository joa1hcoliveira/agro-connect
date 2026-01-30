'use client';

import { useState } from 'react';

interface Suggestion {
  queryPrediction?: {
    text: {
      text: string;
    };
    structuredFormat?: {
      mainText: {
        text: string;
      };
    };
  };
}

export default function PlacesSearch() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/places/autocomplete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input,
          locationBias: {
            circle: {
              center: { latitude: 40, longitude: -110 },
              radius: 10000,
            },
          },
          includedPrimaryTypes: [],
          includedRegionCodes: [],
          languageCode: '',
          regionCode: '',
          origin: { latitude: 0, longitude: 0 },
          inputOffset: 0,
          includeQueryPredictions: true,
          sessionToken: '',
        }),
      });

      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Buscar Lugares</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite um lugar..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
      <ul className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="p-2 border rounded">
            {suggestion.queryPrediction?.structuredFormat?.mainText?.text ||
             suggestion.queryPrediction?.text?.text ||
             'Sugestão sem texto'}
          </li>
        ))}
      </ul>
    </div>
  );
}