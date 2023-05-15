import Presentation from './Presentation'

describe('<Presentation />', () => {
  it('Renders', () => {
    cy.mount(
      <Presentation
        title='Ideias de presentes de uma forma fácil e rápida!'
        text='Encontre o presente perfeito para seu amigx, parente ou colega usando o assistente GPT. Essa ferramenta facilita sua busca utilizando o modelo do GPT com o conteúdo de toda a internet! Você nunca mais irá bater cabeça para encontrar um presente de aniversário!'
      />
    )
  })

  it('Uses custom title and text labels', () => {
    cy.mount(
      <Presentation
        title='Ideias de presentes de uma forma fácil e rápida!'
        text='Encontre o presente perfeito para seu amigx, parente ou colega usando o assistente GPT. Essa ferramenta facilita sua busca utilizando o modelo do GPT com o conteúdo de toda a internet! Você nunca mais irá bater cabeça para encontrar um presente de aniversário!'
      />
    )
    cy.get('div > h1').should(
      'contains.text',
      'Ideias de presentes de uma forma fácil e rápida!'
    )
    cy.get('div > p').should(
      'contains.text',
      'Encontre o presente perfeito para seu amigx, parente ou colega usando o assistente GPT. Essa ferramenta facilita sua busca utilizando o modelo do GPT com o conteúdo de toda a internet! Você nunca mais irá bater cabeça para encontrar um presente de aniversário!'
    )
  })
})
