import React from "react";
import { movies } from "../data";

function Movies() {

const moviesRender = movies.map((item) => { 
  const moviesGenres = item.genres.map((genre) => {
    return <li key={genre}>{genre}</li>
  })
  return (
  <div key={item.title}>
    <h3>Name: {item.title}</h3>
    <p>Time: {item.time}</p>
    <p>Genres:</p>
    <ul>
      {moviesGenres}
    </ul>
  </div>
  )
})


  return (
  <div>
  <h1>Movies Page</h1>
  {moviesRender}
  </div>
  
  )
}

export default Movies;
