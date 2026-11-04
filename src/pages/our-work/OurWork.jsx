import { useEffect, useState } from "react";
import PageTop from "../../components/page-top/PageTop";
import { Helmet } from "react-helmet-async";
import appointmentImage from "../../assets/gallery/img1.JPG";
import backgroundImage from "../../assets/gallery/img2.webp";

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
      image: backgroundImage,
      alt: "Detailed black and white eagle tattoo design",
      shape: "portrait",
    },
  ],
  piercing: [],
};

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("tattoo");
  const [selectedImage, setSelectedImage] = useState(null);
  const [failedImages, setFailedImages] = useState(() => new Set());
  const visibleItems = galleryItems[activeCategory].filter(
    (item) => !failedImages.has(item.image),
  );

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
      <Helmet>
        <title>Tattoo Portfolio | Inkfly Tattoo Studio, Pune</title>
        <meta
          name="description"
          content="Explore tattoo artwork and studio work from Inkfly Tattoo Studio in Wakad, Pune, including custom designs and detailed tattoo artistry."
        />
        <meta
          name="keywords"
          content="tattoo portfolio Pune, tattoo designs Wakad, Inkfly Tattoo artwork, custom tattoo gallery, tattoo studio portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Tattoo Portfolio | Inkfly Tattoo Studio, Pune"
        />
        <meta
          property="og:description"
          content="Browse creative tattoo designs and artwork from Inkfly Tattoo Studio in Wakad, Pune."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.inkflytattoo.com/our-work" />
      </Helmet>
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
            {visibleItems.length > 0 ? (
              visibleItems.map((item) => (
                <button
                  type="button"
                  className={`our_work_item ${item.shape}`}
                  key={item.title}
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    onError={() => {
                      setFailedImages((previousImages) => {
                        const nextImages = new Set(previousImages);
                        nextImages.add(item.image);
                        return nextImages;
                      });
                    }}
                  />
                  {/* <span className="our_work_item_caption">{item.title}</span> */}
                  <span className="our_work_item_expand" aria-hidden="true">
                    +
                  </span>
                </button>
              ))
            ) : (
              <div className="our_work_empty" role="status">
                <span className="our_work_empty_mark" aria-hidden="true">
                  ✦
                </span>
                <h2>No images found</h2>
                <p>There are no images available in this category yet.</p>
              </div>
            )}
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
