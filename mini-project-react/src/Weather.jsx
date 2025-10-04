import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./Weather.css";
import { useState } from "react";

export default function Weather({ theme }) {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    state: "",
    feelsLike: 0,
    humidity: 0,
    temp: 0,
    tempMax: 0,
    tempMin: 0,
    weather: "",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className={`Weather ${theme}`}>
      <h2
        style={{
          color: "#fff" ,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Weather App by Saurabh
      </h2>
      <SearchBox updateInfo={updateInfo} theme={theme} />
      <InfoBox info={weatherInfo} theme={theme} />
    </div>
  );
}
