import React from "react";

function Forecast1(props) {
  return (
    <div className="forecast">
      <p>Tomorrow</p>
      <ul>
        <li>
          <img src={props.data.tmrIcon} alt="weather icon"></img>
        </li>
        <li>{props.data.tmrCondition}</li>
        <li>{props.data.tmrTmp}</li>
        <li>Chance to Rain: {props.data.chanceOfRainTmr}</li>
      </ul>
    </div>
  );
}

export default Forecast1;
