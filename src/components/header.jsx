const Header = () => {
  return (
    <>
    <div className="container ">
    <p>ACCUEIL</p>
      <p>SUGGESTIONS</p>
      <div className="container text-light">
      <div className="row justify-content-md-center">
        <span className ="col col-md-2">DRAME </span>
        <span className ="col col-md-2">SCIENCE FICTION </span>
        <span className ="col col-md-2">JEUNESSE </span>
        <span className ="col col-md-2">RIRE </span>  
        
        <span className ="col col-lg-3"> 
          Afficher plus{">"}
          {">"}
        </span>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Header;
