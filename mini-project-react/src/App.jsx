import Weather from './Weather'
import { useState } from 'react';
import './App.css';
import IconButton from "@mui/material/IconButton";
import WbSunnyIcon from "@mui/icons-material/WbSunny";  // sun
import NightlightRoundIcon from "@mui/icons-material/NightlightRound"; // moon

function App() {
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "app-light" : "app-dark"}>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "light" ? (
            <NightlightRoundIcon fontSize="large" />
          ) : (
            <WbSunnyIcon fontSize="large" />
          )}
        </IconButton>
      </div>
      <Weather theme={theme} />
    </div>
  )
}

export default App;
