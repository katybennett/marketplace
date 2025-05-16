import { Link } from "react-router";

function SearchBar({ handleSearch, searchTerm }) {
  return (
    <form>
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
      <Link to path="/items">
        <button>Search</button>
      </Link>
    </form>
  );
}

export default SearchBar;
