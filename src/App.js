import "./style.css";
import Movies from "./components/movies/Movie";
import Series from "./components/series/Series";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsMovies from "./components/movies/DetailMovies";
import DetailsSeries from "./components/series/DetailsSeries";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div id="first-page">
        <Switch>
          <Route exact path="/" component={Movies}></Route>
          <Route path="/series" component={Series}></Route>
          <Route path="/detailMovies/:Id" component={DetailsMovies}></Route>
          <Route path="/detailsSeries/:Id" component={DetailsSeries}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
