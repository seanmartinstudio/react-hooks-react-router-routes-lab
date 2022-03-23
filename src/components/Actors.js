import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsRender = actors.map((actor) => {
    const actorsMoviesRender = actor.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })
    return (
      <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      <p>Movies:</p>
    <ul>
      {actorsMoviesRender}
    </ul>
    </div>
    )
  })
  return ( 
  <div>
    <h1>Actors Page</h1>
    {actorsRender}
  </div>
  )
}

export default Actors;
