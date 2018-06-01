# react-switchable

[![react-switchable](https://travis-ci.org/AlvaroBernalG/react-switchable.svg?branch=master
)](https://badge.fury.io/js/react-switchable)
[![npm
version](https://badge.fury.io/js/react-switchable.svg)](https://badge.fury.io/js/react-switchable)


<p align="center">
  <img src="https://lab.alvarobg.com/react-switchable/assets/example.gif"/>
  <br><br>
  <b> React switchable component, inspired by react-switch. </b>
  <br><br>
</p>

---


## Usage

```jsx

import Switch, { State } from 'react-switchable';

<Switch onValueChange={newValue => console.log('The new value is => ', newValue)}>
  <State value='Hot'>
    Hot
  </State>
  <State default value='Cold'>
    Cold
  </State>
</Switch>
``` 

You can have as many state children as you can fit:

```jsx

import Switch, { State } from 'react-switchable';

<div>
  <h1> What is the capital of Venezuela ? </h1>
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
    <State default value='Moscow'>
      Moscow
    </State>
  </Switch>
</div>
``` 


## API

### Switch

Prop | Type | Required | Default | Description 
-----|------|----------|---------|-------------
`onValueChange`| function | No |  "" | Fires when the switch changes the state.
`disable` | boolean | No | false | Disables the switch. 
`tabIndex` | number | No | 0 | Sets the [tabIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

### State

Prop | Type | Required | Default | Description
-----|------|----------|---------|-------------
`value`| string | Yes |  "" | Represents the State value.
`default` | boolean | No | false | Sets the State as active in the first render.
`tabIndex` | number | No | 0 | Sets the [tabindex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).


## Contributing

All contributions are welcome.

## License

MIT license @[Alvaro Bernal G](https://alvarobg.com).

