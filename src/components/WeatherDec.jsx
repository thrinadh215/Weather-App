import { useEffect, useState } from "react";
import "./WeatherDec.css";
// https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alerts=yes
const WeatherDec = ({ city }) => {
  const [Loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [Error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  useEffect(() => {
    if (!city) return;
    const fectchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alerts=yes`
        );
        if (!res.ok) throw new Error("City not found");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fectchWeather();
  }, [city]);
  console.log(weather);

  if (Loading) return <p>Loading....</p>;
  if (Error) return <p>{Error}</p>;
  if (!weather) return null;

  return (
    <div className="desc">
      <h2>Location : {weather.location.name}</h2>
      <h2>Country : {weather.location.country}</h2>
      <h2>Region : {weather.location.region}</h2>
      <h2>Date and Time : {weather.location.localtime}</h2>

      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        srcset=""
        id="icon"
        className={
          weather.current.condition.text==="Sunny"?"sunny":""
        }
      />

      <h2>Condition : {weather.current.condition.text}</h2>
      <h2>Temperature : {weather.current.temp_c}° C</h2>

      <div className="temp">
        <p>
          Max Temparature :{weather.forecast.forecastday[0].day.maxtemp_c} ☀️
        </p>
        <p>
          Average Temparature : {weather.forecast.forecastday[0].day.avgtemp_c}{" "}
          🌤️
        </p>
        <p>
          Min Temparature : {weather.forecast.forecastday[0].day.mintemp_c}🌔
        </p>
      </div>
    </div>
  );
};

export default WeatherDec;
