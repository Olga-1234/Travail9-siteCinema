import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieImg = ({
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
  popularity,
  id,
  original_language,
}) => {
  return (
   
    <>
      <div className="col py-4">
        <div className="card shadow-sm">
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
        </div>
      </div>
    </>
  );
};
export default MovieImg;
