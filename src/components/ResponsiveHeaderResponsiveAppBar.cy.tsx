import ResponsiveAppBar from './ResponsiveHeader'
import { mount } from '@cypress/react18'
import {MemoryRouter, Route, Routes} from "react-router-dom";

const stubChange = () => {
  return true;
}
describe('<ResponsiveAppBar />', () => {
  before(() => {
    mount(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path={'/'} element={<ResponsiveAppBar isDarkTheme={true} changeTheme={stubChange}/>} />
          </Routes>
        </MemoryRouter>
    )
  })

  it('renders and displays elements', () => {
    // logo image should be visible
    cy.get('[data-testid="header-logo"]').should('be.visible')
    // header text should be visible and match
    cy.get('[data-testid="header-h6-text"]').contains('Repository Search')
    // theme toggle should be visible
    cy.get('[data-testid="heading-theme-toggle"]').should('be.visible')
  })
})