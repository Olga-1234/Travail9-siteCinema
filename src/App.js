import React,{useState, useEffect} from 'react';
import Movie from "./components/Movie";
import Navbar from "./components/Navbar"

const API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6f82743b4851e8b71cb17f8d769a7941&page=2";

const App = ()=> {
  const [movies, setMovies]=useState([]);
  useEffect (()=>{fetch(API)
  .then(response=>response.json())
  .then(data=>{
    setMovies(data.results);
    console.log(data);
  })},[])
  return (

    <div>
      <Navbar/>
    {movies.length>0 && movies.map(movie=>
      <Movie key={movie.id} {...movie}/>)}
      
      
    </div>


  );
}

export default App;
