import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
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
    //     <div className="col-md-2">
    // <div className="card card-class" style={{width: '15rem'}}>
    // <img className="card-img-top" src={IMG_API + poster_path} />
    // <div className="card-body">
    //   <p className="card-text">{title}</p>
    //   <p className="card-text">{overview}</p>
    //   <span>{id}</span>
    // </div>
    // </div>
    // </div>
    <>
      <div className="col py-4">
        <div className="card shadow-sm">
          <div className="card-img">
            <img
              className=""
              src={IMG_API + poster_path}
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
export default Movie;
