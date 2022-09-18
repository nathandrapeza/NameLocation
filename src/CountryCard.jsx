import React from 'react';
import ReactCountryFlag from "react-country-flag";

const CountryCard = ({country}) => {
    return (
        <div className="CountryCard">
            <p>{((country.probability*100)).toString().slice(0,5)}% chance you're from:</p>
            <h3>{country.country_id}</h3>
            <div className="countryCard-flag">
            <ReactCountryFlag 
            
                countryCode={country.country_id}
                style={{
                    fontSize: '5em',
                }}
            />
            </div>
            
            
        </div>
    );
}

export default CountryCard;