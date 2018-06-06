import React from "react";
import ReactDOM from "react-dom";
import Switch, { State } from "../../dist/";
import "./Example.scss";
import "../../dist/main.css";

class App extends React.Component {
  state = {
    country: "France",
    city: "Caracas"
  };

  render() {
    return (
      <div className="demo">
        <div className="quiz">
          <h1> What is the location of the Eiffel tower</h1>
          <Switch onValueChange={country => this.setState({ country })}>
            <State value="Uk">UK</State>
            <State value="Venezuela">Venezuela</State>
            <State value="Nigeria">Nigeria</State>
            <State active value="France">
              France
            </State>
          </Switch>
          <Switch onValueChange={city => this.setState({ city })}>
            <State value="London">London</State>
            <State value="Paris">Paris</State>
            <State value="Lagos">Lagos</State>
            <State active value="Caracas">
              Caracas
            </State>
          </Switch>
          <p>
            {`According to you, the Eiffel tower is located in:
            ${this.state.country}, ${this.state.city}.`}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
