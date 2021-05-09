import SerieImg from "./serieImg";
import React,{useState, useEffect} from 'react';

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
       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
        {series.length>0 && series.map(serie=>
        <SerieImg key={serie.id} {...serie}/>)}
      </div>
   </div>
  )
};

export default Series;
