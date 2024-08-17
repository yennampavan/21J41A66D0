const BASE_URL = "http://localhost:9876/numbers";

export const fetchNumbers = async (numberType) => {
  try {
    const response = await fetch(`${BASE_URL}/${numberType}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Failed to fetch data");
  } catch (error) {
    console.error(error);
    return null;
  }
};
