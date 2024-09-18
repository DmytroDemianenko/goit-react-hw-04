import { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  return (
    <>
      <SearchBar />
      <ImageGallery />
    </>
  );
}

export default App;
