import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import "./FloatingContact.scss";

const FloatingContact = () => (
  <nav className="floating_contact" aria-label="Quick contact">
    <a
      className="floating_contact_button floating_whatsapp"
      href="https://wa.me/919607009494"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Inkfly Tattoo on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
     
    </a>
    <a
      className="floating_contact_button floating_call"
      href="tel:+919607009494"
      aria-label="Call Inkfly Tattoo"
    >
      <IoCallOutline aria-hidden="true" />
    
    </a>
  </nav>
);

export default FloatingContact;
