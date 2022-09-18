import './App.css'
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import CountryCard from './CountryCard';


/*
const country1 = {
"name":"michael",
"country":[{"country_id":"US","probability":0.08986482266532715},{"country_id":"AU","probability":0.05976757527083082},{"country_id":"NZ","probability":0.04666974820852911},{"country_id":"US","probability":0.08986482266532715},,{"country_id":"US","probability":0.08986482266532715},{"country_id":"US","probability":0.08986482266532715},{"country_id":"US","probability":0.08986482266532715},{"country_id":"US","probability":0.08986482266532715}]};
*/

const API_URL = "https://api.nationalize.io/?name=";

function App() {

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [searchError, setSearchError] = useState(false);

  //const [searchName, setSearchName] = useState('');

  const searchName = async (name) => {
    const response = await fetch(`${API_URL}${name}`)
    const data = await response.json();
    setCountries(data.country);

    setDisplayName(name);
    if (data.country.length===0) {
      console.log("weeee");
      setSearchError(true);
    } else {
      setSearchError(false);
    }
    console.log(data);

    
    
    setSearchTerm("")
  }

  function changeBackgroundHover(e) {
    e.target.style.background = '#444';
  }

  function changeBackgroundLeave(e) {
    e.target.style.background = '#999';
  }

  return (
    <div className='main'>
      <h1>Name Location</h1>
      <h2>Enter a name, and we'll try to guess where it's from!</h2>
      
      <div className="searchbarContainer">
        <div className="searchbar">
          <input
            value={searchTerm}
            type="text" name="name"
            placeholder='...'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onMouseEnter={changeBackgroundHover} onMouseLeave={changeBackgroundLeave} onClick={() => searchName(searchTerm)}>
            <AiOutlineSearch ></AiOutlineSearch>

          </button>
          </div>
      </div>
      <p>(Powered by <a href="https://nationalize.io/">nationalize.io</a>)</p>
      
      {countries?.length > 0 ? (
        <>
          <h4>Data for {displayName.charAt(0).toUpperCase() + displayName.slice(1)}:</h4>
          <div className="container">
            {countries.map((country) => (<CountryCard country={country}></CountryCard>))}
          </div>
        </>
      ) : (
        <>
        </>
      )}
    
      {searchError&&(displayName.length>0) ? (<h4>Sorry, the name {displayName.charAt(0).toUpperCase() + displayName.slice(1)} was not found in the database.</h4>) : (<></>)}
      
    </div>
  );
}

export default App;
