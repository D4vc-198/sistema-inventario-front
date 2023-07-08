import './Styles/App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import Inventario from './Pages/Inventario';
import { Route, Routes } from 'react-router-dom';
import Usuarios from './Pages/Usuarios';
import Proveedores from './Pages/Proveedores';

const App = () => {

  return (
    <div className='container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Routes>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/proveedores" element={<Proveedores />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
