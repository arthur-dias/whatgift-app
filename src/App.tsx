import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'

function App() {
  return (
    <>
      <Header title='Qual presente?' />
      <Presentation
        title='Ideias de presentes de uma forma fácil e rápida!'
        text='Encontre o presente perfeito para seu amigx, parente ou colega usando o assistente GPT. Essa ferramenta facilita sua busca utilizando o modelo do GPT com o conteúdo de toda a internet! Você nunca mais irá bater cabeça para encontrar um presente de aniversário!'
      />
      <Form />
    </>
  )
}

export default App
