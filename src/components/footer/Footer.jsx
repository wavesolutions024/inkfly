import { Link } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/InkFly_Tattoo_White.png";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const exploreLinks = [
  { label: "Home", to: "/#home" },
  { label: "About the studio", to: "/#about-us" },
  { label: "Our services", to: "/#services" },
  { label: "From the blog", to: "/#blogs" },
];

const studioLinks = [
  { label: "Book an appointment", to: "/#appointment" },
  { label: "Custom tattoo", to: "/#appointment" },
  { label: "Design consultation", to: "/#appointment" },
];

const Footer = () => {
  return (
    <div className="parent footer_parent">
      <div className="cont footer_cont">
        <div className="footer_columns">
          <div className="footer_about" aria-labelledby="footer-about-title">
            <Link
              className="footer_wordmark"
              to="/home"
              aria-label="InkFly Tattoo home"
            >
              <img src={logo} alt="" />
            </Link>
            <p>
              Thoughtful custom tattoos, made with care. Bring us your idea and
              let’s create something that feels like you.
            </p>
          </div>

          <nav className="footer_link_group" aria-label="Explore">
            <h2>Explore</h2>
            <ul>
              {exploreLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer_link_group" aria-label="Studio">
            <h2>Studio</h2>
            <ul>
              {studioLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
              <li>
                <span className="footer_hours">By appointment</span>
              </li>
            </ul>
          </nav>

          <div
            className="footer_contact"
            aria-labelledby="footer-contact-title"
          >
            <h2 id="footer-contact-title">Find the studio</h2>
            <p>
              <span>
                <CiLocationOn />
              </span>
              <span>
                Servey, 207/3, Shop no, B/5, Kaspate Wasti Rd, opposite Dhanraj
                Park, Vishnu Dev Nagar, Wakad, Pimpri-Chinchwad, pune,
                Maharashtra 411057
              </span>
            </p>
            <p>
              <span>
                <IoCallOutline />
              </span>
              <span>9607009494</span>
            </p>
            <p>
              <span>
                <CiMail />
              </span>

              <span>inkflytattoo@gmail.com</span>
            </p>

          
          </div>
        </div>

        <div className="footer_bottom">
          <span>© {new Date().getFullYear()} InkFly Tattoo Studio</span>
          <span>Made for the art that stays with you.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
