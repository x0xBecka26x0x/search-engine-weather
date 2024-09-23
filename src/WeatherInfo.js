import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="Weather-Info">
            <h1><strong>{props.data.city}</strong></h1>
        <ul className="description">
            <li>
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
             <div>
              <div>
                <WeatherIcon className="icon" code={props.data.condition.icon} size={52} />
              </div>

              <div>
                <WeatherTemperature celsius={Math.round(props.data.temperature)} />
              </div>
              </div>
            </div>
            </div>
                <div className="col-6">
                    <span className="condition">
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {Math.round(props.data.wind)}  km/h%</li>
                        </ul>
                    </span>
                </div>
        </div>
    );
}