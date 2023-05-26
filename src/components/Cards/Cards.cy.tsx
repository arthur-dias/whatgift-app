import { CardsData } from '../../data/cardsData'
import Cards from './Cards'

describe('<Cards />', () => {
  beforeEach(() => {
    cy.mount(<Cards text='Mock text for testing purpose' />)
  })

  it('Should display the cards component', () => {
    cy.get('[data-cy="cards-component"]').should('be.visible')
  })

  it('Should render all cards with the correct data', () => {
    CardsData.forEach((card, index) => {
      cy.get('[data-cy="card-component"]')
        .eq(index)
        .within(() => {
          cy.get('[data-cy="card-icon"]').should('have.attr', 'src', card.icon)
          cy.get('[data-cy="card-title"]').should('have.text', card.title)
          cy.get('[data-cy="card-text"]').should('have.text', card.text)
        })
    })
  })

  it('Should display the cards text', () => {
    cy.get('[data-cy="cards-text"]').should(
      'contain',
      'Mock text for testing purpose'
    )
  })
})
