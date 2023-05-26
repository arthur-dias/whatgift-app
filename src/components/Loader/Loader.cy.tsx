import Loader from './Loader'

describe('<Loader />', () => {
  beforeEach(() => {
    cy.mount(<Loader />)
  })

  it('Should display the loader component', () => {
    cy.get('[data-cy="loader-component"]').should('be.visible')
  })

  it('Should display the loading text', () => {
    cy.get('[data-cy="loader-component"]')
      .find('[data-cy="loader-text"]')
      .should('have.text', 'Carregando sugestões')
  })

  it('should display the loading animation', () => {
    cy.get('[data-cy="loader-component"]')
      .find('[data-cy="loader-animation"]')
      .should('exist')
  })
})
