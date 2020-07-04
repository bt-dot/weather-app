import React, { Component } from "react";
import InputComponent from "./InputComponent";
import CurrentWeather from "./CurrentWeather";
import Forecast1 from "./Forecast1";
import Footer from "./Footer";
import "../style.css";

const APIKEY = "2289e6ee53cf4ebd82530427200207";
const DATE = new Date();

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      region: "",
      country: "",
      unit: "",
      alert: "",
      tmp: "",
      feelTmp: "",
      condition: "",
      humidity: "",
      icon: "",
      tmrCondition: "",
      tmrTmp: "",
      chanceOfRainTmr: "",
      tmrIcon: "",
    };
    this.findCity = this.findCity.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  findCity(event) {
    //fetch weather info and set state
    event.preventDefault();
    const link = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${this.state.city} ${this.state.region} ${this.state.country}&days=2`;
    fetch(link)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const iconLink = "http:" + response.current.condition.icon;
        const tmrIconLink =
          "http:" + response.forecast.forecastday[1].day.condition.icon;
        this.setState({
          city: response.location.name,
          region: response.location.region,
          country: response.location.country,
          tmp:
            this.state.unit === "f"
              ? response.current.temp_f + " °F"
              : response.current.temp_c + " °C",
          feelTmp:
            this.state.unit === "f"
              ? response.current.feelslike_f + " °F"
              : response.current.feelslike_c + " °C",
          condition: response.current.condition.text,
          humidity: response.current.humidity + "%",
          icon: iconLink,
          alert: response.alert,

          tmrCondition: response.forecast.forecastday[1].day.condition.text,
          chanceOfRainTmr:
            response.forecast.forecastday[1].day.daily_chance_of_rain + "%",
          tmrTmp:
            this.state.unit === "f"
              ? response.forecast.forecastday[1].day.mintemp_f +
                "°F to " +
                response.forecast.forecastday[1].day.maxtemp_f +
                "°F"
              : response.forecast.forecastday[1].day.mintemp_c +
                "°C to " +
                response.forecast.forecastday[1].day.maxtemp_c +
                "°C",
          tmrIcon: tmrIconLink,
        });
        //show the actual weather info only when valid info is fetched
        const current = document.querySelector(".currentWeather");
        const forecast = document.querySelector(".forecast");
        current.style.visibility = "visible";
        current.style.opacity = "1";
        forecast.style.visibility = "visible";
        forecast.style.opacity = "1";
      })
      .catch((err) => {
        alert("invalid input");
        console.log(err);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    let background = {};
    let greet = "";
    if (DATE.getHours() > 6 && DATE.getHours() <= 12) {
      background = {
        backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      };
      greet = "Good Morning!";
    } else if (DATE.getHours() > 12 && DATE.getHours() <= 18) {
      background = {
        backgroundImage: "linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)",
      };
      greet = "Good Afternoon!";
    } else {
      background = {
        backgroundImage: "linear-gradient(to top, #005aa7, #fffde4)",
      };
      greet = "Good Evening!";
    }

    return (
      <div>
        <main style={background}>
          <p>{greet}</p>
          <InputComponent
            handleChange={this.handleChange}
            findCity={this.findCity}
            data={this.state}
          />
          <CurrentWeather data={this.state} />
          <Forecast1 data={this.state} />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
