import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function DetalhaItem() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [item, setItem] = useState({});

  const {idItem} = useParams();

  useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:5000/api/items/${idItem}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setItem(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };

        fetchData();
      }, []); // Empty dependency array means it runs once on mount

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
  
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Item</th>
      </tr>
      </thead>
      <tbody>
       
        <tr key="id">
          <td>id:</td>
          <td>{item.id}</td>
        </tr>

        <tr key="name">
          <td>Nome:</td>
          <td>{item.name}</td>
        </tr>

        <tr key="price">
          <td>Preço:</td>
          <td>{item.price}</td>
        </tr>
    
      </tbody>
    </table>
  )
}

export default DetalhaItem;