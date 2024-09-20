import ImageCard from "./ImageCard";
const ImageGallery = ({ images }) => {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <ImageCard />
      </li>
    </ul>
  );
};
export default ImageGallery;
