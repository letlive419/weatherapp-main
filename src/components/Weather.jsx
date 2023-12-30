import React from "react";
import axios from "axios";
import { useState } from "react";

function Weather(props) {
    
    const [temperature,setTemperature] = useState("");
    const api = process.env.REACT_APP_API_KEY;
    /* process.env is used to hide the api key */
    
    
 function getWeather() {
    
    
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+props.city+"+&appid="+api+"&units=imperial")

    .then(function (response) {
        setTemperature(response.data.main.temp)
    })
    
 .catch (function(err) {
    if (err.response && err.response.status === 404) {
        console.log(props.city)
        setTemperature("")
        
    } else {
    console.log("Error:", err);
}
 });
 }
 /*axios request retrieves the weather data to update the temperature variable and catch function catches any errors.  */
 getWeather()
   

    return(
        <div className="weather">
           
            <h1> Weather in {props.city} is {temperature}F </h1>
            /* props.city gets the  prop from search component.*/
        </div>
    )

}

export default Weather;