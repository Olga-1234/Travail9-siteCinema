
const Form = ({handleSubmit,search,onSearch}) => {
  return (
    <div>
   

    <form className="d-flex" onSubmit={handleSubmit}>
      
    <input
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Recherche"
           value={search}
           onChange={onSearch}
        />
      </form>
      
    </div>
  );
};

export default Form;
