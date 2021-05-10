import SerieImg from "./serieImg";
import React,{useState, useEffect} from 'react';
import Navbar from "./Navbar";
import "./NavBar/style.css";
import img from "./imges/bg.png";
import { Route, Switch } from "react-router-dom";
import HeaderMovies from "./MoviesCategories/headerMovies";
import Suggestion from "./MoviesCategories/suggestion";

const ApiSeries ="https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=6f82743b4851e8b71cb17f8d769a7941&language=en-US&page=1";

const Series = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch(ApiSeries)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results);
      });
  }, []);

  return (
    <div>
      <Navbar
            // handleSubmit={handleSubmit}
            // onSearch={onSearch}
            // search={searchItem}
            // onClickMovie={handelClickMovie}

          />

          <div className="contenair">
            <img src={img} className="img-fluid" alt="..."></img>
          </div>

          <div className="bg-movie-section">
            <HeaderMovies />
            <Switch>
              <Route exact path="/suggestion" component={Suggestion} />
            </Switch>
            <div className="album py-6">

              <div className="container">
              
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {series.length>0 && series.map(serie=>
        <SerieImg key={serie.id} {...serie}/>)}
      </div>
              
              </div>
            </div>
          </div> 
   </div>
  )
};

export default Series;
