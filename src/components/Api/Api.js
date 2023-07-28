
import axios from 'axios';

const API_KEY = '35888273-1c23fe8a36556823f5034ebc8';
const BASE_URL = `https://pixabay.com/api/`;


axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const images = await axios.get(`?q=${query}&page=${page}`);
  return images;
};