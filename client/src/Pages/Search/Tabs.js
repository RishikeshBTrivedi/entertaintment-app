import {React , useState} from 'react'
import "./Tabs.css"

function Tabs() {
    const [searchType, setsearchType] = useState("")
    const setMovie = () =>{
        
        setsearchType("movie")
        console.log(searchType)
    }
    const setTV = () =>{
        
        setsearchType("tv")
        console.log(searchType)
    }
  return (
    
        <div className="tab" type = {searchType}>
            <button className="tablinks" value = "movie" onClick={setMovie}>Movies</button>
            <button className="tablinks" value = "tv" onClick={setTV}>TV Series</button>
       </div>
    
  )
}

export default Tabs