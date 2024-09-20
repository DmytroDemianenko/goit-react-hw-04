import axios from "axios";
const API_KEY = "K7HoDKivGHO_RhYkXLNaXmtPjYXLPiEvemXbFPg1njQ";
const BASE_URL = "https://api.unsplash.com/search";
// const PER_PAGE = 12;
export const fetchImages = async (query) => {
  const { data } = await axios.get(
    `${BASE_URL}/photos?&query=${query}&client_id=${API_KEY}&page=0`
  );
  return data;
};
