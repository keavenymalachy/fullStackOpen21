import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Content from './components/Content'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console.log('promise fulfilled')
        //console.log("Data:", response.data)
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)

    //console.log('Countries: ', countries[0].name.common)

    const regex = new RegExp(newFilter, 'i')
    const filterResult = allCountries.filter(country => country.name.common.match(regex))
    //console.log('Filter result: ', filterResult);
    
      setCountries(filterResult)
    
  }

  return (
    <div>

      <Filter value={newFilter} onChange={handleFilterChange} />

      <Content countries={countries} setCountries={setCountries}/>
    </div>
  )
}

export default App