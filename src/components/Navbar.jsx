import Form from "./form";

const Navbar = ({handleSubmit, onSearch, search}) => {
  return (
    <>
      {/* <nav className="navbar fixed-top bg-navBar">
        <div classname="container-fluid">
          <strong className="navbar-brand navbar-logo "> 
            TangilaFilm <span className="navbar-tv">TV</span>
          </strong>
          
            
          <Form handleSubmit={handleSubmit} onSearch={onSearch} search={search} className="navbar-form"/>

        
        </div>
      </nav> */}
      <nav class="navbar navbar-light bg-navBar fixed-top">
  <div class="container-fluid">
    <strong class="navbar-brand text-light text-bold">
    TangilaFilm.<span className="navbar-tv">Tv</span>
    </strong>
    <Form handleSubmit={handleSubmit} onSearch={onSearch} search={search} className="navbar-form"/>
  </div>
</nav>
    </>
  );
};
export default Navbar;
