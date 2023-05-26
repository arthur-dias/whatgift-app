import Form from './Form'

describe('<Form />', () => {
  it('Displays the form correctly', () => {
    cy.mount(<Form />)

    cy.get('#people-select').should('exist')
    cy.get('#age-select').should('exist')
    cy.get('#hobbies-select').should('exist')
    cy.get('[data-cy="submit-btn"]').should('not.exist')
  })

  it('Displays an error message if form submission fails', () => {
    cy.mount(<Form />)

    cy.intercept('POST', 'https://api-whatgift.onrender.com/ask', {
      statusCode: 500,
    }).as('submitForm')

    cy.get('#people-select').select('Filho')
    cy.get('#age-select').select('25')
    cy.get('#hobbies-select').select('Pescar')
    cy.get('[data-cy="submit-btn"]').click()

    cy.wait('@submitForm')

    cy.get('p').should('contain', 'Algo de errado ocorreu, tente novamente')
  })

  it('Resets the form fields after successful submission', () => {
    cy.mount(<Form />)

    const mockResponse = {
      choices: [
        {
          message: {
            content: 'Gift suggestion',
          },
        },
      ],
    }

    cy.intercept(
      'POST',
      'https://api-whatgift.onrender.com/ask',
      mockResponse
    ).as('submitForm')
    cy.get('#people-select').select('Filho')
    cy.get('#age-select').select('25')
    cy.get('#hobbies-select').select('Pescar')
    cy.get('[data-cy="submit-btn"]').click()

    cy.wait('@submitForm')

    cy.get('#people-select').should('have.value', '')
    cy.get('#age-select').should('have.value', '')
    cy.get('#hobbies-select').should('have.value', '')
  })

  it('Displays loading state during form submission', () => {
    cy.mount(<Form />)

    cy.intercept('POST', 'https://api-whatgift.onrender.com/ask', {
      statusCode: 200,
      body: {
        choices: [
          {
            message: {
              content: 'Gift suggestion',
            },
          },
        ],
      },
      delay: 8000,
    }).as('submitForm')

    cy.get('#people-select').select('Filho')
    cy.get('#age-select').select('25')
    cy.get('#hobbies-select').select('Pescar')
    cy.get('[data-cy="submit-btn"]').click()

    cy.get('[data-cy="loader-component"]').should('exist')

    cy.wait('@submitForm')

    cy.get('[data-cy="submit-btn"]').should('not.exist')
    cy.get('[data-cy="message-component"]').should('contain', 'Gift suggestion')
  })

  it('Submits the form successfully and displays the result', () => {
    cy.mount(<Form />)

    const mockResponse = {
      choices: [
        {
          message: {
            content: 'Gift suggestion',
          },
        },
      ],
    }

    cy.intercept('POST', 'https://api-whatgift.onrender.com/ask', (req) => {
      expect(req.body).to.deep.equal({
        message:
          'Me dê cinco ideias de presente para meu/minha filho que tem 25 anos e tem como hobbies pescar',
      })

      req.reply(mockResponse)
    }).as('submitForm')

    cy.get('#people-select').select('Filho')
    cy.get('#age-select').select('25')
    cy.get('#hobbies-select').select('Pescar')
    cy.get('[data-cy="submit-btn"]').click()

    cy.wait('@submitForm')

    cy.get('[data-cy="message-component"]').should('contain', 'Gift suggestion')
    cy.get('#people-select').should('have.value', '')
    cy.get('#age-select').should('have.value', '')
    cy.get('#hobbies-select').should('have.value', '')
  })

  it('Dont show submit button when not all options are selected', () => {
    cy.mount(<Form />)

    cy.get('[data-cy="submit-btn"]').should('not.exist')

    cy.get('#people-select').select('Filho')
    cy.get('[data-cy="submit-btn"]').should('not.exist')

    cy.get('#age-select').select('25')
    cy.get('[data-cy="submit-btn"]').should('not.exist')

    cy.get('#hobbies-select').select('Pescar')
    cy.get('[data-cy="submit-btn"]').should('exist')
  })

  it('Displays the selected options in the request body', () => {
    cy.mount(<Form />)

    cy.intercept('POST', 'https://api-whatgift.onrender.com/ask', (req) => {
      expect(req.body).to.deep.equal({
        message:
          'Me dê cinco ideias de presente para meu/minha filho que tem 25 anos e tem como hobbies pescar',
      })

      req.reply({})
    }).as('submitForm')

    cy.get('#people-select').select('Filho')
    cy.get('#age-select').select('25')
    cy.get('#hobbies-select').select('Pescar')
    cy.get('[data-cy="submit-btn"]').click()

    cy.wait('@submitForm')
  })

  it('Displays the result message after form submission', () => {
    cy.mount(<Form />)

    const mockResponse = {
      choices: [
        {
          message: {
            content: 'Gift suggestion',
          },
        },
      ],
    }

    cy.intercept(
      'POST',
      'https://api-whatgift.onrender.com/ask',
      mockResponse
    ).as('submitForm')

    cy.get('#people-select').select('Filho')
    cy.get('#age-select').select('25')
    cy.get('#hobbies-select').select('Pescar')
    cy.get('[data-cy="submit-btn"]').click()

    cy.wait('@submitForm')

    cy.get('[data-cy="message-component"]').should('contain', 'Gift suggestion')
  })
})
