import React from "react";
import ReactDOM from "react-dom";
import Switch, { State } from "../../src/";
import "./Example.scss";
import "../../dist/main.css";

class App extends React.Component {
  state = {
    selectedCountry: "Nigeria",
    activeCity: 3,
    cities: [
      { id: 1, value: "London" },
      { id: 2, value: "Paris" },
      { id: 3, value: "Lagos" },
      { id: 4, value: "Caracas" }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeCity: 0
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
            <State value="Russia">Russia</State>
            <State default value="Nigeria">
              Nigeria
            </State>
            <State value="Venezuela"> Venezuela </State>
            <State value="France"> France </State>
          </Switch>
          <Switch
            onSelection={selectedIndex =>
              this.setState({ activeCity: selectedIndex })
            }
          >
            {cities.map((city, index) => (
              <State
                key={city.id}
                active={activeCity === index}
                value={city.value}
              >
                {city.value}
              </State>
            ))}
          </Switch>
          <p>
            {`According to you, the Eiffel tower is located in:
            ${selectedCountry}, ${cities[activeCity].value}.`}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
