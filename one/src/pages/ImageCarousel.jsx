import { useState } from "react";

const ImageCarousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="carousel placeholder">
        No Image Available
      </div>
    );
  }

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={images[index]}
        alt={`Property image ${index + 1}`}
        loading="lazy"
      />

      {images.length > 1 && (
        <>
          <button
            className="nav left"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            className="nav right"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>

          <span className="count">
            {index + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
