import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./api";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (query) => {
    const data = await fetchWeather(query);
    setWeather(data);
  };

  return (
    <div className="container">
      <header>Weather Forecast App</header>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
