import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./BestTattooStudioWakad.scss";

const BestTattooStudioWakad = () => {
  return (
    <main className="wakad_studio_page">
      <Helmet>
        <title>Best Tattoo Studio in Wakad, Pune | Inkfly Tattoo Studio</title>
        <meta
          name="description"
          content="Discover Inkfly Tattoo Studio in Wakad, Pune, for creative custom tattoos, detailed artwork and personalised tattoo experiences."
        />
        <meta
          name="keywords"
          content="best tattoo studio Wakad, creative tattoo studio Pune, custom tattoo artwork Wakad, personalised tattoo designs, tattoo artist Wakad"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Best Tattoo Studio in Wakad, Pune | Inkfly Tattoo Studio"
        />
        <meta
          property="og:description"
          content="Discover creative custom tattoos and personalised tattoo experiences at Inkfly Tattoo Studio in Wakad."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.inkflytattoo.com/best-tattoo-studio-wakad"
        />
      </Helmet>
      <section className="wakad_studio_hero">
        <div className="wakad_studio_content wakad_studio_hero_content">
          <p className="wakad_studio_eyebrow">
            Inkfly Tattoo Studio · Wakad, Pune
          </p>
          <h1>Discover Creative Tattoo Art at Our Studio in Wakad</h1>
          <p className="wakad_studio_hero_description">
            Inkfly Tattoo Studio is a destination for creative tattoo art in
            Wakad, Pune. We bring your ideas to life through personalised
            designs, artistic detailing and professional tattooing services.
          </p>
          <Link className="wakad_studio_button" to="/contact">
            Discuss Your Tattoo Idea
          </Link>
        </div>
      </section>

      <section className="wakad_studio_section">
        <div className="wakad_studio_content">
          <p className="wakad_studio_eyebrow">Inspired by you</p>
          <h2>Where Your Ideas Become Meaningful Tattoo Art</h2>
          <p>
            Every tattoo begins with an idea. Our approach focuses on
            understanding your inspiration, selecting the right design and
            creating artwork that represents your individuality. Whether you
            prefer something simple or detailed, we help bring your vision to
            life.
          </p>
        </div>
      </section>

      <section className="wakad_studio_section wakad_studio_styles">
        <div className="wakad_studio_content">
          <p className="wakad_studio_eyebrow">Find your style</p>
          <h2>Explore Different Tattoo Styles</h2>
          <p>
            From minimalist and lettering tattoos to traditional, portrait and
            custom artwork, explore different tattoo styles and find a design
            that matches your personality.
          </p>
        </div>
      </section>

      <section className="wakad_studio_cta">
        <div className="wakad_studio_content">
          <p className="wakad_studio_eyebrow">Let's create something personal</p>
          <h2>Visit Inkfly Tattoo Studio in Wakad</h2>
          <p>
            Looking for a creative tattoo studio near you? Connect with Inkfly
            Tattoo Studio and discuss your next tattoo with our team.
          </p>
          <Link
            className="wakad_studio_button wakad_studio_button_light"
            to="/contact"
          >
            Contact the Studio
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BestTattooStudioWakad;
