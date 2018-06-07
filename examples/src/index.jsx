import React from "react";
import ReactDOM from "react-dom";
import Switch, { State } from "../../src/";
import "./Example.scss";
import "../../dist/main.css";

class App extends React.Component {
  state = {
    activeCountry: 1,
    countries: [
      { value: "Russia" },
      { value: "Nigeria" },
      { value: "Venezuela" },
      { value: "France" }
    ],
    activeCity: 3,
    cities: [
      { value: "London" },
      { value: "Paris" },
      { value: "Lagos" },
      { value: "Caracas" }
    ]
  };

  render() {
    const { countries, cities, activeCity, activeCountry } = this.state;
    return (
      <div className="demo">
        <div className="quiz">
          <h1> What is the location of the Eiffel tower</h1>
          <Switch
            onValueChange={(_, newPosition) =>
              this.setState({
                activeCountry: newPosition
              })
            }
          >
            {countries.map((country, index) => (
              <State active={activeCountry === index} value={country.value}>
                {country.value}
              </State>
            ))}
          </Switch>
          <Switch
            onValueChange={(_, newPosition) =>
              this.setState({ activeCity: newPosition })
            }
          >
            {cities.map((city, index) => (
              <State active={activeCity === index} value={city.value}>
                {city.value}
              </State>
            ))}
          </Switch>
          <p>
            {`According to you, the Eiffel tower is located in:
            ${countries[activeCountry].value}, ${cities[activeCity].value}.`}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
