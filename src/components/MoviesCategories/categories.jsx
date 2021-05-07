import { Link } from "react-router-dom";

const CategorieMovies=()=> {
    return(
        <>
        <div className="container ">
   
   <div className="container text-light">
   <div className="row justify-content-md-center">

        <span className="col col-md-2"><Link to="/">JEUNESSE</Link></span>
        <span className="col col-md-2"><Link to="/dashborn/users">RIRE</Link></span>
        <span className="col col-md-2"><Link to="/dashborn/users">RIRE</Link></span>
        <span className="col col-md-2"><Link to="/dashborn/users">SCIENCE FICSION</Link></span>
        </div>

</div>
</div>     
   </>
    )
    
}
export default CategorieMovies;