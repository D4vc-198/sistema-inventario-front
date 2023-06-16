import './Styles/App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import Usuarios from './Pages/Usuarios';

function App() {
  return (
    <div className='container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Usuarios />
      </div>
    </div>
  );
}

export default App;
