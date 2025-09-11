import Botao from './Botao';

const itemsList = [
  {id: 1, name: "Banana", price: 30.46},
  {id: 2, name: "Maça", price: 20.54}, 
  {id: 3, name: "Uva", price: 10.5}
];

function ListaItems() {
  return(
    <table>
      <tr>
        <th>Nome</th>
        <th>Preco</th>
        <th>Ações</th>
      </tr>
      {itemsList.map(item => 
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><Botao nome="Detalhe"/></td>
        </tr>
      )}
    </table>
  );
}
export default ListaItems;