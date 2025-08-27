import { createRoot } from 'react-dom/client'

const namelist = ['Luiz', 'Saulo', 'John'];

function MyElement() {
  return (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      {namelist.map(name => 
        <tr>
          <td>{name}</td>
        </tr>
      )}
    </table>
    
  );
}

createRoot(document.getElementById('root')).render(
  <MyElement />
)
