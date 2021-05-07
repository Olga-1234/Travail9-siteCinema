
const Form = ({handleSubmit,search,onSearch}) => {
  return (
    <div>
      {/* <form className="d-flex "onSubmit={handleSubmit} >

        <label htmlFor="search"></label>
        <input
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Search"
           value={search}
           onChange={onSearch}


        />
        <Button name="S'inscrire" />
      </form> */}

    <form class="d-flex" onSubmit={handleSubmit}>
    <input
          className="form-control me-2"
          id="search"
          type="search"
          placeholder="Search"
           value={search}
           onChange={onSearch}
        />
      </form>
      
    </div>
  );
};

export default Form;
