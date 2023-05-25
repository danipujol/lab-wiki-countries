
import { useState } from "react"
import { Link } from "react-router-dom"


function CountriesList(props) {

   
  return (
    <div>

    <h3>Countries List</h3>

    {props.countriesLista.map((eachCountry) => {
    return(

        <div key={eachCountry.alpha3Code}>

        <img src={(`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`)} alt="bandera" />
        <br />
        <Link to={`/country/${eachCountry.alpha3Code}`}  >
            
        {eachCountry.name.common}

        </Link>

                      

        
        </div>

    )
    })}

    </div>
  )
}

export default CountriesList