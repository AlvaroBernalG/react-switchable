import React from 'react'
import renderer from 'react-test-renderer'
import { State } from '../src/'

it('it matches the snapshot', () => {
  const tree = renderer.create(<State> Hola </State>).toJSON()
  expect(tree).toMatchSnapshot()
})
