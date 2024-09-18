import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherDetails, setWeatherDetails] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherDetails({
            ready: true, 
            coordinates: response.data.coord,
            temperature: response.data.main.temp, 
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000), 
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon, 
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }

        function handleSubmit(event) {
            event.preventDefault();
            searchForm();
        }

        function handleSearchBox(event) {
            setCity(event.target.value);
        }


        function searchForm() {
            const apiKey = "";
            let apiUrl = ``;
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
                            autoFocus="on"
                            onChange={handleSearchBox} 
                        />
                    </div>
                    <div className="col-3">
                        <input 
                            type="submit" 
                            value="Search" 
                            className="btn btn primary w-100" 
                        />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherDetails} />
            <WeatherForecast coordinates={weatherDetails.coordinates} />
        </div>    
        );
    } else {
        searchForm();
        return "Loading...";
    }
}