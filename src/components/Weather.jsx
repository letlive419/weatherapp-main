import React from "react";
import axios from "axios";
import { useState } from "react";

function Weather() {
    
    const [temperature,setTemperature] = useState("");
    const api = process.env.REACT_APP_API_KEY;
 function getWeather() {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=miami&appid="+api+"&units=imperial")
    .then(function (response) {
        setTemperature(response.data.main.temp)
    })
 }
 getWeather()
    return(
        <div className="weather">
            <h1> Weather in miami is {temperature} </h1>
        </div>
    )

}

export default Weather;