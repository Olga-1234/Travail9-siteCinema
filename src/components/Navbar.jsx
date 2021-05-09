import Form from "./form";
import { Link } from "react-router-dom"


const Navbar = ({handleSubmit, onSearch, search}) => {
  return (
    <>
      
      <nav class="navbar navbar-light bg-navBar fixed-top">
  <div class="container-fluid">
    <strong class="navbar-brand text-light text-bold">
    TangilaFilm.<span className="navbar-tv">Tv</span>
    </strong>
    
    <div className="left">
      <p className="btn btn-outline text-light color-text" type="submit">FILMS</p>
      <p className="btn btn-outline text-light color-text"><Link to="/serie">SERIES</Link></p>
      </div>
      
    
    <Form handleSubmit={handleSubmit} onSearch={onSearch} search={search} className="navbar-form"/>
  </div>
</nav>
    </>
  );
};
export default Navbar;
