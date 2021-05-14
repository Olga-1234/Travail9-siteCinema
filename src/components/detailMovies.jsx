import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DetailsMovies = ({
  match,
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
  popularity,
  original_language,
}) => {
  const filmId = match.params.Id;

  const [detailMovie, setDetailMovie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?api_key=6f82743b4851e8b71cb17f8d769a7941&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data : ", data);

        setDetailMovie(data);
      });
  }, [filmId]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=6f82743b4851e8b71cb17f8d769a7941&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results);
        setVideos(data.results);
      });
    window.scrollTo(0, 0);
  }, [filmId]);

  return (
    <div>
      <nav className="navbar  navbar-light bg-navBar fixed-top d-flex justify-content-center">
        <div className="">
          <strong className="navbar-brand text-light text-bold">
            TangilaFilm.<span className="navbar-tv">Tv</span>
          </strong>
          <button>
            <Link to="/">Retour</Link>
          </button>
        </div>
      </nav>

      <div className="container py-5">
        <div clasName="d-flex justify-content-center">
          <iframe
            className=" col d-flex justify-content-center  py-4"
            width="400"
            height="500"
            src={`https://www.youtube.com/embed/${videos
              .slice(0, 1)
              .map((video) => video.key)}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="col"><span className="color-text-details">Titre:</span> {detailMovie.title}</div>
        <div className="col">
        <span className="color-text-details">Date de Réalisation:</span> {detailMovie.release_date}
        </div>
        <div className="col"><span className="color-text-details">Resumé:</span> {detailMovie.overview}</div>
      </div>
    </div>
  );
};

export default DetailsMovies;
