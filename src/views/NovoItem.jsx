import { useState, useEffect } from 'react';


function NovoItem() {
  const [postName, setPostName] = useState('');
  const [postPrice, setPostPrice] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(null);
  const [validacao, setValidacao] = useState('');

     
      if (error) return <div>Error: {error.message}</div>;

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
     
          try {
              const response = await fetch('http://127.0.0.1:5000/api/items', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: postName,
                price: postPrice,
                
              }),
            });
            if (response.status > 409) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();

            if (response.status == 409){
              console.log("teste");
              console.log(data.message);
              setValidacao(data.message);
            }
            else {
              setResponseMessage(`Post created with ID: ${data.id}`);
              setPostName(''); // Clear form fields
              setPostPrice('');
            }

          } catch (error) {
            setError(error);
          } 
        };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Nome:
        <input type="text" id="name" 
            value={postName} 
            onChange={(e) => setPostName(e.target.value)}
            required/>
      </label>
      <br />
      <label>Preco:
        <input type="text" id="price" 
            value={postPrice} 
            onChange={(e) => setPostPrice(e.target.value)}
            required />
      </label>
      <br />
      <input type="submit" />
    </form>

    {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
    {validacao && <p style={{ color: 'orange' }}>{validacao}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </>
  )
}

export default NovoItem;