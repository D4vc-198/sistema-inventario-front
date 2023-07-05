import './Styles/App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import Inventario from './Pages/Inventario';
// import Table from './Components/Tabla/Tabla'

function App() {

  return (
    <div className='container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Inventario />
      </div>
    </div>
  );
}

export default App;
