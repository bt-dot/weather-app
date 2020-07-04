import React from "react";

function InputComponent(props) {
  return (
    <div className="input">
      <form onSubmit={props.findCity}>
        <input
          type="text"
          name="city"
          placeholder="City/Zip Code"
          value={props.data.city}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="region"
          placeholder="State/Region"
          value={props.data.region}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={props.data.country}
          onChange={props.handleChange}
        />
        <div id="container">
          <label>Unit:</label>
          <select
            name="unit"
            value={props.data.unit}
            onChange={props.handleChange}
          >
            <option value="c">Celcius</option>
            <option value="f">Fahrenheit</option>
          </select>
        </div>

        <button>Get Weather</button>
      </form>
    </div>
  );
}

export default InputComponent;
