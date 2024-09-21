const ImageCard = (image) => {
  // console.log(image);

  return (
    <li>
      <div>
        <img
          src={image.urls.raw}
          alt={image.alt_description}
          width="280px"
          height="280px"
        />
      </div>
    </li>
  );
};
export default ImageCard;
