/* eslint react/prop-types: 0 */
import React from "react";
import ReactDOM from "react-dom";
import Switch, { Item } from "../../src/";
import "./Example.scss";
import "../../dist/main.css";

function CustomOverlay({ selectedIndex, totalItems }) {
  return (
    <span
      style={{
        position: "absolute",
        width: ` ${100 / totalItems}%`,
        height: "130%",
        background: "black",
        borderRadius: "30px",
        border: "2px solid blue",
        transform: `translateX(${100 * selectedIndex}%)`,
        transition: "all 0.3s cubic-bezier(0.46,-0.21, 0.85, 0.41)"
      }}
    />
  );
}

class App extends React.Component {
  state = {
    selectedCountry: "Nigeria",
    selectedContinent: "Africa",
    selectedCity: 0,
    cities: [
      { id: 1, value: "London" },
      { id: 2, value: "Paris" },
      { id: 3, value: "Lagos" },
      { id: 4, value: "Caracas", disable: false }
    ]
  };

  render() {
    const {
      cities,
      selectedCity,
      selectedCountry,
      selectedContinent
    } = this.state;
    return (
      <div className="demo">
        <div className="quiz">
          <h1>Where is the Eiffel tower?</h1>
          <Switch
            name="countries"
            arrowSelection={false}
            onItemChanged={country =>
              this.setState({ selectedCountry: country })
            }
          >
            <Item value="United Kingdom">United Kingdom</Item>
            <Item disable value="Nigeria">
              Nigeria
            </Item>
            <Item default value="Venezuela">
              Venezuela
            </Item>
            <Item value="France">France</Item>
          </Switch>
          <Switch
            name="cities"
            onItemSelected={index => {
              this.setState({
                ...this.state,
                selectedCity: index
              });
            }}
          >
            {this.state.cities.map((city, i) => (
              <Item
                key={city.value}
                disable={city.disable}
                active={this.state.selectedCity === i}
                value={city.value}
              >
                {city.value}
              </Item>
            ))}
          </Switch>
          <Switch
            customOverlay={CustomOverlay}
            name="continents"
            onItemChanged={continent =>
              this.setState({
                ...this.state,
                selectedContinent: continent
              })
            }
          >
            <Item default value="Africa">
              Africa
            </Item>
            <Item value="America">America</Item>
            <Item value="Europe">Europe</Item>
          </Switch>
          <p>
            {`The Eiffel tower is in
            ${
              cities[selectedCity].value
            }, ${selectedCountry}, ${selectedContinent}.`}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
