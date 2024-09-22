import s from "./ImageGallery.module.css";
const ImageCard = ({ image, openModal }) => {
  // console.log(image);
  const { urls, alt_description } = image;

  return (
    <li>
      <div>
        <img
          className={s.image}
          src={urls.small}
          alt={alt_description}
          width="280px"
          height="280px"
          onClick={openModal}
        />
      </div>
    </li>
  );
};
export default ImageCard;
