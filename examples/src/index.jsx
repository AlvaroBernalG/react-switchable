import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Switch, { State } from '../../src/'
import './Example.scss'

class App extends Component {
  state = {
    props: 1
  }

  render () {
    return (
      <div className='demo'>
        <div className='quiz'>
          <Switch onChange={console.log}>
            <State value='state 0'>
              State 0
            </State>
            <State default value='value 1'>
              State 1
            </State>
            <State value='State 2'>
              State 2
            </State>
            <State value='State 3'>
              State 3
            </State>
          </Switch>
          <Switch>
            <State value='State 1'>
              State 1
            </State>
            <State value='State 2'>
              State 2
            </State>
            <State default value='State 3'>
              State 3
            </State>
            <State value='State 3'>
              State 4
            </State>
          </Switch>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
