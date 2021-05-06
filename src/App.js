import React,{useState, useEffect} from 'react';
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import "./components/NavBar/style.css";
import img from "./components/imges/bg.png"
import Header from './components/header';

const Api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6f82743b4851e8b71cb17f8d769a7941&page=1";
const SearchApi="https://api.themoviedb.org/3/search/movie?api_key=6f82743b4851e8b71cb17f8d769a7941&query="


const App = ()=> {

  const [movies, setMovies]=useState([]);
  const [searchItem, setSearchItem]=useState("")
  const onSearch =(event)=>{
    setSearchItem(event.target.value)
  }

const handleSubmit=(event)=>{
  event.preventDefault();
  {fetch(SearchApi+searchItem)
    .then(response=>response.json())
    .then(data=>{
      setMovies(data.results);
    })}

}

  useEffect (()=>{fetch(Api)
  .then(response=>response.json())
  .then(data=>{
    setMovies(data.results);
  })},[])
  return (

    <div>

      <Navbar handleSubmit={handleSubmit} onSearch={onSearch} search={searchItem} />

      <div className="contenair">
      <img src={img} className="img-fluid"  alt="..."></img>
      </div>
      
      <div className="bg-movie-section">
      <Header/>

      <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {movies.length>0 && movies.map(movie=>
      <Movie key={movie.id} {...movie}/>)}
      </div>
    </div>
    </div>
      </div>
      

    </div>


  );
}

export default App;
