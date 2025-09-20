import Botao from '../components/Botao';
import { useState, useEffect } from 'react';

function ListaItems() {

  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/items")
      .then((res) => res.json())
      .then((itemsList) => setItemsList(itemsList));
 }, []);

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