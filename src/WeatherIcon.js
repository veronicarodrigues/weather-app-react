import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Prueba(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const weatherCode = props.code;
  const lastChar = weatherCode.at(-1);

  if (lastChar === "d") {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="DarkOrange"
        size={props.size}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="Navy"
        size={props.size}
        animate={true}
      />
    );
  }
}

//const str = 'Coding Beauty';
//const lastChar = str.at(-1);
//console.log(lastChar); // y
