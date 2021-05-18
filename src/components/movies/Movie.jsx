import Loading from "react-loading";
import img from "../imges/bg.png";
import Pagination from "react-js-pagination";
import React, { useState, useEffect } from "react";
import ListCategories from "../Category/ListCategories";
import Card from "../Card";
import Header from "../Category/headerMovies";
import Navbar from "../Navbar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [genreId, setGenreId] = useState("");
  const [loading, setLoading] = useState(true);

  const Api = `https://api.themoviedb.org/3/discover/movie?api_key=6f82743b4851e8b71cb17f8d769a7941&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate&page=${pageCurrent}`;
  const SearchApi =
    "https://api.themoviedb.org/3/search/movie?api_key=6f82743b4851e8b71cb17f8d769a7941&query=";
  const onSearch = (event) => {
    setSearchItem(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(SearchApi + searchItem)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  const handlePageChange = (pageNumber) => {
    setPageCurrent(pageNumber);
  };

  useEffect(() => {
    fetch(Api)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setTotalPage(data.total_pages);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [Api, genreId]);

  const onclickShowCategory = (id) => {
    setGenreId(id);
  };

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

      <div className="bg-movie-section pb-3">
        <Header />
        {loading ? (
          <Loading type="spin" color="orange" className="m-auto" />
        ) : (
          <>
            <ListCategories
              onclickShowCategory={onclickShowCategory}
              mediaType="movie"
            />

            <div className="album py-5">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  {movies.length > 0 &&
                    movies.map((movie) => (
                      <Card path="detailMovies" key={movie.id} {...movie} />
                    ))}
                  <Pagination
                    className="pagination"
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
        )}
      </div>
    </div>
  );
};

export default Movies;
