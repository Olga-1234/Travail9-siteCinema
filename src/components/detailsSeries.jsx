import { useState, useEffect } from "react";

const DetailsSeries = (props) => {
  const serieId = props.match.params.Id;
  // const [detailsSerie, setDetailsSerie] = useState([]);
  // const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${serieId}?api_key=6f82743b4851e8b71cb17f8d769a7941&language=en-US`
      
    )
      .then((response) => response.json())
      .then((data) => {
        
        //setDetailsSerie(data);
      });
      window.scrollTo(0,0);
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
        <div className="">
          <strong className="navbar-brand text-light text-bold">
            TangilaFilm.<span className="navbar-tv">Tv</span>
          </strong>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row container-fluid">
        <div className="col-6 py-4">djdkdoeo</div>
          <div className="">
            <img
              className="col-6 py-4"
              // src={IMG_API + detailsSerie.backdrop_path}
              alt=""
              srcset=""
            />
           
            <iframe
              width="560"
              height="315"
              src= {`https://www.youtube.com/embed/${videos.slice(0,1).map(video=>video.key)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSeries;
