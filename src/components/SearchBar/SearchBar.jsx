import s from "./SearchBar.module.css";
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
    <div className={s.header}>
      <form onSubmit={handelSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
