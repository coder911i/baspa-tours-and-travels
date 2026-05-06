import { useState, useEffect } from 'react';

type WeatherData = {
  temp: number;
  condition: string;
  wind: number;
  loading: boolean;
  error: boolean;
};

const getWeatherLabel = (code: number): string => {
  if (code === 0) return 'Clear Sky';
  if (code >= 1 && code <= 3) return 'Partly Cloudy';
  if (code >= 45 && code <= 48) return 'Foggy';
  if (code >= 51 && code <= 67) return 'Drizzle/Rain';
  if (code >= 71 && code <= 77) return 'Snow';
  if (code >= 80 && code <= 82) return 'Rain Showers';
  if (code === 95) return 'Thunderstorm';
  return 'Unknown';
};

export function useWeather(lat: number, lon: number) {
  const [data, setData] = useState<WeatherData>({
    temp: 0,
    condition: '',
    wind: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      setData((prev) => ({ ...prev, loading: true, error: false }));
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&timezone=Asia%2FKolkata`
        );
        if (!res.ok) throw new Error('Weather fetch failed');
        const json = await res.json();
        
        if (isMounted) {
          setData({
            temp: json.current.temperature_2m,
            condition: getWeatherLabel(json.current.weathercode),
            wind: json.current.windspeed_10m,
            loading: false,
            error: false,
          });
        }
      } catch (err) {
        if (isMounted) {
          setData((prev) => ({ ...prev, loading: false, error: true }));
        }
      }
    };

    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, [lat, lon]);

  return data;
}
