import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios"
import SingleContent from '../../components/SingleContent/SingleContent'
import "./Movies.css"
import CustomPagination from "../../components/Pagination/CustomPagination"
import Genres from '../../components/Genres'
import Modal from '../Modal/Modal'
const Movies = () => {
  const [content, setContent] = useState([])
  const [page, setpage] = useState(1)
  const [selectedGenres, setselectedGenres] = useState([])
  const [genres, setgenres] = useState([])
    const fetchMovies = async () => {
        console.log("page = "+page)
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        console.log(data.results);
        setContent(data.results)
    }
    useEffect(() => {
      fetchMovies();
    }, [page])
  return (
    <div className='movies'>
      <span className='pageTitle'>Movies</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setpage = {setpage}/>
    </div>
  )
}

export default Movies