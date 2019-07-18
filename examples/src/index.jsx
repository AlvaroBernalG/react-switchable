import React from "react";
import ReactDOM from "react-dom";
import Switch, { Item } from "../../src/";
import "./Example.scss";
import "../../dist/main.css";

class App extends React.Component {
  state = {
    selectedCountry: "Nigeria",
    selectedCity: 0,
    cities: [
      { id: 1, value: "London" },
      { id: 2, value: "Paris" },
      { id: 3, value: "Lagos" },
      { id: 4, value: "Caracas", disable: false }
    ]
  };

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     selectedCity:
    //       this.state.selectedCity + 1 >= 3 ? 0 : this.state.selectedCity + 1
    //   });
    // }, 1000);
  }

  render() {
    const { cities, selectedCity, selectedCountry } = this.state;
    return (
      <div className="demo">
        <div className="quiz">
          <h1>Where is the Eiffel tower?</h1>
          <Switch
            arrowSelection={false}
            onValueChange={country =>
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
          <p>
            {`The Eiffel tower is in
            ${cities[selectedCity].value}, ${selectedCountry}.`}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
