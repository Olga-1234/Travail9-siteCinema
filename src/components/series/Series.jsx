import Card from "../Card";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import img from "../imges/bgd.jpg";
import Pagination from "react-js-pagination";
import ListCategories from "../Category/ListCategories";
import Header from "../Category/headerMovies";
import Loading from "react-loading";


const Series = () => {
  const [series, setSeries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [genreId, setGenreId] = useState("");
  const [loading, setLoading] = useState(true);


  const ApiSeries = `https://api.themoviedb.org/3/discover/tv?api_key=6f82743b4851e8b71cb17f8d769a7941&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate&page=${pageCurrent}`;
  const SearchApiSeries =
    "https://api.themoviedb.org/3/search/tv?api_key=6f82743b4851e8b71cb17f8d769a7941&query=";
  const onSearch = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(SearchApiSeries + inputValue)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results);
      });
  };
  const handlePageChange = (pageNumber) => {
    setPageCurrent(pageNumber);
  };

  useEffect(() => {
    fetch(ApiSeries)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data.results);
        setTotalPage(data.total_pages);
        setLoading(false)
      });
    window.scrollTo(0, 0);
  }, [genreId, ApiSeries]);
  const onclickShowCategory = (id) => {
    setGenreId(id);
  };

  return (
    <div>
      <Navbar
        handleSubmit={handleSubmit}
        onSearch={onSearch}
        search={inputValue}
      />

      <div className="contenair">
        <img src={img} className="img-fluid" alt="..."></img>
      </div>

      <div className="bg-movie-section">

        <Header/>
        {loading ? 
        <Loading type="spin" color="orange" className="m-auto"/>
        :
        <>
  <ListCategories
          onclickShowCategory={onclickShowCategory}
          mediaType="tv"
        />
        <div className="album py-6">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {series.length > 0 &&
                series.map((serie) => (
                  <Card path="detailsSeries" mediaType="detailsSeries" key={serie.id} {...serie} />
                ))}

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

        </>

        }
      
      </div>
    </div>
  );
};

export default Series;
