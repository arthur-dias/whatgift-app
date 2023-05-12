import Header from './Header'

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(<Header title='Qual presente?' />)
  })
})
