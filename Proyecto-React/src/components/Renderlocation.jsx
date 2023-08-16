import React from 'react'
import Location from './Location'

export default function Renderlocation() {
    const [locations, setLocations] = useState([]);
  const initialurl = "https://rickandmortyapi.com/api/location"

  const fetchLocation = () =>{
    fetch(initialurl)
    .then(response=> response.json())
    .then(data => setLocations(data.results))
    .then(error => console.log(error))
  }


  useEffect(() => {
    fetchLocation(initialurl);
  }, [])
  return (
    <div>
        <Location location={locations}/>
    </div>
  )
}
