import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListaItems from './views/ListaItens';
import NovoItem from './views/NovoItem';
import DetalhaItem from './views/DetalhaItem';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Lista Item</Link> |{" "}
        <Link to="/novoItem">Novo Item</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ListaItems/>} />
        <Route path="/novoItem" element={<NovoItem/>} />
        <Route path="/detalhaItem/:idItem" element={<DetalhaItem/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;