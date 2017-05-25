const API_KEY = "50d4cca3f04503d95851ca414e203a0e";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
