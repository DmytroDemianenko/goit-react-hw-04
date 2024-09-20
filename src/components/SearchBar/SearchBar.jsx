const SearchBar = ({ handleSubmit }) => {
  const handelSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { query } = form.elements;
    // console.log(query.value);
    handleSubmit(query.value);
    form.reset();
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        name="query"
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
