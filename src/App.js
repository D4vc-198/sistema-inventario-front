import './Styles/App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import Usuarios from './Pages/Usuarios';

function App() {
  const headerCell = [{name: "Employee"}, {name: "Product"}, {name: "SKU"}, {name: "Expiry Day"}, {name: "Quantity"}, {name: "Price"}]
  const tableData = [
    {
      Employee: "Pedro", 
      Product: "Producto1",
      SKU: "16890002FR",
      ExpiryDay: "MM/DD/YYYY",
      Quantity: "12",
      Price: "$212",
    }, 
    {
      Employee: "Juan", 
      Product: "Producto2",
      SKU: "16890014FR",
      ExpiryDay: "MM/DD/YYYY",
      Quantity: "12",
      Price: "$512",
    }, 
    {
      Employee: "Oscar", 
      Product: "Producto3",
      SKU: "16890012FR",
      ExpiryDay: "MM/DD/YYYY",
      Quantity: "2",
      Price: "$22",
    }, 
    {
      Employee: "Alsonso", 
      Product: "Producto4",
      SKU: "1689888112FR",
      ExpiryDay: "MM/DD/YYYY",
      Quantity: "21",
      Price: "$752",
    }, 
  ]
  return (
    <div className='container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Usuarios />
         <Tabla header={headerCell} data={tableData}/>
      </div>
    </div>
  );
}

export default App;
