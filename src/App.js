import './App.css'
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from 'react';



function App() {

  const [countries, setCountries] = useState([]);
  const [searchName, setSearchName] = useState('');
  function changeBackgroundHover(e) {
    e.target.style.background = '#444';
  }

  function changeBackgroundLeave(e) {
    e.target.style.background = '#999';
  }

  return (
    <>
      <h1>Name Location</h1>
      <h2>Enter a name, and we'll try to guess where it's from!</h2>
      <form className="searchbar">
        <input className="textInput" type="text" name="name" placeholder='...'/>
        <button onMouseEnter={changeBackgroundHover} onMouseLeave={changeBackgroundLeave}><AiOutlineSearch></AiOutlineSearch></button>
      </form>
      <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/flag-ceuta-melilla_1f1ea-1f1e6.png"/>
    </>
  );
}

export default App;
