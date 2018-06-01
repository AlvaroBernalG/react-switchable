# react-switchable

[![react-switchable](https://travis-ci.org/AlvaroBernalG/react-switchable.svg?branch=master
)](https://badge.fury.io/js/react-switchable)
[![npm
version](https://badge.fury.io/js/react-switchable.svg)](https://badge.fury.io/js/react-switchable)



---

react switchable component, inspired by react-switch.


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

You can have as many state as you would like:

```jsx

import Switch, { State } from 'react-switchable';

<div>
  <h1> What is the capital of Venezuela ? </h1>
  <Switch 
    onValueChange={capital => checkCorrectAnswer(capital)}>
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
`onValueChange`| function | No |  "" | Fires when the switch state changes.
`disable` | boolean | No | false | Disables the switch. 
`tabIndex` | number | No | 0 | Sets the [tabIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).

### State

Prop | Type | Required | Default | Description 
-----|------|----------|---------|-------------
`value`| string | Yes |  "" | Fires when the switch state changes.
`default` | boolean | No | false | Sets the state as active. 
`tabIndex` | number | No | 0 | Sets the [tabindex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex).



## Contributing

All contributions are welcome.

## License

MIT license @[Alvaro Bernal G](https://alvarobg.com).

