import './App.css';
import Tabla from './Components/Tabla/Tabla';
import Tarjeta from './Components/Tarjetas/Tarjeta';

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
    <>
      <Tabla header={headerCell} data={tableData}/>
      <Tarjeta />
    </>
  )
}

export default App;
