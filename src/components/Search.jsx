import React from "react";
import { useState } from "react";
import Weather from "./Weather";


function Search() {
    const [city, setCity] = useState("miami");
    
    const [searchInput,setSearchInput] = useState("")
/*use state for both city and searchInput */
    
   
    function handleChange(event) {
        setSearchInput(event.target.value)
      }
/* handleChange, handles a change to the value of the search text */
    function handleSubmit(event) {
       event.preventDefault()
        setCity(searchInput);
        
        
    }
    /* handlesubmit, handles a change when submit is clicked and passes the city value to the weather component.  */

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input
            type="text" 
            placeholder="Search..." 
            value={searchInput}
            onChange={handleChange}
            />
            <button type="submit">Search</button>
            
            </form>
            <Weather 
                city = {city}
                /* city prop for weather data transfer */
            />
        </div>
    );

}

export default Search;