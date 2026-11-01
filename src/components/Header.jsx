import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/InkFly_Tattoo_Emblem.png";
import "./Header.scss";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Price Calculator", to: "/price-calculator" },

  { label: "Blog", to: "/blogs" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const sectionId = location.hash.slice(1);
    if (!sectionId) return;

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const isActive = (to) => {
    const [pathname, hash] = to.split("#");
    return (
      location.pathname === pathname &&
      location.hash === (hash ? `#${hash}` : "")
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
    if (menuOpen && window.matchMedia("(max-width: 900px)").matches) {
      menuToggleRef.current?.focus();
    }
  };

  return (
    <header
      className={`parent header_parent${hasScrolled ? " is-scrolled" : ""}`}
    >
      <div className="header_cont cont">
        <Link
          className="header_logo"
          to="/"
          aria-label="Inksfly Tattoo home"
          onClick={closeMenu}
        >
          <img src={logo} alt="Inksfly Tattoo" />
        </Link>

        <button
          ref={menuToggleRef}
          className={`header_menu_toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header_navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <div className="header_links">
            {navigation.map(({ label, to }) => {
              const active = isActive(to);

              return (
                <Link
                  className={`header_link${active ? " is-active" : ""}`}
                  to={to}
                  key={label}
                  aria-current={active ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <Link className="header_booking" to="/contact" onClick={closeMenu}>
            <div className="btn">
              <p className="first_btn">Book Now</p>
              <p className="second_btn">Book Now</p>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
