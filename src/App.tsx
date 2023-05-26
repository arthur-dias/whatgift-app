import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
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
      <Cards />
      <Footer text='Então, da próxima vez que você estiver com dificuldades para encontrar o presente perfeito, recorra a essa ferramenta para obter recomendações personalizadas de presentes que sejam adequadas aos interesses e preferências do destinatário. Nossas recomendações de presentes, impulsionadas pela inteligência artificial ajudarão você a encontrar um presente que certamente causará uma impressão duradoura e criar uma experiência memorável para seu ente querido.' />
    </>
  )
}

export default App
