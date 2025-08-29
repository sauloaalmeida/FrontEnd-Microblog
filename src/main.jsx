import { createRoot } from 'react-dom/client'
import Botao from './Botao';

let item1 = {id: 1, name: "Banana", price: 30.46};
let item2 = {id: 2, name: "Maça", price: 20.54};
let item3 = {id: 3, name: "Uva", price: 10.5};

const itemsList = [item1, item2, item3];



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
