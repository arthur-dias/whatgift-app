import Footer from './Footer'

describe('Footer Component', () => {
  beforeEach(() => {
    cy.mount(<Footer text='Feito por Arthur' />)
  })

  it('Should display the footer component', () => {
    cy.get('[data-cy="footer-component"]').should('be.visible')
  })

  it('should display the footer text', () => {
    cy.get('[data-cy="footer-text"]').should('contain', 'Feito por Arthur')
  })

  it('should have a link to the GitHub profile', () => {
    cy.get('[data-cy="footer-icon"]').should('exist')
    cy.get('[data-cy="footer-link"]').should(
      'have.attr',
      'href',
      'https://github.com/arthur-dias'
    )
  })

  it('should display the current year', () => {
    const currentYear = new Date().getFullYear()
    cy.get('[data-cy="footer-year"]').should('contain', currentYear)
  })
})
