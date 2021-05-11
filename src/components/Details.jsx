import { useState,useEffect } from "react";

const Details=(props)=>  {
        const filmId = props.match.params.Id;
        const [detailsMovie,setDetailsMovie]=useState([])
        const IMG_API = "https://image.tmdb.org/t/p/w1280";

        useEffect(() => {
          fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=6f82743b4851e8b71cb17f8d769a7941&language=en-US`)
           .then((response) => response.json())
          .then((data) => {
                  console.log("data : ",data)
                setDetailsMovie(data);
         })
        }, [])


      
        return (
            <div>

                   <nav className="navbar navbar-light bg-navBar fixed-top d-flex justify-content-center">
  <div class="">
    <strong className="navbar-brand text-light text-bold">
    TangilaFilm.<span className="navbar-tv">Tv</span>
    </strong>
    </div>
    </nav>

    <div className="container ">
            <a href="#first-page"><p className="py-5">ACCUEIL</p> </a>

        </div>
         <p>
        
                <img src={IMG_API+detailsMovie.backdrop_path} alt="" srcset=""/>
        </p>

            </div>
        )
}

export default Details
