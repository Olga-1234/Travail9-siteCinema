import React from "react";
import { Link } from "react-router-dom";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Card = ({
  title,
  name,
  overview,
  poster_path,
  vote_average,
  release_date,
  popularity,
  id,
  original_language,
  path,
}) => {
  return (
    <>
      <div className="col py-4">
        <div className="card shadow-sm">
          <Link to={`/${path}/${id}`}>
            <div className="card-img">
              <img className="" src={IMG_API + poster_path} alt="film" />
            </div>

            <div className="card-body">
              <h5 className="card-title text-center ">
                {name}
                {title}
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
