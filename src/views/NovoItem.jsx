import { useState } from 'react';

function NovoItem() {
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

export default NovoItem;