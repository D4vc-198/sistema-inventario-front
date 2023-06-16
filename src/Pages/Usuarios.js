import { BsCalculatorFill, BsFillCalendarEventFill, BsFillClipboard2CheckFill, BsFillStarFill } from "react-icons/bs"
import Tarjeta from "../Components/Tarjetas/Tarjeta"

const Usuarios = () => {
    return (
        <div className="menu-lista-tarjetas">
            <Tarjeta icon={<BsFillCalendarEventFill size="2em" />} cardTitle={"Expiration"} cardDescription={"0,0"} />
            <Tarjeta icon={<BsFillStarFill size="2em" />} cardTitle={"Bestseller"} cardDescription={"0,0"} />
            <Tarjeta icon={<BsFillClipboard2CheckFill size="2em" />} cardTitle={"Low inventory"} cardDescription={"0,0"} />
            <Tarjeta icon={<BsCalculatorFill size="2em" />} cardTitle={"Accounting"} cardDescription={"0,0"} />
        </div>
    )
}

export default Usuarios