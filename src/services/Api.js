import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '39088067-91f94ac6bb1312b7445b3cdf9';


export const fetchImages = async (value, page) => {
    const params = new URLSearchParams({
       key: API_KEY,
       q: value,
       image_type: 'photo;',
       orientation: 'horizontal',
       page: page,
       per_page: 12,
       
});
  const response = await axios.get(
      `${URL}?${params}`
      
  );
  return response.data;
};