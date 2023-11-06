import React, { useEffect, useState } from 'react';
import './modal.scss';
import architecturaldesign from '../../archslider';

const Modal = (props) => {
  const { isOpen, close, children, title, images = [] } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    let intervalId;

    if (isOpen) {
      document.body.classList.add('scroll-y');
      // Automatically switch images with a timer
      intervalId = setInterval(() => {
        nextImage();
      }, 3000); // Change image every 3 seconds (adjust as needed)
    } else {
      document.body.classList.remove('scroll-y');
      clearInterval(intervalId); // Clear the interval when the modal is closed
    }

    return () => {
      clearInterval(intervalId); // Cleanup when the component unmounts
    }
  }, [isOpen, images]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" >
      <span className="btn-close-bg" onClick={() => close()}></span>
      <div className="content-modal">
        <button className="btn-close" onClick={() => close()}>
          X
        </button>
        {title && <h2>{title}</h2>}
        <div className="image-slider">
          <img
            className="modal-image"
            src={images[currentImageIndex].url}
            alt="image"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
