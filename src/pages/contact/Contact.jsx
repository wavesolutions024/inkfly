import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import "./Contact.scss";
import PageTop from "../../components/page-top/PageTop";
import { Helmet } from "react-helmet-async";

const contactDetails = [
  {
    label: "Call the studio",
    value: "9607009494",
    href: "tel:+919607009494",
    icon: IoCallOutline,
  },
  {
    label: "Email us",
    value: "inkflytattoo@gmail.com",
    href: "mailto:inkflytattoo@gmail.com",
    icon: CiMail,
  },
  {
    label: "Visit the studio",
    value:
      "Servey, 207/3, Shop no, B/5, Kaspate Wasti Rd, opposite Dhanraj Park, Vishnu Dev Nagar, Wakad, Pimpri-Chinchwad, Pune, Maharashtra 411057",
    href: "https://maps.google.com/?q=InkFly+Tattoo+Wakad+Pune",
    icon: CiLocationOn,
  },
];

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:inkflytattoo@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact Inkfly Tattoo Studio | Wakad, Pune</title>
        <meta
          name="description"
          content="Contact Inkfly Tattoo Studio in Wakad, Pune, to discuss custom tattoo designs, ask a question or book your tattoo appointment."
        />
        <meta
          name="keywords"
          content="contact Inkfly Tattoo Studio, book tattoo appointment Wakad, tattoo consultation Pune, tattoo studio address Wakad, tattoo artist contact"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contact Inkfly Tattoo Studio | Wakad, Pune"
        />
        <meta
          property="og:description"
          content="Get in touch with Inkfly Tattoo Studio in Wakad, Pune, and plan your next tattoo."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.inkflytattoo.com/contact" />
      </Helmet>
      <PageTop
        title="GET IN TOUCH"
        details="Connect With Our Tattoo Studio in Pune"
      />

      <div className="contact_page_parent parent">
        <div className="contact_content cont">
          <div className="contact_details">
            <span className="indicator">Contact</span>
            <h1>Need any help? Contact with us</h1>

            <ul className="contact_detail_list">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <li className="contact_detail" key={label}>
                  <span className="contact_icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="contact_detail_text">
                    <span className="contact_detail_label">{label}</span>
                    <a
                      className="contact_detail_value"
                      href={href}
                      target={href.startsWith("https:") ? "_blank" : undefined}
                      rel={href.startsWith("https:") ? "noreferrer" : undefined}
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact_form" onSubmit={handleSubmit}>
            <label className="contact_visually_hidden" htmlFor="contact-name">
              Your name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              required
            />

            <label className="contact_visually_hidden" htmlFor="contact-email">
              Email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              required
            />

            <label
              className="contact_visually_hidden"
              htmlFor="contact-subject"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />

            <label
              className="contact_visually_hidden"
              htmlFor="contact-message"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            />

            <button className="btn" type="submit">
              <p className="first_btn"> Send message </p>
              <p className="second_btn"> Send message </p>
            </button>
          </form>
        </div>

        <div className="contact_map">
          <iframe
            title="Map showing InkFly Tattoo Studio in Wakad, Pune"
            src="https://maps.google.com/maps?q=InkFly%20Tattoo%20Wakad%20Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
