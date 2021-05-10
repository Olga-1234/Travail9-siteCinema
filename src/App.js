
import "./components/NavBar/style.css";

import Footer from "./components/footer";

import Movies from "./components/Movie";
import Series from "./components/series";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Suggestion from "./components/MoviesCategories/suggestion";


const App = () => {
  
if (App === 0) {
  return <h1>Chargement...</h1>;
} else {
  return(
<Router>
  
        <div id="first-page">
          <Route exact path="/" component={Movies}></Route>
          <Route path="/series" component={Series}></Route>
        
        {/* <Route path="/suggestion" component={Suggestion}></Route> */}

          

          <Footer />
        </div>
 </Router>
      )

  
  }   
  
};

export default App;
