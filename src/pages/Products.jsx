import ProductCard from "../ProductCard";
export default function products({
     searchTerm,
  setSearchTerm,
  selectedBrand,
  setSelectedBrand,
  sortBy,
  setSortBy,
  filteredProducts,
  allBrands,
  wishlist,
  addToCart,
  toggleWishlist
}){
    return(
        <section className="products-section" id="products">
        {/* ── Products Section ──────────────────────────── */}
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="filter-bar">
          <div className="filter-group">
            <label className="filter-label" htmlFor="brand-filter">Brand</label>
            <select
              className="filter-select"
              id="brand-filter"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="All">All Brands</option>
              {allBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label" htmlFor="sort-select">Sort By</label>
            <select
              className="filter-select"
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Default</option>
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <span className="results-count">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((data) => (
              <ProductCard
                key={data.id}
                id={data.id}
                image={data.image}
                name={data.name}
                price={data.price}
                originalPrice={data.originalPrice}
                discount={data.discount}
                rating={data.rating}
                isBestSeller={data.isBestSeller}
                isWishlisted={wishlist.includes(data.id)}
                onAddToCart={() => addToCart(data)}
                onToggleWishlist={() => toggleWishlist(data.id)}
              />
            ))
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button
                className="btn-secondary"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedBrand("All");
                  setSortBy("");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    )
}