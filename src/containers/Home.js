import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

// Calling env file doesn't work
// const weatherKey = process.env.OPENWEATHERMAP_KEY;
const weatherKey = `7e36d76354fcaf2557bf7ddf78b3d5e6`;

function Home() {
  const history = useHistory();

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherKey}`
      )
      .then(function (response) {
        // successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // best practice: no console logs!!!
        console.warn(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  console.log("weatherData", weatherData);

  return (
    <div className="body">
      <Header />
      <main className="Home">
        <h2>
          Weather in <span className="Highlight">{city}</span>
        </h2>
        <div className="WeatherInfo">
          <div className="WeatherInfo_Basic">
            <div className="WeatherInfo_Image">
              <WeatherImage weatherType={weatherType} />
            </div>
            <p className="WeatherInfo_Type">{weatherType}</p>
            <h3 className="Label">current temperature:</h3>
            <p className="WeatherInfo_Temperature">{currentTemp}</p>
          </div>

          <div className="WeatherInfo_Extra">
            <div className="WeatherInfo_Extra_Column">
              <h3 className="Label">high temperature:</h3>
              <p className="WeatherInfo_Temperature_Small">{highTemp}</p>
              <h3 className="Label">low temperature: </h3>
              <p className="WeatherInfo_Temperature_Small">{lowTemp}</p>
              <h3 className="Label">wind speed:</h3>
              <p className="WeatherInfo_Temperature_Small">{windSpeed}</p>
            </div>
            <div className="WeatherInfo_Extra_Column">
              <h3 className="Label">cloudiness:</h3>
              <p className="WeatherInfo_Temperature_Small">{cloudiness}</p>
              <h3 className="Label">humidity:</h3>
              <p className="WeatherInfo_Temperature_Small">{humidity}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
