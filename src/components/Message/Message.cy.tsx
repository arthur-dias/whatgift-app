import Message from './Message'

describe('<Message />', () => {
  beforeEach(() => {
    cy.mount(<Message text='Hello, World!' />)
  })

  it('Renders the Message component', () => {
    cy.get('[data-cy="message-component"]').should('exist')
  })

  it('Displays the text correctly', () => {
    const text = 'Hello, World!'
    cy.get('[data-cy="message-text"]').should('contain', text)
  })
})
