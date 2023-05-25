import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"


function CountryDetails() {

  const params = useParams()

  const [ details, setDetails ] = useState(null)



 

  if (details === null) {
    return (
    <div>Loading...</div>
    )}

  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails