import { useNavigate } from "react-router-dom";

const STATS = [
  { number: "50K+", label: "Happy Customers" },
  { number: "200+", label: "Premium Products" },
  { number: "24/7", label: "Customer Support" },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
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
          <button className="btn-primary" onClick={() => navigate("/products")}>
            Explore Products
          </button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="hero-stats">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
