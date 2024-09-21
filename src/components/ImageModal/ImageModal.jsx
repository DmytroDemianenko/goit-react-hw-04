import { useEffect } from "react";
import s from "./ImageModal.module.css";
const ImageModal = ({ onClose }) => {
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
    const intervalID = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    const timeoutID = setTimeout(() => {
      console.log("BADABUM 🔥");
    }, 4000);

    return () => {
      console.log("Мене закрили!");
      clearInterval(intervalID);
      clearTimeout(timeoutID);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>title</h1>
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
