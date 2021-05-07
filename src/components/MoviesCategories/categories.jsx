// const CategorieMovies=()=> {
//     return(
//         <>
//         <div className="container ">

//    <div className="container text-light">
//    <div className="row justify-content-md-center">

//         <span className="col col-md-2">DRAME</span>
//         <span className="col col-md-2">SCIENCE FICTION</span>
//         <span className="col col-md-2">RIRE</span>
//         <span className="col col-md-2">JEUNESSE</span>
//         </div>

// </div>
// </div>
//    </>
//     )

// }
// export default CategorieMovies;

const CategorieMovies = ({name, id}) => {
  return (
    <>
      <span className="col col-md-2">{name}</span>
    </>
  );
};
export default CategorieMovies;
