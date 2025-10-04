import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info, theme }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1633319755208-26bef3342d34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const COLD_URL =
    "https://images.unsplash.com/photo-1613083093144-bfa5c3eb8337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1700131051396-307a36e3ef85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div className={`InfoBox ${theme}`}>
      <div className="cardContainer">
        <Card
          sx={{
            width: "100%",
            backgroundColor: "inherit", // uses CSS background-color
            color: "inherit", // uses CSS text color
            boxShadow: "inherit",
            borderRadius: "12px",
          }}
        >
          <CardMedia
            component="img" // ensures the image behaves like <img>
            sx={{
              width: "100%", // fills the Card width
              height: 200, // fixed height (or any value you want)
              objectFit: "cover", // stretches/crops to fill container without distortion
            }}
            image={
              info.humidity > 80 && info.temp > 15
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}, {info.state} &nbsp;
              {info.humidity > 80 && info.temp > 15 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              className="weather-text"
              // sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Minimum Temperature = {info.tempMin}&deg;C</p>
              <p>Maximum Temperature = {info.tempMax}&deg;C</p>
              <p>Feels Like= {info.feelsLike}&deg;C</p>
              <p>
                Weather is <i>{info.weather}</i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
