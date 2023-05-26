import InvalidUsername from './InvalidUsername.tsx'
import { mount } from '@cypress/react18'
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('<InvalidUsername />', () => {
  before(() => {
    mount(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='*' element={<InvalidUsername />} />
          </Routes>
        </MemoryRouter>
    )
  })

  it('renders', () => {
    cy.get('[data-testid="EmptyStateInvalidUsername"]').should('be.visible')
  })
})