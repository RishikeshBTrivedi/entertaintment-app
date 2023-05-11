import React from 'react'
import { useState , useEffect } from 'react'
import "./Search.css"
// import Modals from '../../components/Modals'
// import { FaSearch } from "react-icons/fa";
import axios from "axios"
import Tabs from './Tabs'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from "../../components/Pagination/CustomPagination"
const Search = () => {
  const [type, setType] = useState(0)
    const setMovie = () =>{
        
        setType(0)
        console.log(type)
        console.log(searchText)
    }
    const setTV = () =>{
        
        setType(1)
        console.log(type)
        console.log(searchText)
    }
  const [searchText, setSearchText] = useState("")
  const [content, setContent] = useState([])
  const [page, setpage] = useState(1)
  const fetchSearch = async () => {
    console.log("page = "+page)
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
    console.log(data.results);
    setContent(data.results)
  }
  useEffect(() => {
    fetchSearch();
  
  }, [type,page])
  
  return (
    <div className='search'>
      
        <span className='pageTitle'>Search</span>
          <div>
          <input  placeholder = "Search"className='searchInput' value = {searchText}onChange={(event) => {
            setSearchText(event.target.value)
            
          }}/>
          
          <button className='submitBtn'onClick={fetchSearch}>Submit</button>
          <div className="tab" >
            <button className="tablinks" value = "movie" onClick={setMovie}>Movies</button>
            <button className="tablinks" value = "tv" onClick={setTV}>TV Series</button>
          </div>
          <hr/>
          <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type?"tv":"movie"}
              vote_average={c.vote_average}
              first_air_date = {c.first_air_date}
            />
          ))}
          
      </div>
      {/* <Modals></Modals> */}
      <CustomPagination setpage = {setpage}/>
    </div>
          </div>
          
        
    
  )
}

export default Search