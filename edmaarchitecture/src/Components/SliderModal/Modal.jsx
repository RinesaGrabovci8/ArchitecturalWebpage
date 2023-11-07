import React, { useEffect, useState } from 'react';

const Modal = (props) => {
  const { isOpen, close, images = [], description } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    let intervalId;

    if (isOpen) {
      document.body.classList.add('scroll-y');
      intervalId = setInterval(() => {
        nextImage();
      }, 3000); 
    } else {
      document.body.classList.remove('scroll-y');
      clearInterval(intervalId); 
    }

    return () => {
      clearInterval(intervalId); 
    }
  }, [isOpen, images]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <span className="btn-close-bg" onClick={() => close()}></span>
      <div className="content-modal">
        <button className="btn-close" onClick={() => close()}>
          X
        </button>
        <div className="image-slider">
          <img
            className="modal-image"
            src={images[currentImageIndex]}
            alt="image"
          />
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Modal;
