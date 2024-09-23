import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "01": "clear sky",
        "02": "clear sky",
        "03": "few clouds",
        "04": "few clouds",
        "04": "scattered clouds",
        "05": "scattered clouds",
        "06": "broken clouds",
        "07": "broken clouds",
        "08": "shower rain",
        "09": "shower rain",
        "10": "rain",
        "11": "rain",
        "12": "thunderstorm",
        "13": "thunderstorm",
        "14": "snow",
        "15": "snow",
        "16": "mist",
        "17": "mist"
    };

return (
    <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#1e1e1e"
        size={props.size}
        animate={true}
        />
    );
}
