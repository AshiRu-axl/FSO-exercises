const SearchBar = ({ text, onTextChange }) => {
  return (
    <>
      <span>find countries</span>
      <input
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="search country"
      ></input>
    </>
  );
};
export default SearchBar;
