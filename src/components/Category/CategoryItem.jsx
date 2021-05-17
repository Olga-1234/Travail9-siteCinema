const Category = ({name, id,onclickShowCategory}) => {
  return (
    
      <button className=" col-md-2 text-light title-genre" onClick={()=>onclickShowCategory(id)}>{name}</button>
  
  );
};
export default Category;
