import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./TattooShopNearHinjewadi.scss";

const tattooStyles = [
  "Custom tattoo artwork",
  "Minimalist designs",
  "Lettering tattoos",
  "Meaningful symbols",
  "Traditional styles",
  "Portrait tattoos",
];

const TattooShopNearHinjewadi = () => {
  return (
    <main className="hinjewadi_page">
      <Helmet>
        <title>Tattoo Shop Near Hinjewadi, Pune | Inkfly Tattoo Studio</title>
        <meta
          name="description"
          content="Searching for a tattoo shop near Hinjewadi? Visit Inkfly Tattoo Studio in Wakad, Pune, for custom tattoo designs and personalised services."
        />
        <meta
          name="keywords"
          content="tattoo shop near Hinjewadi, tattoo studio near Hinjewadi Pune, tattoo shop Wakad, custom tattoos Hinjewadi, tattoo artist near Hinjewadi"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Tattoo Shop Near Hinjewadi, Pune | Inkfly Tattoo Studio"
        />
        <meta
          property="og:description"
          content="Find custom tattoo designs and personalised tattoo services near Hinjewadi at Inkfly Tattoo Studio in Wakad, Pune."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.inkflytattoo.com/tattoo-shop-near-hinjewadi"
        />
      </Helmet>
      <section className="hinjewadi_hero">
        <div className="hinjewadi_content hinjewadi_hero_content">
          <p className="hinjewadi_eyebrow">
            Inkfly Tattoo Studio · Wakad, Pune
          </p>
          <h1>Find Your Next Tattoo Studio Near Hinjewadi</h1>
          <p className="hinjewadi_hero_description">
            Looking for a tattoo studio near Hinjewadi, Pune? Inkfly Tattoo
            Studio in Wakad offers creative tattoo designs, personalised
            consultations and professional tattooing services for tattoo
            enthusiasts.
          </p>
          <Link className="hinjewadi_button" to="/contact">
            Plan Your Tattoo Visit
          </Link>
        </div>
      </section>

      <section className="hinjewadi_section">
        <div className="hinjewadi_content">
          <p className="hinjewadi_eyebrow">Create something personal</p>
          <h2>Creative Tattoo Services Near Hinjewadi</h2>
          <p>
            Explore custom tattoo artwork, minimalist designs, lettering
            tattoos, meaningful symbols and different tattoo styles.
          </p>
          <ul className="hinjewadi_styles">
            {tattooStyles.map((style) => (
              <li key={style}>{style}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hinjewadi_section hinjewadi_location_section">
        <div className="hinjewadi_content">
          <p className="hinjewadi_eyebrow">Wakad, Pune</p>
          <h2>A Convenient Tattoo Studio Near Your Location</h2>
          <p>
            Located in Wakad, Inkfly Tattoo Studio is an option for people
            travelling from Hinjewadi and nearby areas who are looking for
            personalised tattoo services.
          </p>
          <a
            className="hinjewadi_text_link"
            href="https://maps.google.com/?q=InkFly+Tattoo+Wakad+Pune"
            target="_blank"
            rel="noreferrer"
          >
            Get directions to the studio
          </a>
        </div>
      </section>

      <section className="hinjewadi_cta">
        <div className="hinjewadi_content">
          <p className="hinjewadi_eyebrow">Start with an idea</p>
          <h2>Plan Your Tattoo Visit Today</h2>
          <p>
            Discuss your ideas and connect with Inkfly Tattoo Studio to plan
            your tattoo appointment.
          </p>
          <Link
            className="hinjewadi_button hinjewadi_button_light"
            to="/contact"
          >
            Contact Inkfly Tattoo Studio
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TattooShopNearHinjewadi;
