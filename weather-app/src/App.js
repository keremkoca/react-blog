import "./App.css";
import { useState, useEffect, useReducer } from "react";
import WeatherIcon from "./Components/WeatherIcon";
import axios from "axios";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "4c0c41e683cd64751a875280cff3da0e";
const LOCATION_CODE = "Istanbul";
const FULL_API_URL = `${API_URL}?q=${LOCATION_CODE}&appid=${API_KEY}`;

const initialState = {
  windSpeedK: null,
  tempratureC: null,
  cityName: null,
  countryName: null,
  generalData: null,
  condition: null,
  description: null,
  sunrise: null,
  sunset: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ON_LOAD":
      return {
        ...state,
        windSpeedK: action.payload.wind.speed,
        tempratureC: Math.round(action.payload.main.temp - 273.15).toFixed(0),
        cityName: action.payload.name,
        countryName: action.payload.sys.country,
        generalData: action.payload,
        condition: action.payload.weather[0].main,
        description: action.payload.weather[0].description,
        sunrise: action.payload.sys.sunrise,
        sunset: action.payload.sys.sunset,
      };

      break;

    default:
      break;
  }
};

function App() {
  const [type, setType] = useState("cloudy");
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get(FULL_API_URL).then((response) => {
      dispatch({ type: "ON_LOAD", payload: response.data });
    });
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <div
          className="btn-container"
          onClick={(e) => {
            setType(e.target.name);
          }}
        >
          <button name="cloudy">Cloudy</button>
          <button name="sunny">Sunny</button>
          <button name="snowy">Snowy</button>
          <button name="stormy">Lightning</button>
          <button name="rainy">Rainy</button>
          <button name="partlyCloudy">Partly cloudy</button>
        </div>
        <div className="search-container">
          <form className="search-form">
            <input type="text"></input>
            <button type="submit">Search</button>
          </form>
        </div>
        <WeatherIcon type={type}></WeatherIcon>
        <div className="city-info">
          <h1>{state.cityName}</h1>
          <h1>{state.tempratureC}</h1>
          <h1>{state.condition}</h1>
          <h1>Clear sky</h1>
          <h1>Turkey</h1>
          <h1>1.5</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
