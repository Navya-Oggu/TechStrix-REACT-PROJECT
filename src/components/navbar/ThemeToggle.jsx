export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      id="theme-toggle-btn"
    >
      <span className={`toggle-icon ${darkMode ? "moon" : "sun"}`}>
        {darkMode ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
