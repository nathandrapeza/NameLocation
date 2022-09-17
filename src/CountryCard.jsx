import React from 'react';
import ReactCountryFlag from "react-country-flag";

const CountryCard = ({country}) => {
    return (
        <div className="CountryCard">
            <p>{((country.probability*100)).toString().slice(0,5)}% chance you're from:</p>
            <div>
                <h3>{country.country_id}</h3>
            </div>
            
            <ReactCountryFlag 
                className="emojiFlag"
                countryCode={country.country_id}
                style={{
                    fontSize: '5em',
                }}
            />
            
            
        </div>
    );
}

export default CountryCard;