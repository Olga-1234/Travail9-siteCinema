import { Link } from "react-router-dom";

const CategorieMovies=()=> {
    return(
        <>
        <span className="col col-md-2">JEUNESSE</span>
        <span className="col col-md-2"><Link to="/dashborn/users">RIRE</Link></span>
        <span className="col col-md-2"><Link to="/dashborn/users">RIRE</Link></span>
        <span className="col col-md-2"><Link to="/dashborn/users">SCIENCE FICSION</Link></span>
        

        </>
    )
    
}
export default CategorieMovies;