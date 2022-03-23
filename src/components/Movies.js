import React from "react";
import { movies } from "../data";

function Movies() {

const moviesRender = movies.map((item) => {
  return (
  <div>
    <h3>Name: {item.title}</h3>
    <li>Time: {item.time}</li>
    <ul> Genres:
      <li>{item.genres}</li>
    </ul>
  </div>
  )
})


  return (
  <div>
  <h1>Movies</h1>
  {moviesRender}
  </div>
  
  )
}

export default Movies;
