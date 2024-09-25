import React from "react";
import "./WeatherInfo";

export default function WeatherIcon(props) {
    let code = {
        "Clear Sky Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="Clear Sky Day" />,
        "Clear Sky Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png" alt="Clear Sky Night" />,
        "Few Clouds Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"  alt="Few Clouds Day"/>,
        "Few Clouds Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png" alt="Few Clouds Night" />,
        "Scattered Clouds Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png" alt="Scattered Clouds Day" />,
        "Scattered Clouds Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png" alt="Scattered Clouds Night" />,
        "Broken Clouds Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="Broken Clouds Day" />,
        "Broken Clouds Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png" alt="Broken Clouds Night" />,
        "Shower Rain Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png" alt="Shower Rain Day" />,
        "Shower Rain Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-night.png" alt="Shower Rain Night" />,
        "Rain Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="Rain Day" />,
        "Rain Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png" alt="Rain Night" />,
        "Thunderstorm Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png" alt="Thunderstorm Day" />,
        "Thunderstorm Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-night.png" alt="Thunderstorm Night" />,
        "Snow Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png" alt="Snow Day" />,
        "Snow Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png" alt="Snow Night" />,
        "Mist Day": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png" alt="Mist Day" />,
        "Mist Night": <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png" alt="Mist Night" />
    };

    return (
        <div>
            {code[props.code]}
        </div>

    )
}
