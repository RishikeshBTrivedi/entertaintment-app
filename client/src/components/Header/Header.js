import React from 'react'
import "./Header.css"
import MainNav from"../MainNav"
let links = {
    trending:"/",
    movies:"/movies",
    series:"/series",
    search:"/search"
}
const Header = () => {
  return (
      <div>
    <span className='header1' onClick = {() =>{
      window.scroll(0,0)
    }}>👨‍💻 Rishikesh's Movie App 🎥</span>
    {/* <MainNav/> */}
    
    
    <nav className='header2'>
        <a href={links.trending} className = "heading">Trending</a>
        <a href={links.movies}className = "heading">Movies</a>
        <a href={links.series}className = "heading">TV Series</a>
        <a href={links.search}className = "heading">Search</a>
    </nav>
    </div>
  )
}

export default Header
