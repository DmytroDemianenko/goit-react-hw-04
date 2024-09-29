import { useEffect } from "react";
import s from "./ImageModal.module.css";
const ImageModal = ({ onClose, image }) => {
  const { user, urls, alt_description, likes } = image;
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
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <img className={s.picture} src={urls.regular} alt={alt_description} />
        <div className={s.contentWrapper}>
          <h2 className={s.title}>Title: {alt_description}</h2>
          <p className={s.title}>Likes: {likes}</p>
          <p className={s.title}>Author: {user.name}</p>
        </div>

        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
