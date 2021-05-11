import SerieImg from "./serieImg";
import React,{useState, useEffect} from 'react';
import Navbar from "./Navbar";
import "./NavBar/style.css";
import img from "./imges/bgd.jpg";
import HeaderMovies from "./MoviesCategories/headerMovies";
import Pagination from "react-js-pagination";



const Series = () => {
  const [series, setSeries] = useState([]);
  const [searchItemSerie, setSearchItemSerie] = useState("");
  const [pageCurrent, setPageCurrent] =useState(1);
    const [totalPage,setTotalPage]=useState(1)
    
    const ApiSeries =`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=6f82743b4851e8b71cb17f8d769a7941&language=en-US&page=${pageCurrent}`;
    const SearchApiSeries ="https://api.themoviedb.org/3/search/tv?api_key=6f82743b4851e8b71cb17f8d769a7941&query=";
  const onSearch = (event) => {
    setSearchItemSerie(event.target.value);
   };
   const handleSubmit = (event) => {
    event.preventDefault();
    {
      fetch(SearchApiSeries + searchItemSerie)
        .then((response) => response.json())
        .then((data) => {
          setSeries(data.results);
        });
    }
  };
  const handlePageChange=(pageNumber)=>{
    setPageCurrent(pageNumber)

  }


  useEffect(() => {
    fetch(ApiSeries)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results);
        setTotalPage(data.total_pages)

      });
  }, [pageCurrent]);

  return (
    <div>
      <Navbar
            handleSubmit={handleSubmit}
            onSearch={onSearch}
            search={searchItemSerie}

          />

          <div className="contenair">
            <img src={img} className="img-fluid" alt="..."></img>
          </div>

          <div className="bg-movie-section">
            <HeaderMovies />
            
            <div className="album py-6">

              <div className="container">
              
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {series.length>0 && series.map(serie=>
        <SerieImg key={serie.id} {...serie}/>)}
         <Pagination
          activePage={pageCurrent}
          itemsCountPerPage={20}
          totalItemsCount={totalPage}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />

      </div>
              
              </div>
            </div>
          </div> 
   </div>
  )
};

export default Series;
