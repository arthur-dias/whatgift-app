import Header from './Header'

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(<Header title='Mock title' />)
  })

  it('Renders', () => {
    cy.mount(<Header title='Mock title' />)
  })

  it('Uses custom text for the title label', () => {
    cy.mount(<Header title='Mock title' />)
    cy.get('header').should('contains.text', 'Mock title')
  })
})
