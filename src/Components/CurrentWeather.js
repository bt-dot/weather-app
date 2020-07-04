import React from "react";

function CurrentWeather(props) {
  let alert = "";
  if (Object.keys(props.data.alert).length > 0) {
    alert = "Warning: " + props.data.alert.headline;
  }
  return (
    <div className="currentWeather">
      <h2>
        {props.data.city}, {props.data.region}
      </h2>
      <p style={{ marginTop: "2vh", color: "red" }}>{alert} </p>
      <p>Today</p>
      <ul>
        <li>
          <img src={props.data.icon} alt="weather icon"></img>
        </li>
        <li>{props.data.condition}</li>
        <li>{props.data.tmp}</li>
        <li>Feels Like: {props.data.feelTmp}</li>
        <li>Humidity: {props.data.humidity}</li>
      </ul>
    </div>
  );
}

export default CurrentWeather;
