import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./TattooShopNearMe.scss";

const tattooServices = [
  "Custom Tattoo Designs",
  "Minimalist Tattoos",
  "Name and Lettering Tattoos",
  "Couple Tattoos",
  "Portrait Tattoos",
  "Traditional Tattoos",
  "Religious Tattoos",
  "Small Tattoo Designs",
];

const reasonsToChoose = [
  "Personalised tattoo design concepts",
  "Creative and detailed artwork",
  "Focus on hygiene and cleanliness",
  "Attention to individual preferences",
  "Tattoo consultation and design guidance",
];

const faqs = [
  {
    question: "How can I find a good tattoo shop near me in Pune?",
    answer:
      "Look for a tattoo studio with a strong portfolio, experienced artists, proper hygiene practices and personalised design services. Inkfly Tattoo Studio is located in Wakad, Pune.",
  },
  {
    question: "Where is Inkfly Tattoo Studio located?",
    answer: "Inkfly Tattoo Studio is located in Wakad, Pune, Maharashtra.",
  },
  {
    question: "Does Inkfly Tattoo Studio offer customised tattoos?",
    answer:
      "Yes, you can discuss your ideas, inspirations and preferred styles to explore personalised tattoo designs.",
  },
  {
    question: "Can beginners get their first tattoo at Inkfly Tattoo Studio?",
    answer:
      "Yes, first-time visitors can discuss their tattoo ideas, design preferences and placement during a consultation.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can contact Inkfly Tattoo Studio through its website or phone to discuss your tattoo requirements and schedule a visit.",
  },
];

const TattooShopNearMe = () => {
  return (
    <main className="near_me_page">
      <Helmet>
        <title>Tattoo Shop Near Me in Wakad, Pune | Inkfly Tattoo</title>
        <meta
          name="description"
          content="Looking for a tattoo shop near you in Pune? Visit Inkfly Tattoo Studio in Wakad for custom tattoo designs, creative artwork and personalised tattoo services."
        />
        <meta
          name="keywords"
          content="tattoo shop near me Pune, tattoo studio near me Wakad, tattoo artist near me Pune, custom tattoo designs Wakad, Inkfly Tattoo Studio"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Tattoo Shop Near Me in Wakad, Pune | Inkfly Tattoo"
        />
        <meta
          property="og:description"
          content="Discover creative tattoo designs and personalised services at Inkfly Tattoo Studio in Wakad, Pune."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.inkflytattoo.com/tattoo-shop-near-me"
        />
      </Helmet>
      <section className="near_me_hero">
        <div className="near_me_content near_me_hero_content">
          <p className="near_me_eyebrow">Find Your Perfect Tattoo</p>
          <h1>Looking for a Professional Tattoo Shop Near You?</h1>
          <p className="near_me_hero_description">
            Discover creative tattoo artistry at Inkfly Tattoo Studio in Wakad,
            Pune. From meaningful small tattoos to detailed custom designs,
            turn your ideas into unique artwork with our tattoo services.
          </p>
        </div>
      </section>

      <section className="near_me_section">
        <div className="near_me_content">
          <p className="near_me_eyebrow">Inkfly Tattoo Studio · Wakad, Pune</p>
          <h2>Your Nearby Destination for Creative Tattoo Art</h2>
          <p>
            Finding the right tattoo studio is an important part of your tattoo
            journey. At Inkfly Tattoo Studio, we focus on understanding your
            ideas, exploring creative designs and delivering personalised
            tattoo experiences.
          </p>
          <p>
            Whether you are planning your first tattoo or adding another piece
            to your collection, explore different tattoo styles and design
            possibilities at our Wakad studio.
          </p>
        </div>
      </section>

      <section className="near_me_section near_me_services_section">
        <div className="near_me_content">
          <p className="near_me_eyebrow">Find a style that feels like you</p>
          <h2>Explore Different Tattoo Styles Near You</h2>
          <ul className="near_me_card_grid near_me_service_grid">
            {tattooServices.map((service) => (
              <li className="near_me_card" key={service}>
                <span aria-hidden="true">✦</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="near_me_section">
        <div className="near_me_content">
          <p className="near_me_eyebrow">Thoughtful work, made personal</p>
          <h2>Experience Creative Tattooing with Attention to Detail</h2>
          <p>
            Choosing a tattoo studio involves more than selecting a design. At
            Inkfly Tattoo Studio, we focus on creativity, precision and a
            comfortable experience.
          </p>
          <ul className="near_me_card_grid near_me_reasons_grid">
            {reasonsToChoose.map((reason) => (
              <li className="near_me_card" key={reason}>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="near_me_section near_me_location_section">
        <div className="near_me_content">
          <p className="near_me_eyebrow">Visit us in Wakad</p>
          <h2>Find a Tattoo Shop Near You in Wakad, Pune</h2>
          <p>
            Located in Wakad, Pune, Inkfly Tattoo Studio welcomes tattoo
            enthusiasts from Wakad, Hinjewadi, Baner, Pimple Saudagar and
            nearby areas.
          </p>
          <p>
            If you are searching online for a tattoo shop near me, connect with
            Inkfly Tattoo Studio to explore designs and plan your visit.
          </p>
          <a
            className="near_me_directions_link"
            href="https://maps.google.com/?q=InkFly+Tattoo+Wakad+Pune"
            target="_blank"
            rel="noreferrer"
          >
            Get directions to the studio
          </a>
        </div>
      </section>

      <section className="near_me_cta">
        <div className="near_me_content">
          <p className="near_me_eyebrow">Your next tattoo starts with an idea</p>
          <h2>Ready to Get Your Next Tattoo?</h2>
          <p>
            Your next tattoo starts with an idea. Share your inspiration with
            Inkfly Tattoo Studio and let’s create something meaningful
            together.
          </p>
          <Link
            className="near_me_button near_me_button_light"
            to="/contact"
          >
            Book Your Tattoo Appointment
          </Link>
        </div>
      </section>

      <section className="near_me_section near_me_faq_section">
        <div className="near_me_content">
          <p className="near_me_eyebrow">Answers before you visit</p>
          <h2>Frequently Asked Questions</h2>
          <div className="near_me_faq_list">
            {faqs.map(({ question, answer }) => (
              <details className="near_me_faq" key={question}>
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

export default TattooShopNearMe;
