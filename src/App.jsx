import { useEffect, useState } from "react";
import { fetchImages } from "./components/services/api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      const data = await fetchImages(query);
      setImages((prev) => [...prev, ...data.results]);
      console.log(data);
    };
    getData();
  }, [query]);

  const handleSetQuery = (query) => {
    setQuery(query);
    // setArticles([]);
    // setPage(0);
  };

  console.log(query);
  return (
    <>
      <SearchBar handleSubmit={handleSetQuery} />
      <ImageGallery images={images} />
      {/* <ErrorMessage/> */}
      {/* <ImageModal/> */}
      {/* <Loader/> */}
      {/* <LoadMoreBtn/> */}
    </>
  );
}

export default App;
