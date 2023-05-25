import React from 'react'
import ResponsiveAppBar from './ResponsiveHeader'
import { mount } from '@cypress/react18'

const stubChange = () => {
  return true;
}
describe('<ResponsiveAppBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<ResponsiveAppBar isDarkTheme={true} changeTheme={stubChange}/>)
  })
})