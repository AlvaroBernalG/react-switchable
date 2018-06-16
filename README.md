# [react](https://reactjs.org)-switchable

[![react-switchable](https://travis-ci.org/AlvaroBernalG/react-switchable.svg?branch=master
)](https://badge.fury.io/js/react-switchable)
[![npm
version](https://badge.fury.io/js/react-switchable.svg)](https://badge.fury.io/js/react-switchable)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AlvaroBernalG/react-switchable/blob/master/LICENSE)


<p align="center">
  <img src="https://lab.alvarobg.com/react-switchable/assets/example.gif"/>
  <br><br>
  <b> A customizable and simple to use React primitive for building switchable components, inspired by <a href="https://github.com/markusenglund/react-switch"> react-switch</a>. </b>
  <br><br>
</p>

---


## Install

```bash
npm install react-switchable --save
```


## Usage

```jsx
import Switch, { State } from 'react-switchable';
import 'react-switchable/dist/main.css'

<Switch onValueChange={newValue => console.log('The new value is => ', newValue)}>
  <State value='Hot'>
    Hot
  </State>
  <State value='Cold'>
    Cold
  </State>
</Switch>
``` 

You can have as many state children as you can fit:

```jsx
import Switch, { State } from 'react-switchable';
import 'react-switchable/dist/main.css'

<div>
  <h1>What is the capital of Venezuela ?</h1>
  <Switch 
    onValueChange={capital => checkAnswer(capital)}>
    <State value='London'>
      London
    </State>
    <State value='Caracas'>
      Caracas
    </State>
    <State value='Lagos'>
      Lagos
    </State>
    <State value='Beijing'>
      Beijing
    </State>
    <State value='Moscow'>
      Moscow
    </State>
  </Switch>
</div>
```

## Data flow

By default the switchable component manages which `<State />` is active internally. You can change that by setting the `active` attribute in any `<State />` component.

Data flow from parent to child :  

```js
class App extends React.Commponent {
  state = {
    activeCountry: 1,
    countries: [
      { value: "Russia" },
      { value: "Nigeria" },
      { value: "Venezuela" },
      { value: "France" }
    ]
  }

  render() {
    return (
      <Switch 
        onSelection={(selectedIndex) => {
          this.setState({
            activeCountry: selectedIndex
          })
        }}
      >
        {countries.map((country, index) => (
          <State key={index} active={index === activeCountry} value={country.value}>
            {country.value}
          </State>
        ))}
      </Switch>
    )
  }
}
```

Data flow from child to parent:

```js
class App extends React.Commponent {
  state = {
    selectedCountry: "Nigeria"
  }

  render() {
    return (
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
    )
  }
}
```

## Accessible

Created with accessibility in mind. The following `gif` was made using MacOS
Sierra `VoiceOver`.

<p align="center">
  <img src="https://lab.alvarobg.com/react-switchable/assets/accessible.gif"/>
  <br><br>
  <br><br>
</p>


## Live demo

[![Try it online](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k9y5zjv585)

## API

### Switch

Prop | Type | Required | Default | Description 
-----|------|----------|---------|-------------
`onValueChange`| function | No |  "" | Fires whenever the switch changes inner state.
`onSelection`| function | No |  "" | Fires whenever a state is selected.
`disable` | boolean | No | false | Disables the switch.
`tabIndex` | number | No | 0 | Sets the [tabIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

Inherits all other properties assigned from the parent component

### State

Prop | Type | Required | Default | Description
-----|------|----------|---------|-------------
`value`| string | Yes |  "" | Represents the State value.
`active` | boolean | No | false | Sets the State as active.
`tabIndex` | number | No | 0 | Sets the [tabindex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

Inherits all other properties assigned from the parent component.


## Related

[react-sn-question](https://github.com/AlvaroBernalG/react-sn-question)

## Contributing

All contributions are welcome.

## License

MIT license @[Alvaro Bernal G](https://alvarobg.com).

