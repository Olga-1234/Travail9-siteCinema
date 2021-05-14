import React from "react";
import {Link} from "react-router-dom"

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieImg = ({
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
  popularity,
  id,
  original_language,mediaType
}) => {
  return (
   
    <>
    
      <div className="col py-4">
        <div className="card shadow-sm">
        <Link to={`/detailMovies/${id}`}>
          <div className="card-img">
            <img
              className=""
              src={IMG_API + poster_path} alt="les images"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{popularity}</p>
          </div>
          </Link>
        </div>
      </div>
      
      
    </>
  );
};
export default MovieImg;
