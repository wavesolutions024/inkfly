import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import PageTop from "../../components/page-top/PageTop";
import { Helmet } from "react-helmet-async";
const About = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const targets = [910, 910, 910, 910];
  const labels = [
    "Tattoo Design",
    "Tattoo Design",
    "Piercing Done",
    "Happy Clients",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animationFrame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(animationFrame);

        if (entry.isIntersecting) {
          setCounts([0, 0, 0, 0]);

          const duration = 2000;
          let startTime = null;

          const animate = (timestamp) => {
            if (startTime === null) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Smooth ease-out effect
            const easedProgress = 1 - Math.pow(1 - progress, 4);

            setCounts(
              targets.map((target) => Math.floor(target * easedProgress)),
            );

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            } else {
              setCounts(targets);
            }
          };

          animationFrame = requestAnimationFrame(animate);
        } else {
          setCounts([0, 0, 0, 0]);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>About Inkfly Tattoo Studio | Wakad, Pune</title>
        <meta
          name="description"
          content="Learn about Inkfly Tattoo Studio in Wakad, Pune, and our approach to personalised tattoo designs, creative artistry and comfortable studio experiences."
        />
        <meta
          name="keywords"
          content="about Inkfly Tattoo Studio, tattoo studio Wakad, tattoo artist Pune, custom tattoo artistry, tattoo studio story"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="About Inkfly Tattoo Studio | Wakad, Pune"
        />
        <meta
          property="og:description"
          content="Discover the people and creative approach behind Inkfly Tattoo Studio in Wakad, Pune."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.inkflytattoo.com/about" />
      </Helmet>
      <PageTop title="OUR STORY" details={"The Art Behind Every Ink "} />

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

      {/* counters */}

      <div className="parent count_parent bg-img-cover" ref={sectionRef}>
        <div className="cont count_cont">
          {counts.map((count, index) => (
            <div className="count_wrap" key={index}>
              <h2>{count}+</h2>
              <span>{labels[index]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* who we are */}

      <div className="parent who_we_r_parent">
        <div className="cont who_we_r_cont">
          <div className="w_w_r_left">
            <div className="w_w_r_left_overlay bg-img-cover"></div>
            <span className="indicator">Who We Are</span>
            <h2> Passion for Tattoo Art. Dedication to Every Detail</h2>
            <p>
              We are a team of passionate tattoo artists at{" "}
              <span style={{ fontWeight: "bold" }}>
                Inkfly Tattoo Studio in Wakad, Pune,
              </span>{" "}
              dedicated to turning your ideas into timeless body art. With
              creativity, precision and attention to detail, we specialize in
              custom tattoo designs that reflect your personality, emotions and
              unique style.
            </p>
            <p>
              From minimalist tattoos to intricate artwork, our goal is to
              create meaningful designs while providing a professional,
              comfortable and hygiene-focused tattoo experience.
            </p>
          </div>
          <div className="w_w_r_right bg-img-cover"></div>
        </div>
      </div>

      {/* quotes */}

      <div className="who_w_r_quote_parent parent bg-img-cover">
        <div className="who_w_r_quote_cont cont">
          <span className="indicator" style={{ color: "#d7d7d7" }}>
            OUR STUDIO
          </span>
          <h2 style={{ color: "white" }}>A Space Where Art Comes to Life.</h2>
          <p style={{ color: "#d7d7d7", textAlign: "center" }}>
            Step into Inkfly Tattoo Studio in Wakad, Pune, a creative space
            designed for tattoo lovers and art enthusiasts. With a welcoming
            atmosphere, professional equipment and a focus on hygiene, we make
            every tattoo session comfortable, inspiring and memorable.
          </p>
        </div>
      </div>

      {/* our journey */}
      <section className="parent journey_parent">

        <div className="cont journey_cont">
          <div className="journey_intro">
            <div className="journey_intro_overlay bg-img-cover"></div>
            <span className="indicator">OUR JOURNEY</span>
            <h2>Where Creativity Meets Art, Precision and Expression.</h2>
            <p>
              <span style={{ fontWeight: "bold" }}>
                INKFLY Tattoo Studio in Pune{" "}
              </span>
              is a creative space where art meets individuality. We specialise
              in custom tattoo designs, meaningful artwork and professional body
              piercing. Our skilled artists transform your ideas into unique
              expressions through precision, creativity and attention to detail.
              With a focus on hygiene, quality and personalised experiences, we
              make every tattoo journey comfortable, memorable and truly yours.
            </p>

            <p>
              Our journey is driven by a passion for tattoo artistry and a
              commitment to quality. We focus on understanding every client's
              vision, recommending the right designs and delivering a
              comfortable tattooing experience. At INKFLY, every piece of art is
              created with precision, creativity and attention to detail.
            </p>
          </div>

          <div className="journey_steps">
            <article className="journey_step">
              <span className="journey_number">01</span>
              <h3>Understand Your Tattoo</h3>
              <p>
                Discover what goes into professional tattooing. Understand
                tattoo styles, placement, size and the importance of choosing
                the right design before your session.
              </p>
            </article>
            <article className="journey_step">
              <span className="journey_number">02</span>
              <h3>Choose Your Perfect Design</h3>
              <p>
                From minimalist tattoos to detailed custom artwork, explore
                designs that match your personality. Our artists help you find
                the right style, placement and size.
              </p>
            </article>
            <article className="journey_step">
              <span className="journey_number">03</span>
              <h3>Choose a Hygienic Studio</h3>
              <p>
                Your safety matters. We prioritise cleanliness, professional
                tattooing practices and hygienic procedures to ensure a
                comfortable tattoo experience.
              </p>
            </article>
            <article className="journey_step">
              <span className="journey_number">04</span>
              <h3>Visit Our Pune Studio</h3>
              <p>
                Conveniently located in Wakad, Pune, INKFLY Tattoo Studio
                welcomes tattoo enthusiasts from Wakad, Baner, Hinjewadi and
                Pimpri-Chinchwad.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* b footer */}

      {/* <div className="parent before_footer">
        <div className="cont before_footer_cont">
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            fugiat fugit molestiae ad magnam facilis?
          </h2>
          <button className="btn">
            <p className="first_btn">Make an Appointment</p>
            <p className="second_btn">Make an Appointment</p>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default About;
