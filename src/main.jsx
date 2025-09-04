import { createRoot } from 'react-dom/client'
import Botao from './Botao';
import { useState } from 'react';

const itemsList = [
  {id: 1, name: "Banana", price: 30.46},
  {id: 2, name: "Maça", price: 20.54}, 
  {id: 3, name: "Uva", price: 10.5}
];



function TabelaItems() {
  return(
    <table>
      <tr>
        <th>Nome</th>
        <th>Preco</th>
        <th>Ações</th>
      </tr>
      {itemsList.map(item => 
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><Botao nome="Detalhe"/></td>
        </tr>
      )}
    </table>
  );
}

function FormularioNovoItem() {
   const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    <form>
      <label>Nome:
        <input type="text" name="nome" value={inputs.nome} onChange={handleChange}/>
      </label>
      <br />
      <label>Preco:
        <input type="text" name="preco" value={inputs.preco} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  )
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
  <>
  <GridItems/>
  <FormularioNovoItem/>
  </>
)
