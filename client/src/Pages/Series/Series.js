import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios"
import SingleContent from '../../components/SingleContent/SingleContent'

import CustomPagination from "../../components/Pagination/CustomPagination"
import Genres from '../../components/Genres'
const Series = () => {
  const [content, setContent] = useState([])
  const [page, setpage] = useState(1)
  const [selectedGenres, setselectedGenres] = useState([])
  const [genres, setgenres] = useState([])
    const fetchSeries = async () => {
        console.log("page = "+page)
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        console.log(data.results);
        setContent(data.results)
    }
    useEffect(() => {
      fetchSeries();
    }, [page])
  return (
    <div className='movies'>
      <span className='pageTitle'>TV Series</span>
      {/* <Genres
      type = "movie"
      selectedGenres = {selectedGenres}
      genres = {genres}
      setgenres = {setgenres}
      setselectedGenres = {setselectedGenres}/> */}
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
              first_air_date = {c.first_air_date}
            />
          ))}
      </div>
      <CustomPagination setpage = {setpage}/>
    </div>
  )
}

export default Series