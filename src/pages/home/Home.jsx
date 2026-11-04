import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import appointment_img from "../../assets/hero/Cinematic_Tattoo_Studio_in_Warm_Shadows.png";
import about_img from "../../assets/about/about_img.jpg";
import background_img from "../../assets/background_img.jpg";
import tattooMachine from "../../assets/tattoo_machine.webp";

import modification from "../../assets/services/modification.jpeg";
import consultation from "../../assets/services/consultation.webp";
import coverup from "../../assets/services/coverup.jpeg";
import fine_line from "../../assets/services/fine_line.jpeg";
import geometric from "../../assets/services/geometric.jpeg";
import mandal_tattoo from "../../assets/services/mandal_tattoo.jpeg";
import tattoo_design from "../../assets/services/tattoo_design.jpeg";
import tribal from "../../assets/services/tribal.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  LuAward,
  LuHeart,
  LuPalette,
  LuShieldCheck,
  LuSmile,
  LuSparkles,
} from "react-icons/lu";

import "swiper/css";
import "swiper/css/pagination";
import prashant from "../../assets/artists/prashant_inkfly.webp";
import blogPosts from "../blog/blogData";
import { Helmet } from "react-helmet-async";

const heroHeading = "Best Tattoo Studio in Wakad & Baner";

const serviceCards = [
  {
    name: "Modifications",
    image: modification,
    alt: "Tattoo modification artwork and detail work",
  },
  {
    name: "Tattoo Design",
    image: tattoo_design,
    alt: "Tattoo artist working on a custom tattoo design",
  },
  {
    name: "Consultation",
    image: consultation,
    alt: "Tattoo artist consulting on a custom tattoo concept",
  },
  {
    name: "Tribal Tattoo",
    image: tribal,
    alt: "Detailed tribal tattoo artwork in a tattoo studio",
  },
  {
    name: "Cover-Up Tattoos",
    image: coverup,
    alt: "Cover-up tattoo transformation on skin",
  },
  {
    name: "Geometric Tattoos",
    image: geometric,
    alt: "Precise geometric tattoo artwork with clean patterns",
  },
  {
    name: "Mandala Tattoos",
    image: mandal_tattoo,
    alt: "Spiritual mandala tattoo design in black and grey",
  },
  {
    name: "Fine Line Tattoos",
    image: fine_line,
    alt: "Fine line tattoo detail with delicate artistry",
  },
];

const reasonsToChooseUs = [
  {
    icon: LuPalette,
    title: "Custom Tattoo Designs",
    description:
      "Get unique tattoo designs tailored to your ideas, personality and style.",
  },
  {
    icon: LuAward,
    title: "Skilled Tattoo Artists",
    description:
      "Experienced tattoo artists dedicated to creativity, precision and detail.",
  },
  {
    icon: LuShieldCheck,
    title: "Hygiene & Safety",
    description:
      "Enjoy a clean, hygienic and safety-focused tattooing environment.",
  },
  {
    icon: LuHeart,
    title: "Personalized Attention",
    description: "Every tattoo design is carefully planned around your vision.",
  },
  {
    icon: LuSparkles,
    title: "Quality Tattoo Artwork",
    description:
      "From minimalist tattoos to intricate designs, we focus on artistic excellence.",
  },
  {
    icon: LuSmile,
    title: "Comfortable Experience",
    description:
      "Enjoy a welcoming and professional tattoo experience from start to finish.",
  },
];

const Home = () => {
  const headingRef = useRef(null);
  const testimonialTouchStartX = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote:
        "The team understood exactly what I wanted and turned my idea into a piece of art. The whole experience felt thoughtful and personal.",
      name: "Aarav Mehta",
      detail: "Custom tattoo client",
    },
    {
      quote:
        "From the first consultation to the final details, everything was so professional. I couldn’t be happier with my tattoo.",
      name: "Priya Shah",
      detail: "Fine-line tattoo client",
    },
    {
      quote:
        "A welcoming studio, a brilliant artist, and a design that means a lot to me. I’ll definitely be coming back.",
      name: "Rohan Kulkarni",
      detail: "Returning client",
    },
  ];

  const handleTestimonialTouchStart = (event) => {
    testimonialTouchStartX.current = event.touches[0].clientX;
  };

  const handleTestimonialTouchEnd = (event) => {
    const startX = testimonialTouchStartX.current;
    testimonialTouchStartX.current = null;
    if (startX === null) return;

    const difference = startX - event.changedTouches[0].clientX;

    if (Math.abs(difference) < 40) return;

    setActiveTestimonial((current) =>
      difference > 0
        ? (current + 1) % testimonials.length
        : (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <>
      {/*hero section  */}

      <Helmet>
        <title>Inkfly Tattoo Studio | Best Tattoo Shop in Wakad, Pune</title>

        <meta
          name="description"
          content="Looking for the best tattoo studio in Wakad, Pune? Visit Inkfly Tattoo Studio for custom tattoo designs, fine line tattoos, cover-ups and professional tattoo services."
        />

        <meta
          name="keywords"
          content="best tattoo studio in Wakad, tattoo shop in Wakad, tattoo artist in Wakad, best tattoo shop in Pune, tattoo studio near me, custom tattoo designs Pune, fine line tattoo Pune, cover up tattoo Pune, Inkfly Tattoo Studio"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Inkfly Tattoo Studio | Wakad, Pune"
        />

        <meta
          property="og:description"
          content="Discover custom tattoo designs, fine line tattoos and professional tattoo services at Inkfly Tattoo Studio, Wakad, Pune."
        />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.inkflytattoo.com/" />
      </Helmet>

      <div className="parent hero_parent bg-img-cover">
        <div className="cont hero_cont">
          <div className="left_hero">
            <span className="indicator">
              PROFESSIONAL TATTOO STUDIO IN WAKAD, PUNE
            </span>

            <h1 ref={headingRef} aria-label={heroHeading}>
              {heroHeading.split(" ").map((word, wordIndex) => {
                const startIndex =
                  heroHeading.split(" ").slice(0, wordIndex).join(" ").length +
                  (wordIndex > 0 ? 1 : 0);

                return (
                  <span
                    className="hero_word"
                    key={`${animationKey}-${word}-${wordIndex}`}
                    aria-hidden="true"
                  >
                    {Array.from(word, (letter, index) => (
                      <span
                        className="hero_heading_letter"
                        key={`${animationKey}-${index}`}
                        style={{
                          animationDelay: `${(startIndex + index) * 0.045}s`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                );
              })}
            </h1>
            <p style={{ color: "#ffffffcb" }}>
              Discover unique custom tattoo designs at Inkfly Tattoo Studio,
              Wakad, Pune. From minimalist tattoos to detailed artwork and
              cover-up tattoos, our skilled tattoo artists bring your ideas to
              life with creativity and precision.
            </p>

            <div className="btn">
              <p className="first_btn">Book Now</p>
              <p className="second_btn">Book Now</p>
            </div>
          </div>
        </div>
      </div>

      {/* introduction */}

      <div className="parent intro_parent home_intro_parent">
        <div className="cont intro_cont">
          <div className="intro_left bg-img-cover"></div>

          <div className="intro_right">
            <div className="intro_overlay bg-img-cover"></div>
            <span className="indicator">ABOUT INKFLY TATTOO</span>

            <h2>More Than Ink. It's Your Story, Our Art.</h2>

            {/* <img src={intro_img} alt="Tattoo Shop introduction" /> */}

            <p>
              At{" "}
              <span style={{ fontWeight: "bold" }}>
                Inkfly Tattoo Studio, Wakad, Pune
              </span>
              , we turn your ideas into meaningful works of art. From minimal
              designs to detailed custom tattoos, our focus is on creativity,
              precision and making every tattoo uniquely yours.
            </p>

            <p>
              With a passion for tattoo artistry and attention to every detail,
              we strive to deliver an experience built on comfort, creativity
              and quality. From your first idea to the final artwork, we're here
              to make your tattoo journey special.
            </p>

            <button className="btn">
              <p className="first_btn">Discover Our Story</p>
              <p className="second_btn">Discover Our Story</p>
            </button>
          </div>
        </div>
      </div>

      <div className="quotes_parent parent">
        <div className="cont quotes_cont">
          <h3>
            Because your tattoo isn't just something you wear. It's something
            you carry forever.
          </h3>
        </div>
      </div>

      {/* services */}

      <div className="parent services_parent" id="services">
        <div className="cont services_cont">
          <span className="indicator">Our Tattoo Services</span>
          <h2>Explore Our Professional Tattoo Services in Pune</h2>
          <div className="service_cards">
            {serviceCards.map((service) => (
              <article className="service_card" key={service.name}>
                <img src={service.image} alt={service.alt} loading="lazy" />
                <h2>{service.name}</h2>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* why choose */}

      <div className="parent why_choose_parent">
        <div className="cont why_choose_cont">
          <span className="indicator">WHY CHOOSE INKFLY TATTOO</span>
          <h2>Why Choose Us?</h2>

          <div className="why_choose_grid">
            {reasonsToChooseUs.map((reason) => {
              const Icon = reason.icon;

              return (
                <article className="why_choose_card" key={reason.title}>
                  <Icon className="why_choose_icon" aria-hidden="true" />
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              );
            })}
          </div>

          <div className="why_choose_cta">
            <h3>Your Trusted Tattoo Studio in Wakad, Pune</h3>
            <p>
              Looking for a professional tattoo studio in Pune? At Inkfly
              Tattoo, we combine artistic creativity, skilled tattoo artists and
              attention to detail to create custom tattoo designs that reflect
              your personality. From unique tattoo concepts to detailed artwork,
              we focus on quality, hygiene and a comfortable tattooing
              experience.
            </p>

            <div className="btn">
              <div className="first_btn">Book Your Appointment</div>
              <div className="second_btn">Book Your Appointment</div>
            </div>
          </div>
        </div>
      </div>

      {/* artists */}

      {/* <div className="parent artists_parent">
        <div className="cont artists_cont">
          <span className="indicator" style={{ color: "white" }}>
            Meet the team
          </span>
          <h2 style={{ color: "white" }}>Our Tattoo Artists</h2>

          <div className="main_body">
            <div className="artist_block_main">
              <div className="artist_block">
                <img
                  src={prashant}
                  alt="Akshay Patil, tattoo artist"
                  loading="lazy"
                />
                <h3>Akshay Patil</h3>
                <span>Tattoo Artist</span>
              </div>
            </div>

            <div className="artist_block_main artist_block_featured">
              <div className="artist_block">
                <img
                  src={prashant}
                  alt="Akshay Patil, tattoo artist"
                  loading="lazy"
                />
                <h3>Akshay Patil</h3>
                <span>Tattoo Artist</span>
              </div>
            </div>

            <div className="artist_block_main">
              <div className="artist_block">
                <img
                  src={prashant}
                  alt="Akshay Patil, tattoo artist"
                  loading="lazy"
                />
                <h3>Akshay Patil</h3>
                <span>Tattoo Artist</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* quotes */}
      <div className="parent parent_middle_quote">
        <div className="quotes_overlay bg-img-cover"></div>
        <div className="cont cont_middle_quote">
          <div className="indicator">A STORY BEHIND EVERY TATTOO</div>
          <h2>
            "Some Stories Are Too Deep for Words, So We Wear Them as Art."
          </h2>
          <p>
            Discover meaningful custom tattoo designs at{" "}
            <span style={{ fontWeight: "bold" }}>
              Inkfly Tattoo Studio, Wakad, Pune
            </span>
            . Let's transform your memories, emotions and imagination into
            artwork that stays with you forever.
          </p>
          <div className="btn">
            <div className="first_btn">MAKE AN APPOINTMENT</div>
            <div className="second_btn">MAKE AN APPOINTMENT</div>
          </div>
        </div>
      </div>

      {/* Appointment */}

      <div className="parent appointment_parent" id="appointment">
        <div className="appointment_image">
          <img
            src={appointment_img}
            alt="Tattoo artist working in a warmly lit studio"
          />
        </div>
        <div className="appointment_content">
          <div className="appointment_form_wrap">
            <span className="appointment_eyebrow">
              Let's Create Something Special
            </span>
            <h2>Make an appointment</h2>
            <p>
              Tell us a little about what you have in mind. We’ll get in touch
              to talk through your design and find a time that works for you.
            </p>

            <form className="appointment_form">
              <label className="visually_hidden" htmlFor="appointment-name">
                Your name
              </label>
              <input
                id="appointment-name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
              />

              <label className="visually_hidden" htmlFor="appointment-email">
                Your email
              </label>
              <input
                id="appointment-email"
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                required
              />

              <label className="visually_hidden" htmlFor="appointment-phone">
                Your phone number
              </label>
              <input
                id="appointment-phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                autoComplete="tel"
                required
              />

              <label className="visually_hidden" htmlFor="appointment-time">
                Preferred time
              </label>
              <input
                id="appointment-time"
                name="time"
                type="time"
                aria-label="Preferred time"
                required
              />

              <label className="visually_hidden" htmlFor="appointment-service">
                Choose a service
              </label>
              <select
                id="appointment-service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="modifications">Modifications</option>
                <option value="tattoo-design">Tattoo design</option>
                <option value="consultation">Consultation</option>
                <option value="tribal-tattoo">Tribal tattoo</option>
              </select>

              <label className="visually_hidden" htmlFor="appointment-artist">
                Choose an artist
              </label>
              <select id="appointment-artist" name="artist" defaultValue="">
                <option value="" disabled>
                  Choose an artist
                </option>
                <option value="no-preference">No preference</option>
                <option value="request-artist">
                  I have a specific artist in mind
                </option>
              </select>

              <button className="btn">
                <p style={{ color: "black" }} className="first_btn">
                  Make Appointment
                </p>
                <p className="second_btn">Make Appointment</p>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* blogs */}
      <div className="parent blogs_parent" id="blogs">
        <div className="cont blogs_cont">
          <div className="blogs_heading">
            <h2>Blogs</h2>
            <Link className="blogs_view_all" to="/blogs">
              View all stories <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="blogs_grid">
            {blogPosts.map((post) => (
              <article className="blog_card" key={post.slug}>
                <Link
                  className="blog_image"
                  to={`/blogs/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                >
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    style={{ objectPosition: post.imagePosition }}
                  />
                  <span className="blog_category">{post.category}</span>
                </Link>
                <div className="blog_card_content">
                  <h3>
                    <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                  <Link className="blog_read_more" to={`/blogs/${post.slug}`}>
                    <span aria-hidden="true" />
                    Read the story
                    <span className="blog_arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* testimonials */}

      <div className="testimonials_parent" aria-label="Client testimonials">
        <div className="testimonials_background" aria-hidden="true" />

        <div className="testimonials_content">
          <Swiper
            className="testimonials_swiper"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            speed={700}
            loop={testimonials.length > 1}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".testimonials_pagination",
              bulletClass: "testimonial_dot",
              bulletActiveClass: "active",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <article
                  className="testimonial_slide"
                  aria-label={`${testimonial.name}, client testimonial`}
                >
                  <p className="testimonial_quote">“{testimonial.quote}”</p>

                  <p className="testimonial_author">{testimonial.name}</p>

                  <p className="testimonial_detail">{testimonial.detail}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="testimonials_pagination"
            aria-label="Choose a review"
          />
        </div>
      </div>

      {/* b footer */}

      <div className="parent before_footer">
        <div className="cont before_footer_cont">
          <h1 className="indicator">Ready to Turn Your Ideas Into Ink?</h1>
          <h2 style={{ color: "black" }}>
            Your next tattoo starts with an idea. Let's bring it to life with
            custom tattoo designs and creative artistry at Inkfly Tattoo Studio,
            Wakad, Pune.
          </h2>
          <button className="btn">
            <p className="first_btn">Make an Appointment</p>
            <p className="second_btn">Make an Appointment</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
