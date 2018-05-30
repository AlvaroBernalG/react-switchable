import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, State } from '../src/'

console.log('the switch component is ', Switch)

const SnapShot = () => {
  return (
    <Switch>
      <State>
        Works 1
      </State>
      <State>
        Works 2
      </State>
    </Switch>
  )
}

describe('<Switch />', () => {
  /*  let multiSwitch; */

  // beforeEach(() => {
  // multiSwitch = shallow(SnapShot);
  /* }); */

  it('renders without crashing', () => {
    const div = document.createElement('div')

    /*    ReactDOM.render(( */
    // <State>
    // Works 1
    // </State>
    /* ), div); */

    /*    ReactDOM.render(( */
    // <Switch>
    // <State>
    // Works 1
    // </State>
    // <State>
    // Works 2
    // </State>
    // </Switch>
    /* ), div); */

    ReactDOM.unmountComponentAtNode(div)
  })
})
