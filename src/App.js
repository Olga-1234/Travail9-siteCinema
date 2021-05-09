import React, { useState, useEffect } from "react";
import Movie from "./components/MovieImg";
import Navbar from "./components/Navbar";
import "./components/NavBar/style.css";
import img from "./components/imges/bg.png";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom";

import HeaderMovies from "./components/MoviesCategories/headerMovies";

import Suggestion from "./components/MoviesCategories/suggestion";
import Series from "./components/series";

const Api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6f82743b4851e8b71cb17f8d769a7941&page=1";
const SearchApi =
  "https://api.themoviedb.org/3/search/movie?api_key=6f82743b4851e8b71cb17f8d769a7941&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [seriesDisplay, setseriesDisplay] = useState(true);
  const handelClick = () => {
    if (seriesDisplay) {
      setseriesDisplay(false);
    } else {
      setseriesDisplay(true);
    }
  };


  const onSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    {
      fetch(SearchApi + searchItem)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  };

  useEffect(() => {
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  if (movies.length === 0) {
    return <h1>Chargement...</h1>;
  } else {
    return (
      <div>
        <section id="first-page">
          <Navbar
            handleSubmit={handleSubmit}
            onSearch={onSearch}
            search={searchItem}
          />

          <div className="contenair">
            <img src={img} className="img-fluid" alt="..."></img>
          </div>

          <div className="bg-movie-section">
            <HeaderMovies />
            <Switch>
              {/* <Route exact path="/" component={Home}/> */}
              <Route exact path="/suggestion" component={Suggestion} />
            </Switch>
            <div className="album py-6">
             
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  {movies.length > 0 &&
                    movies.map((movie) => <Movie key={movie.id} {...movie} />)}
                </div>
              </div>
              <div className="container">
                <Switch>
                  <Route path="/serie" component={Series} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    );
  }
};

export default App;
