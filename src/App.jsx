import { useEffect, useState } from "react";
import { fetchImages } from "./components/services/api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState("");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setImages((prev) => [...prev, ...data.results]);
        // console.log(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(0);
  };

  console.log(page);
  return (
    <>
      <div className="container">
        <SearchBar handleSubmit={handleSetQuery} />
        {query.length > 0 && <ImageGallery images={images} />}
        {isError && <ErrorMessage />}
        <button onClick={openModal}>Open modal</button>
        {isOpen && <ImageModal onClose={closeModal} />}
        {/* <ImageModal/> */}
        {isLoading && <Loader />}
        {query.length > 0 && <LoadMoreBtn increasePage={handleChangePage} />}
      </div>
    </>
  );
}

export default App;
