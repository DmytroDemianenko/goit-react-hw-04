import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images }) => {
  // console.log(images);

  return (
    <ul className={s.wrapper}>
      {/* Набір елементів списку із зображеннями */}
      {images.map((image) => (
        <ImageCard id={image.id} key={image.id} {...image} />
      ))}
    </ul>
  );
};
export default ImageGallery;
