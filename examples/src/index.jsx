import React from "react";
import ReactDOM from "react-dom";
import Switch, { Item } from "../../src/";
import "./Example.scss";
import "../../dist/main.css";

class App extends React.Component {
  state = {
    selectedCountry: "Nigeria",
    activeCity: 0,
    cities: [
      { id: 1, value: "London" },
      { id: 2, value: "Paris" },
      { id: 3, value: "Lagos" },
      { id: 4, value: "Caracas", disable: true }
    ]
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        activeCity:
          this.state.activeCity + 1 >= 3 ? 0 : this.state.activeCity + 1
      });
    }, 1000);
  }

  render() {
    const { cities, activeCity, selectedCountry } = this.state;
    return (
      <div className="demo">
        <div className="quiz">
          <h1>What is the location of the Eiffel tower</h1>
          <Switch
            onValueChange={country =>
              this.setState({ selectedCountry: country })
            }
          >
            <Item disable value="United Kingdom">
              United Kingdom
            </Item>
            <Item value="Nigeria">Nigeria</Item>
            <Item default value="Venezuela">
              Venezuela
            </Item>
            <Item disable value="France">
              France
            </Item>
          </Switch>
          <Switch>
            {this.state.cities.map((city, i) => (
              <Item
                disable={city.disable}
                active={this.state.activeCity === i}
                value={city.value}
              >
                {city.value}
              </Item>
            ))}
          </Switch>
          <p>
            {`The Eiffel tower is located in:
            ${cities[activeCity].value}, ${selectedCountry}.`}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
