import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <Movie key={movie.show.id} movie={movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default Movies;
