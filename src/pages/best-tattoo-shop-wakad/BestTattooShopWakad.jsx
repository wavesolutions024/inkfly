import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./BestTattooShopWakad.scss";

const services = [
  "Custom Tattoo Designs",
  "Name and Lettering Tattoos",
  "Minimalist Tattoos",
  "Couple Tattoos",
  "Portrait Tattoos",
  "Traditional Tattoos",
  "Religious and Spiritual Tattoos",
  "Body Piercing",
];

const reasons = [
  "Creative and personalised tattoo designs",
  "Professional tattooing approach",
  "Focus on hygiene and cleanliness",
  "Attention to detail and precision",
  "Designs tailored to your preferences",
  "Comfortable tattoo consultation experience",
];

const faqs = [
  {
    question: "Which is the best tattoo shop in Wakad, Pune?",
    answer:
      "Inkfly Tattoo Studio offers custom tattoo designs, professional tattooing services and personalised consultations for people looking for a tattoo shop in Wakad.",
  },
  {
    question: "Can I get a customised tattoo design in Wakad?",
    answer:
      "Yes, you can discuss your ideas, references and preferences with our artists to create a personalised tattoo design.",
  },
  {
    question: "Does Inkfly Tattoo Studio offer small tattoos?",
    answer:
      "Yes, you can explore minimal, small and detailed tattoo designs according to your preferences.",
  },
  {
    question: "How can I book a tattoo appointment?",
    answer:
      "You can contact Inkfly Tattoo Studio through the website or phone to discuss your requirements and schedule an appointment.",
  },
];

const BestTattooShopWakad = () => {
  return (
    <main className="wakad_page">
      <Helmet>
        <title>Best Tattoo Shop in Wakad, Pune | Inkfly Tattoo Studio</title>
        <meta
          name="description"
          content="Looking for the best tattoo shop in Wakad? Visit Inkfly Tattoo Studio for custom tattoo designs, professional artists and hygienic tattoo services."
        />
        <meta
          name="keywords"
          content="best tattoo shop Wakad, tattoo studio Wakad Pune, custom tattoo designs Wakad, tattoo artist Wakad, hygienic tattoo studio Pune"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Best Tattoo Shop in Wakad, Pune | Inkfly Tattoo Studio"
        />
        <meta
          property="og:description"
          content="Explore custom tattoo designs and professional tattoo services at Inkfly Tattoo Studio in Wakad, Pune."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.inkflytattoo.com/best-tattoo-shop-wakad"
        />
      </Helmet>
      <section className="wakad_hero">
        <div className="wakad_content wakad_hero_content">
          <p className="wakad_eyebrow">Inkfly Tattoo Studio · Wakad, Pune</p>
          <h1>Best Tattoo Shop in Wakad for Custom Tattoo Designs</h1>
          <p className="wakad_hero_description">
            Looking for a trusted tattoo shop in Wakad, Pune? Inkfly Tattoo
            Studio brings creativity, precision and personal expression
            together to create tattoos that reflect your personality and story.
          </p>
          <Link className="wakad_button" to="/contact">
            Book Your Tattoo Appointment Today
          </Link>
        </div>
      </section>

      <section className="wakad_section wakad_intro">
        <div className="wakad_content">
          <p className="wakad_eyebrow">Your story, thoughtfully inked</p>
          <h2>Your Trusted Tattoo Studio in Wakad</h2>
          <p>
            At Inkfly Tattoo Studio, we believe every tattoo tells a story.
            Whether you are getting your first tattoo or adding a new design to
            your collection, our artists focus on understanding your ideas and
            transforming them into meaningful artwork. From minimal designs to
            detailed custom tattoos, we aim to deliver a comfortable and
            professional tattooing experience.
          </p>
        </div>
      </section>

      <section className="wakad_section wakad_services">
        <div className="wakad_content">
          <p className="wakad_eyebrow">Make it yours</p>
          <h2>Tattoo Services We Offer</h2>
          <ul className="wakad_card_grid wakad_service_grid">
            {services.map((service) => (
              <li className="wakad_card" key={service}>
                <span aria-hidden="true">✦</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wakad_section">
        <div className="wakad_content">
          <p className="wakad_eyebrow">A studio experience built around you</p>
          <h2>Why Choose Inkfly Tattoo Studio?</h2>
          <ul className="wakad_card_grid wakad_reasons_grid">
            {reasons.map((reason) => (
              <li className="wakad_card" key={reason}>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wakad_cta_section">
        <div className="wakad_content wakad_cta_content">
          <p className="wakad_eyebrow">Your idea. Your art.</p>
          <h2>Get Your Dream Tattoo in Wakad</h2>
          <p>
            Your tattoo should be as unique as your personality. Connect with
            Inkfly Tattoo Studio in Wakad, Pune, discuss your design ideas and
            take the first step towards creating artwork that stays with you
            forever.
          </p>
          <Link className="wakad_button wakad_button_light" to="/contact">
            Book Your Tattoo Appointment Today
          </Link>
        </div>
      </section>

      <section className="wakad_section wakad_faq_section">
        <div className="wakad_content">
          <p className="wakad_eyebrow">Good to know</p>
          <h2>Frequently Asked Questions</h2>
          <div className="wakad_faq_list">
            {faqs.map(({ question, answer }) => (
              <details className="wakad_faq" key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BestTattooShopWakad;
