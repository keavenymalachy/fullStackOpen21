import React from 'react'
import Countries from './Countries'
import Country from './Country'

const Content = ({ countries, setCountries }) => {

    if (countries.length > 10) {

        return (
            <div>Too many results, keep typing.</div>
        )
    }
    else if ((countries.length <= 10 && countries.length > 1) || countries.length === 0) {
        return (
            <div>
                <ul>
                    {countries.map(country =>
                        <li key={country.name.common}>{country.name.common}
                            <button onClick={()=> setCountries([country])}>show</button></li>)}
            </ul>
            </div >
        )
    }
    else if (countries.length == 1) {
    return (
        <Country key={countries[0].name} country={countries[0]} />
    )
}
}

export default Content