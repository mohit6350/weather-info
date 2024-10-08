import React, { useState } from "react";

const Card = () => {

    const [data, setData] = useState("")


    const clickHandler = () => {
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/2024-10-08?key=XAWQXR8LCGXRBB83UER5EUBCF')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error('Error fetching data : ' + error))
    }


    return(
        <div>
            <h4>Enter City</h4>
            <input type="text"></input>
            <button onClick={clickHandler}>check</button>
            <p>{data.resolvedAddress}</p>
        </div>
    )
}

export default Card;