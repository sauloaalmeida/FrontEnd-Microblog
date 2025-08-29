import { createRoot } from 'react-dom/client'
import Botao from './Botao';

const itemsList = [
  {id: 1, name: "Banana", price: 30.46},
  {id: 2, name: "Maça", price: 20.54}, 
  {id: 3, name: "Uva", price: 10.5}
];



function TabelaItems() {
  return(
    <table>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Preco</th>
      </tr>
      {itemsList.map(item => 
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      )}
    </table>
  );
}

function GridItems() {
  return (
    <>
    <Botao nome="Inserir novo Item"/>
    <TabelaItems/>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <GridItems/>
)
