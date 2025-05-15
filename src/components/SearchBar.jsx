function SearchBar({ handleSearch, handleClick, searchTerm }) {
  return (
    <form onSubmit={handleClick}>
      Search:{" "}
      <input
        type="text"
        name="search"
        value={searchTerm.search}
        onChange={handleSearch}
      ></input>
      <select name="sort_by" value={searchTerm.sort_by} onChange={handleSearch}>
        <option value="item_id">Item Id</option>
        <option value="price">Price</option>
        <option value="listed_by">Listed By</option>
      </select>
      <select name="order" value={searchTerm.order} onChange={handleSearch}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
