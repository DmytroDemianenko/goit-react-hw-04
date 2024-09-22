import { useEffect } from "react";
import s from "./ImageModal.module.css";
const ImageModal = ({ onClose, image }) => {
  const { urls, alt_description } = image;
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    console.log(image);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h2 className={s.title}>{alt_description}</h2>
          <img src={urls.regular} alt={alt_description} />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
