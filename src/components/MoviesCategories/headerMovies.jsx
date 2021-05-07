import {Link} from "react-router-dom";

const   HeaderMovies=()=> {
    return(
        <>
        <div className="container ">
    {/* <p className="text-light py-3"><Link to="/">ACCUEIL</Link></p> */}
    <ul>
      <li className="text-light"><Link to="/">SUGGESTIONS</Link>
      </li> 
      </ul>
        </div>
        </>
    )
    
}
export default HeaderMovies;