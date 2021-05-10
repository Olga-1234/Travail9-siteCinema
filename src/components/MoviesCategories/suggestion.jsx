import React, { useState, useEffect } from "react";
import CategorieMovies from "./categories";

const Suggestion = () => {
  const CategoryMoviesApi ="https://api.themoviedb.org/3/genre/movie/list?api_key=6f82743b4851e8b71cb17f8d769a7941&language=en-US";

  const [CategoMovies, setCategoMovies] = useState([]);

  useEffect(() => {
    fetch(CategoryMoviesApi)
      .then((response) => response.json())
      .then((data) => {
        setCategoMovies(data.genres);
        console.log(data.genres)
      });
  }, []);

  return (
    <div>
      
      <h1 className="text-light"></h1>
      <div className="container text-light">
     <div className="row justify-content-md-center">

      {CategoMovies.map(CategoMovie => 
        <CategorieMovies key={CategoMovie.id} {...CategoMovie} />
      )}
      </div>
      </div>
    </div>
  );
};

export default Suggestion;
