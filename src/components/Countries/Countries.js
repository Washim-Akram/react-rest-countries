import React, { useEffect, useState } from 'react';
import '../Countries/Countries.css';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h1>Travelling Around The World!!!</h1>
            <h2 className = "Countries-h2-style">Available Countries : {countries.length}</h2>
            <div className = "Countries-container">
            {
                countries.map(country => <Country
                    key = {country.alpha2Code}
                    country = {country}
                    ></Country>)
            }
            </div>
        </div>
    );
};
export default Countries;