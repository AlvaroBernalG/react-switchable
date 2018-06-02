# react-switchable

[![react-switchable](https://travis-ci.org/AlvaroBernalG/react-switchable.svg?branch=master
)](https://badge.fury.io/js/react-switchable)
[![npm
version](https://badge.fury.io/js/react-switchable.svg)](https://badge.fury.io/js/react-switchable)


<p align="center">
  <img src="https://lab.alvarobg.com/react-switchable/assets/example.gif"/>
  <br><br>
  <b> A customizable and simple to use React switch component, inspired by react-switch. </b>
  <br><br>
</p>

---


## Usage

```jsx

import Switch, { State } from 'react-switchable';
import 'react-switchable/dist/main.css'

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
import 'react-switchable/dist/main.css'

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

## Accessible

Created with accessibility in mind. The following `gif` was made using MacOS
Sierra `VoiceOver`.

<p align="center">
  <img src="https://lab.alvarobg.com/react-switchable/assets/accessible.gif"/>
  <br><br>
  <br><br>
</p>


## API

### Switch

Prop | Type | Required | Default | Description 
-----|------|----------|---------|-------------
`onValueChange`| function | No |  "" | Fires when the switch changes the state.
`disable` | boolean | No | false | Disables the switch. 
`tabIndex` | number | No | 0 | Sets the [tabIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

Inherits all other properties assigned from the top.

### State

Prop | Type | Required | Default | Description
-----|------|----------|---------|-------------
`value`| string | Yes |  "" | Represents the State value.
`default` | boolean | No | false | Sets the State as active in the first render.
`tabIndex` | number | No | 0 | Sets the [tabindex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

Inherits all other properties assigned from the top.


## Contributing

All contributions are welcome.

## License

MIT license @[Alvaro Bernal G](https://alvarobg.com).

