
import "./components/NavBar/style.css";

import Footer from "./components/footer";

import Movies from "./components/Movie";


const App = () => {
  
  return(
<div>
        <section id="first-page">
          
          {/* <Series/> */}
          <Movies/>

          <Footer />
        </section>
      </div>
      )

  
    
  
};

export default App;
