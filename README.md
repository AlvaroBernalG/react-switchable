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

<Switch>
  <State value='works'>
    Works
  </State>
  <State value='works 2'>
    Works 2
  </State>
</Switch>
``` 

## API

### Switch

Prop | Type | Required | Default | Description 
-----|------|----------|---------|-------------
`onChange`| function | No |  "" | Fires when the switch state changes.
`disable` | boolean | No | false | Disables the switch. 
`tabIndex` | number | No | 0 | Sets the tabIndex of the switch component.

### State

Prop | Type | Required | Default | Description 
-----|------|----------|---------|-------------
`value`| string | Yes |  "" | Fires when the switch state changes.
`default` | boolean | No | false | Sets the state as active. 


## Contribuiting

All contributions are welcome.

## License

MIT license @[Alvaro Bernal G](https://alvarobg.com).

