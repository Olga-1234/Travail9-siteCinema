
import "./style.css";

import Footer from "./components/footer";

import Movies from "./components/Movie";
import Series from "./components/series";
import {BrowserRouter, Route,Switch } from "react-router-dom";
import DetailsMovies from "./components/detailMovies";
import DetailsSeries from "./components/detailsSeries";

const App = () => {
  
  return(
        <BrowserRouter>
          <div id="first-page">
          <Switch>
          <Route exact path="/" component={Movies}></Route>
          <Route path="/series" component={Series}></Route>
         <Route path="/detailMovies/:Id" component={DetailsMovies} ></Route> 
         <Route path="/detailsSeries/:Id" component={DetailsSeries}></Route>
          </Switch>



          <Footer />
        </div>
        </BrowserRouter>
      )

  
  
  
};

export default App;
