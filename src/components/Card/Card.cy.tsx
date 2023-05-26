import Card from './Card'

describe('Card Component', () => {
  beforeEach(() => {
    cy.mount(
      <Card
        icon='https://example.com/icon.png'
        title='Sample Card Title'
        text='Sample Card Text'
      />
    )
  })

  it('should display the card component', () => {
    cy.get('[data-cy="card-component"]').should('be.visible')
  })

  it('should display the card icon', () => {
    cy.get('[data-cy="card-icon"]').should(
      'have.attr',
      'src',
      'https://example.com/icon.png'
    )
  })

  it('should display the card title', () => {
    cy.get('[data-cy="card-title"]').should('have.text', 'Sample Card Title')
  })

  it('should display the card text', () => {
    cy.get('[data-cy="card-text"]').should('have.text', 'Sample Card Text')
  })
})
