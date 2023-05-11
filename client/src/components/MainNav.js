import React from 'react'
let links = {
    trending:"/",
    movies:"/movies",
    series:"/series",
    search:"/search"
}
function MainNav() {
  return (
    <nav className="navbar">
        <a href={links.trending}>Trending</a>
        <a href={links.movies}>Movies</a>
        <a href={links.series}>TV Series</a>
        <a href={links.search}>Search</a>
    </nav>
  )
}

export default MainNav