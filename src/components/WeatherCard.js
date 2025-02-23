const WeatherCard = ({ weather }) => {
    if (!weather) {
      return <p>Search for a location to see the weather...</p>;
    }
  
    return (
      <div className="weather-card">
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Pressure: {weather.main.pressure} hPa</p>
        <p>Sky: {weather.weather[0].description}</p>
      </div>
    );
  };
  
  export default WeatherCard;
  