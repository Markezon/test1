const API_URL = "https://api.thecatapi.com/v1/images/search";

export const fetchCat = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch cat");
  }
  const data = await response.json();
  return data[0]; // берём первый элемент массива
};
