 const insereItem = () => {
    alert('Hello World');
  };

function Botao(props) {
  return(
    <button onClick={insereItem}>{props.nome}</button>
  );

}

export default Botao;
