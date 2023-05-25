
import { useState } from 'react';
import './App.css';

import countriesInfo from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {

const [countries, setCountries] = useState(countriesInfo)

  return (


    <div className="App">
    <Navbar />

    <CountriesList countriesLista={countries} />

 
 <Routes>
<Route path="/country/:details" element={ <CountryDetails/> } />
 </Routes>

    </div>
  );
}

export default App;
