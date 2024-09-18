import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherDetails, setWeatherDetails] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherDetails({
            ready: true,
            npmtemperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ss1.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchButton();
    }

    function handleSearchBox(event){
        setCity(event.target.value);
    }

    function searchButton() {
        const apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

  if (weatherDetails.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input
                        type="search"
                        placeholder="Enter a city..."
                        className="control"
                        onChange={handleSearchBox}
                    />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary" />
                </div>
            </div>
        </form>
        <h1>{weatherDetails.city}</h1>
        <ul>
            <li>
                <FormattedDate date={weatherDetails.date} />
            </li>
            <li className="text-capitalize">{weatherDetails.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <img
                    src="{weatherDetails.iconUrl}" 
                    alt="{weatherDetails.description}"
              />
              <div className="float-left">
                <span className="temperature">
                    {Math.round(weatherDetails.temperature)}
                </span>
              <span className="unit">°C</span>
              </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherDetails.humidity}%</li>
                    <li>Wind: {weatherDetails.wind}  km/h%</li>
                </ul>
            </div>
        </div>
    );
}
}