import axios from 'axios'
import React from 'react'
import {useEffect} from"react"
import Chip from "./Chip"
import "./Genres.css"
function Genres({
    selectedGenres,
  setSelectedGenres,
  genres,
  setgenres,
  type,
}) 
{
    const fetchGenres = async () =>{
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            setgenres(data.genres)
            console.log(data.genres)
    }
    useEffect(() => {
    
        fetchGenres();
        return () =>{
            setgenres({})
        }
    }, [])
    
  return (
      <div className='options'>
        {genres.map((genre) => (
        <Chip
          label={genre.name}
          key={genre.id}
        />
      ))}
      </div>
    
  )
}

export default Genres