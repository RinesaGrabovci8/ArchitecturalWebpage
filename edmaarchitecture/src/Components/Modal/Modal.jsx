import React, { useEffect } from 'react';
import "./modal.scss";

const Modal = (props) => {
  const { isOpen, close, children, title } = props

  useEffect(() => {
    console.log("isOpen", isOpen)
    if (isOpen) {
      document.body.classList.add("scroll-y");
    } else {
      document.body.classList.remove("scroll-y");
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
        <span className="btn-close-bg" onClick={() => close()}></span>
        <div className="content-modal">
            <button className="btn-close" onClick={() => close()}>X</button>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    </div>
  )
}

export default Modal