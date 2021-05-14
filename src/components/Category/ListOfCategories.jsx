import React, { useState, useEffect } from "react";
import CategorieMovies from "./CategoryItem";

const ListOfCategories = ({ onclickShowCategory, mediaType }) => {
  const CategoryMoviesApi = `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=6f82743b4851e8b71cb17f8d769a7941&language=fr-FR`;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(CategoryMoviesApi)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.genres);
      });
  }, [CategoryMoviesApi]);

  return (
    <div>
      <div className="container text-light">
        <div className="row justify-content-md-center">
          {categories.map((CategoMovie) => (
            <CategorieMovies
              key={CategoMovie.id}
              {...CategoMovie}
              onclickShowCategory={onclickShowCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfCategories;
