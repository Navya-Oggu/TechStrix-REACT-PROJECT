export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="nav-search">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search products, brands..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        id="nav-search-input"
      />
      {searchTerm && (
        <button
          className="search-clear"
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
