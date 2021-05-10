
import img from "./imges/bg.png";

import HeaderMovies from "./MoviesCategories/headerMovies";

import MovieImg from "./MovieImg";
import React,{useState, useEffect} from 'react';
import Navbar from "./Navbar";
import {Link} from "react-router-dom"




const Api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6f82743b4851e8b71cb17f8d769a7941&page=1";
const SearchApi ="https://api.themoviedb.org/3/search/movie?api_key=6f82743b4851e8b71cb17f8d769a7941&query=";

const Movies =()=> {
    const [movies, setMovies]=useState([]);
    const [searchItem, setSearchItem] = useState("");


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

        return (
            <div>
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
            
            <div className="album py-6">
            <Link to="/Details">
              <div className="container">
              
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {movies.length>0 && movies.map(movie=>
      <MovieImg key={movie.id} {...movie}/>)}

      
      </div>

              </div>
              </Link>
            </div>
            
          </div>

                
     
            </div>
        )
    
}

export default Movies;
