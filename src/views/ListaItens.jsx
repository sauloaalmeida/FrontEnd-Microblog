import Botao from '../components/Botao';

const itemsList = [
  {id: 1, name: "Banana", price: 30.46},
  {id: 2, name: "Maça", price: 20.54}, 
  {id: 3, name: "Uva", price: 10.5}
];

function ListaItems() {
  return(
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preco</th>
          <th>Ações</th>
      </tr>
      </thead>
      <tbody>
      {itemsList.map(item => 
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><Botao nome="Detalhe"/></td>
        </tr>
        )}
      </tbody>
    </table>
  );
}
export default ListaItems;