import Header from './Header'

describe('<Header />', () => {
  it('Renders', () => {
    cy.mount(<Header title='Qual presente?' />)
  })

  it('Uses custom text for the title label', () => {
    cy.mount(<Header title='Qual presente?' />)
    cy.get('header').should('contains.text', 'Qual presente?')
  })
})
