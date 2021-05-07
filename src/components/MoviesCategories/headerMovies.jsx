import { Link } from "react-router-dom"


const   HeaderMovies=()=> {
    return(
        <>
        <div className="container ">
            
           
            <a href="#first-page"><p className="text-light py-3">ACCUEIL</p> </a>
        <p className="text-light "><Link to="/suggestion">SUGGESTIONS</Link></p>
            
        </div>
        </>
    )
    
}
export default HeaderMovies;