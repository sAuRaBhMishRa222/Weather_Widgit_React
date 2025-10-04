import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { useState } from "react";
export default function SearchBox({ updateInfo, theme }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const COORDINATE_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_KEY = "b403c3ae3d773c511019fab238c79e6a";
  const MAIN_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${COORDINATE_URL}?q=${city}&appid=${API_KEY}`
      );
      let jsonResponse = await response.json();
      let lati = jsonResponse[0].lat;
      let long = jsonResponse[0].lon;
      let newResponse = await fetch(
        `${MAIN_URL}?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`
      );
      let newJsonResponse = await newResponse.json();
      // console.log(jsonResponse);
      let result = {
        city: jsonResponse[0].name,
        state: jsonResponse[0].state,
        temp: newJsonResponse.main.temp,
        tempMin: newJsonResponse.main.temp_min,
        tempMax: newJsonResponse.main.temp_max,
        humidity: newJsonResponse.main.humidity,
        feelsLike: newJsonResponse.main.feels_like,
        weather: newJsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setError(false);
      setCity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={`SearchBox ${theme}`}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          sx={{
            input: {
              backgroundColor: theme === "dark" ? "#333" : "#ccc", // darker gray for dark, lighter gray for light
              color: "#fff", // white text
              borderRadius: "6px",
            },
            label: {
              color: theme === "dark" ? "#ddd" : "#333", // softer label colors
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme === "dark" ? "#555" : "#999", // subtle border
              },
              "&:hover fieldset": {
                borderColor: theme === "dark" ? "#777" : "#666", // hover effect
              },
              "&.Mui-focused fieldset": {
                borderColor: theme === "dark" ? "#aaa" : "#444",
              },
            },
          }}
        />
        <br />
        <br />
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          type="submit"
          sx={{
            backgroundColor: theme === "dark" ? "#555" : "#666", // medium gray
            color: "#fff", // white text
            "&:hover": {
              backgroundColor: theme === "dark" ? "#444" : "#555", // slightly darker on hover
            },
          }}
        >
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>No such place is present in our API</p>
        )}
      </form>
    </div>
  );
}
