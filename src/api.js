import axios from "axios";

const API_KEY = "e94cc33f60d28552a37b01b1d75e3cfa"; // Replace with your OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        q: query,
        units: "metric", // Celsius
        appid: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

