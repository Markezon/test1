const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';

export const fetchCats = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch cats');
  }
  return await response.json();
};
