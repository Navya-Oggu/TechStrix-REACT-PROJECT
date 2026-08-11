 import { useNavigate } from "react-router-dom";
 export default function Home(){
    const navigate=useNavigate()
    return(
        <>
      <section className="hero">
        {/* ── Hero Section ──────────────────────────────── */}
        <div className="hero-content">
          <p className="hero-tag">New Arrivals 2025</p>
          <h1 className="hero-title">
            Your World Of Tech
            <br />
            <span className="hero-highlight">One Click Away.</span>
          </h1>
          <p className="hero-description">
            Explore the world of modern technology, all in one place. From
            powerful laptops and smart devices to the latest smartphones,
            discover products that fit the way you live, work, and create.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() =>navigate("/products")}>
              Explore Products
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Premium Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Customer Support</span>
          </div>
        </div>
      </section>
    
      </>
    )
}