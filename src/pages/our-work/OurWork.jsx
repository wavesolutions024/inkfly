import { useEffect, useState } from "react";
import PageTop from "../../components/page-top/PageTop";
import appointmentImage from "../../assets/hero/Cinematic_Tattoo_Studio_in_Warm_Shadows.png";
import backgroundImage from "../../assets/background_img.jpg";
import counterImage from "../../assets/counter.webp";
import eagleDesign from "../../assets/intro_img.png";
import aboutImage from "../../assets/about/about_img.jpg";
import artistImage from "../../assets/artists/prashant_inkfly.webp";
import tattooMachineImage from "../../assets/tattoo_machine.png";
import "./OurWork.scss";

const galleryItems = {
  tattoo: [
    {
      title: "Tattoo session",
      image: appointmentImage,
      alt: "Tattoo artist working with a client in the studio",
      shape: "landscape",
    },
    {
      title: "Eagle design",
      image: eagleDesign,
      alt: "Detailed black and white eagle tattoo design",
      shape: "portrait",
    },
    {
      title: "Tattoo portrait",
      image: aboutImage,
      alt: "Portrait featuring detailed tattoo artwork",
      shape: "portrait",
    },
    {
      title: "Studio tattoo work",
      image: backgroundImage,
      alt: "Tattoo artist working in a studio",
      shape: "portrait",
    },
  ],
  piercing: [
    {
      title: "Tattooing in progress",
      image: counterImage,
      alt: "Tattoo artist working on a tattoo",
      shape: "landscape",
    },
    {
      title: "Tattoo machine",
      image: tattooMachineImage,
      alt: "Tattoo machine used to create detailed body art",
      shape: "portrait",
    },
    {
      title: "Meet the artist",
      image: artistImage,
      alt: "Inkfly tattoo artist",
      shape: "portrait",
    },
    {
      title: "Tattoo studio",
      image: appointmentImage,
      alt: "Tattoo artist working with a client in the studio",
      shape: "portrait",
    },
  ],
};

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("tattoo");
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleItems = galleryItems[activeCategory];

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <PageTop title="OUR WORK" details="A closer look at our artistry" />

      <main className="parent our_work_parent">
        <div className="cont our_work_cont">
          <span className="indicator">OUR PORTFOLIO</span>
          <h1>Explore Our Creative Tattoo Work in Pune</h1>

          <div
            className="our_work_filters"
            role="group"
            aria-label="Filter work by category"
          >
            <button
              type="button"
              className={activeCategory === "tattoo" ? "active" : ""}
              aria-pressed={activeCategory === "tattoo"}
              onClick={() => setActiveCategory("tattoo")}
            >
              Tattoo Work
            </button>
            <button
              type="button"
              className={activeCategory === "piercing" ? "active" : ""}
              aria-pressed={activeCategory === "piercing"}
              onClick={() => setActiveCategory("piercing")}
            >
              Piercing Work
            </button>
          </div>

          <div className="our_work_gallery" aria-live="polite">
            {visibleItems.map((item) => (
              <button
                type="button"
                className={`our_work_item ${item.shape}`}
                key={item.title}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="our_work_item_caption">{item.title}</span>
                <span className="our_work_item_expand" aria-hidden="true">
                  +
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {selectedImage && (
        <div
          className="our_work_lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            className="our_work_lightbox_close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>
          <img src={selectedImage.image} alt={selectedImage.alt} />
          <p>{selectedImage.title}</p>
        </div>
      )}
    </>
  );
};

export default OurWork;
