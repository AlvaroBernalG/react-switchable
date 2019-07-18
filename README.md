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
import Switch, { Item } from 'react-switchable';
import 'react-switchable/dist/main.css'

<Switch onValueChange={newValue => console.log('The new value is => ', newValue)}>
  <Item value='Hot'>
    Hot
  </Item>
  <Item value='Cold'>
    Cold
  </Item>
</Switch>
```

You can have as many Item children as you can fit:

```jsx
import Switch, { Item } from 'react-switchable';
import 'react-switchable/dist/main.css'

<div>
  <h1>What is the capital of Venezuela ?</h1>
  <Switch
    onValueChange={capital => checkAnswer(capital)}>
    <Item value='London'>
      London
    </Item>
    <Item value='Caracas'>
      Caracas
    </Item>
    <Item value='Lagos'>
      Lagos
    </Item>
    <Item value='Beijing'>
      Beijing
    </Item>
    <Item value='Moscow'>
      Moscow
    </Item>
  </Switch>
</div>
```

## Data flow

By default the switchable component manages which `<Item />` is active internally. You can change that by setting the `active` attribute in any `<Item />` component.

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
          <Item key={index} active={index === activeCountry} value={country.value}>
            {country.value}
          </Item>
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
        <Item value="Russia">Russia</Item>
        <Item default value="Nigeria">
          Nigeria
        </Item>
        <Item value="Venezuela"> Venezuela </Item>
        <Item value="France"> France </Item>
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
`arrowNavigation` | boolean | No | true | Enables the navigation with the arrow keys.
`tabIndex` | number | No | 0 | Sets the [tabIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

Inherits all other properties assigned from the parent component

### State | Item

Prop | Type | Required | Default | Description
-----|------|----------|---------|-------------
`value`| string | Yes |  "" | Represents the Item value.
`active` | boolean | No | false | Sets the Item as active.
`disable` | boolean | No | false | Disables the Item.
`tabIndex` | number | No | 0 | Sets the [tabindex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

Inherits all other properties assigned from the parent component.


## Related

[react-sn-question](https://github.com/AlvaroBernalG/react-sn-question)

## Contributing

All contributions are welcome.

## License

MIT license @[Alvaro Bernal G](https://alvarobg.com).

