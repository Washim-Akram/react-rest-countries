import React from 'react';
import './Country.css';

const Country = (props) => {
    
    const {name, capital, population, flag, region} = props.country;

    return (
        <div className = "country">
            <h1>Name : {name}</h1>
            <h2>Capital : {capital}</h2>
            <h3>Population : {population}</h3>
            <h4>Region : {region}</h4>
            <img src={flag} alt="Country Flag" />
        </div>
    );
};

export default Country;