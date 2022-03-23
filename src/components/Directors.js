import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsRender = directors.map((director) => {
    const directedMoviesRender = director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })
    return (
    <div key={directors.name}>
      <h3>Name: {director.name}</h3>
      <div>Movies:</div>
    <ul>
      {directedMoviesRender}
    </ul>
    </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {directorsRender}
  </div>
  )
}

export default Directors;
