import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'

function App() {
  return (
    <>
      <Header title='Qual presente?' />
      <Presentation
        title='
        Encontre ideias de presentes únicos usando o poder do GPT.'
        text='Encontre o presente perfeito para seu amigo, família ou colega usando o assistente GPT. Essa ferramenta permite que você pesquise facilmente por presentes utilizando o modelo GPT, que é enriquecido com conteúdo de toda a internet! Você nunca mais precisará se estressar para encontrar um presente de aniversário!'
      />
      <Form />
    </>
  )
}

export default App
