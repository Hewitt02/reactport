import { Link, useLocation } from "react-router-dom";

// React functional component for the navigation menu
function Navigation() {
  // Get the current location using the useLocation hook from react-router-dom
  const location = useLocation();

  return (
    <nav>
      <ul>
        {/* Navigation item for "About Me" with an "active" class if the current path matches */}
        <li className={location.pathname === "/about-me" ? "active" : ""}>
          <Link to="/about-me">About Me</Link>
        </li>
        {/* Navigation item for "Portfolio" with an "active" class if the current path matches */}
        <li className={location.pathname === "/portfolio" ? "active" : ""}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        {/* Navigation item for "Contact" with an "active" class if the current path matches */}
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Navigation item for "Resume" with an "active" class if the current path matches */}
        <li className={location.pathname === "/resume" ? "active" : ""}>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

// Export the Navigation component as the default export
export default Navigation;
