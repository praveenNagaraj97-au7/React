import React from "react";

import "../styles/app.css";

import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

const App = () => {
  return (
    <div className='movie-list'>
      <MovieList />
      <MovieDetail />
    </div>
  );
};

export default App;
