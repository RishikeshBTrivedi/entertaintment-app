import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios"
import SingleContent from '../../components/SingleContent/SingleContent'
import "./Trending.css"
import CustomPagination from "../../components/Pagination/CustomPagination"
//using MovieDB API to frtch data
//API Key -> fdb12bcff603cd86ba6b0ee109584ec9
//Sample Request -> https://api.themoviedb.org/3/movie/550?api_key=fdb12bcff603cd86ba6b0ee109584ec9

const Trending = () => {
    const [content, setContent] = useState([])
    const [page, setpage] = useState(1)
    
    const fetchTrending = async () => {
        console.log("page = "+page)
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        console.log(data.results);
        setContent(data.results)
    }
    useEffect(() => {
      fetchTrending();
    }, [page])
    
  return (
    <div>
        <span className='pageTitle'>Trending</span>
        <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <hr/>
      <CustomPagination setpage = {setpage}/>
    </div>
  )
}

export default Trending