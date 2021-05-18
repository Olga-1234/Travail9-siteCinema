import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "react-loading";

const DetailsSeries = ({ match }) => {
  const serieId = match.params.Id;

  const [detailSerie, setDetailSerie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${serieId}?api_key=6f82743b4851e8b71cb17f8d769a7941&language=fr-FR`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data : ", data);

        setDetailSerie(data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [serieId]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${serieId}/videos?api_key=6f82743b4851e8b71cb17f8d769a7941`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setVideos(data.results);
      });
  }, [serieId]);
  return (
    <div>
      <nav className="navbar navbar-light bg-navBar fixed-top d-flex justify-content-center">
        <button className="btn title-genre">
          <Link to="/series">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-return-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </Link>
        </button>
        <strong className="navbar-brand text-light text-bold">
          TangilaFilm.<span className="navbar-tv">Tv</span>
        </strong>
      </nav>

      <div className="container py-5">
        <div className="d-flex justify-content-center">
          {loading ? (
            <Loading type="spin" color="orange" className="m-auto" />
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="col">
          <span className="color-text-details">Titre:</span> {detailSerie.name}
        </div>
        <div className="col">
          <span className="color-text-details">
            Durée moyenne d'une épisode:
          </span>{" "}
          {detailSerie.episode_run_time} min
        </div>
        <div className="col">
          <span className="color-text-details">Total Saison:</span>{" "}
          {detailSerie.number_of_seasons}
        </div>
        <div className="col">
          <span className="color-text-details">Total Episode:</span>{" "}
          {detailSerie.number_of_episodes}
        </div>
        <div className="col">
          <span className="color-text-details">Resumé:</span>{" "}
          {detailSerie.overview}
        </div>
      </div>
    </div>
  );
};

export default DetailsSeries;
