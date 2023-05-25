import React from 'react'
import InvalidUsername from './InvalidUsername.tsx'
import { mount } from '@cypress/react18'

describe('<InvalidUsername />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<InvalidUsername />)
  })
})