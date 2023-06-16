import './App.css';
import Tabla from './Components/Tabla/Tabla';
import Tarjeta from './Components/Tarjetas/Tarjeta';
import { BsFillCalendarEventFill, BsFillStarFill, BsFillClipboard2CheckFill, BsCalculatorFill } from "react-icons/bs";

function App() {
  return (
    <>
      <Tabla />
      <div className="menu-lista-tarjetas">
      <Tarjeta icon={ <BsFillCalendarEventFill size="2em"/>} cardTitle={"Expiration"} cardDescription={"0,0"}/>
      <Tarjeta icon={ <BsFillStarFill size="2em"/>} cardTitle={"Bestseller"} cardDescription={"0,0"}/>
      <Tarjeta icon={ <BsFillClipboard2CheckFill size="2em"/>} cardTitle={"Low inventory"} cardDescription={"0,0"}/>
      <Tarjeta icon={ <BsCalculatorFill size="2em"/>} cardTitle={"Accounting"} cardDescription={"0,0"}/>
      </div>
    </>
  );
}

export default App;
