import './App.css'
import Card from './Card'
import Filho from './Filho'
import FragmentoAninhado from './Fragmento'
import ImagensCondicionais from './ImagensCondicionais'
import Lista from './Lista'
import ListaTarefas from './ListaTarefas'
import ParagrafoCondicional from './ParagrafoCondicional'
import ParagrafoDinamico from './ParagrafoDinamico'
import Tabela from './Tabela'

function App() {
  const listaImagens = ['../img/img1.png', '../img/images (2).png', '../img/Unofficial_JavaScript_logo_2.svg.png']
  const dadosPessoas = [
    {id:1, nome:'Gian', idade:21},
    {id:2, nome:'João', idade: 18},
    {id:3, nome:'Leticia', idade:20}
    ]
    const isVisible = true;
    const nomes = ["Gian", "João", "Leticia"];

 
  return (
    <>
     <FragmentoAninhado />
     <Card >
      <h2>Título do Card</h2>
      <p>Este é o conteúdo do card.</p>
     </Card>
     <ListaTarefas />
     <ParagrafoDinamico isHighlighted={true} />
     <ParagrafoDinamico isHighlighted={false} />
     <ImagensCondicionais urls={listaImagens}/>
     <Tabela dados={dadosPessoas}/>
     <ParagrafoCondicional isVisible={isVisible} />
     <Filho mensagem="Teste" />
     <Lista nomes={nomes}/>

    </>
  )
}

export default App
