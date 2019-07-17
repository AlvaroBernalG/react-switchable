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
      { id: 4, value: "Caracas" }
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
            <Item disable value="Russia">
              Russia
            </Item>
            <Item value="Nigeria">Nigeria</Item>
            <Item default value="Venezuela">
              {" "}
              Venezuela{" "}
            </Item>
            <Item value="France"> France </Item>
          </Switch>
          <Switch>
            <Item disable active={this.state.activeCity === 0} value="0">
              Russia-0
            </Item>
            <Item active={this.state.activeCity === 1} value="1">
              Nigeria-1
            </Item>
            <Item disable active={this.state.activeCity === 2} value="2">
              Nigeria-2
            </Item>
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
