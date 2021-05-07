import { Link } from "react-router-dom"


const   HeaderMovies=()=> {
    return(
        <>
        <div className="container ">
        <p><Link to="/">ACCEUIL</Link></p>
        <p><Link to="/suggestion">SUGGESTIONS</Link></p>
            
        </div>
        </>
    )
    
}
export default HeaderMovies;