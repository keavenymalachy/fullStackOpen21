import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Countries'

const Country = ({ country }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY

        let latitude = ""
        let longitude = ""
        //console.log(country.capital[0])

        axios
      .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]}&limit=1&appid=${api_key}`)
      .then(response => {
        //console.log('promise fulfilled')
        //console.log("Data:", response.data[0].lat)
        //console.log("Data:", response.data[0].lon)
        latitude = response.data[0].lat
        longitude = response.data[0].lon

        axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
      .then(response => {
        console.log('promise fulfilled')
        console.log("Data:", response.data)
        setWeather(response.data)
      })

      })

      

    })

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
            {Object.values(country.languages).map(language =>
                    <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png}/>
            <h3>Weather in {country.capital}</h3>
            <p>{weather.base}</p>
        </div>
    )
}

export default Country