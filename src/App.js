
import "./components/NavBar/style.css";

import Footer from "./components/footer";

import Movies from "./components/Movie";
import Series from "./components/series";
import {BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
  
  return(
<Router>

        <div id="first-page">
          <Route exact path="/" component={Movies}></Route>
          <Route path="/series" component={Series}></Route>
          {/* <Series/>
          <Movies/> */}

          <Footer />
        </div>
 </Router>
      )

  
    
  
};

export default App;
