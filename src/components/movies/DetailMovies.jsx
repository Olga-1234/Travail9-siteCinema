import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DetailsMovies = ({match}) => {
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
        setVideos(data.results);
      });
    window.scrollTo(0, 0);
  }, [filmId]);

  return (
    <div>
      <nav className="navbar  navbar-light bg-navBar fixed-top d-flex justify-content-start">
        
        <button className="btn title-genre">
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
</svg></Link>
          </button>
          <strong className="navbar-brand text-light text-bold">
            TangilaFilm.<span className="navbar-tv">Tv</span>
          </strong>
      </nav>

      <div className="container py-5">
        <div clasName="d-flex justify-content-center">
          <iframe
            className="col d-flex justify-content-center py-4"
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
