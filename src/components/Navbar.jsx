import Form from "./Form";
import { Link } from "react-router-dom";

const Navbar = ({ handleSubmit, onSearch, search }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-navBar fixed-top">
        <div className="container-fluid">
          <strong className="navbar-brand text-light text-bold">
            TangilaFilm.<span className="navbar-tv">Tv</span>
          </strong>
          <div className="d-flex">
            <Link to="/" className=" color-text pg-active">
              FILMS
            </Link>
            <Link to="/series" className=" color-text pg-active">
              SERIES
            </Link>
            <Form
              handleSubmit={handleSubmit}
              onSearch={onSearch}
              search={search}
              className="navbar-form"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
