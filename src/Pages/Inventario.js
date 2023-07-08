import { BsCalculatorFill, BsFillCalendarEventFill, BsFillClipboard2CheckFill, BsFillStarFill } from "react-icons/bs"
import Tarjeta from "../Components/Tarjetas/Tarjeta"
import Tabla from "../Components/Tabla/Tabla"
import './../Styles/usuarios.css'
import { useEffect } from "react"
import { obtenerProducto } from "../api/inventario"

const Inventario = () => {
    const headerCell = [
        { name: "Employee" },
        { name: "Product" },
        { name: "SKU" },
        { name: "Expiry Day" },
        { name: "Quantity" },
        { name: "Price" }
    ]

    const tableData = [
        {
            id: '1',
            Employee: "Pedro",
            Product: "Producto1",
            SKU: "16890002FR",
            ExpiryDay: "MM/DD/YYYY",
            Quantity: "12",
            Price: "$212",
        },
        {
            id: '2',
            Employee: "Juan",
            Product: "Producto2",
            SKU: "16890014FR",
            ExpiryDay: "MM/DD/YYYY",
            Quantity: "12",
            Price: "$512",
        },
        {
            id: '3',
            Employee: "Oscar",
            Product: "Producto3",
            SKU: "16890012FR",
            ExpiryDay: "MM/DD/YYYY",
            Quantity: "2",
            Price: "$22",
        },
        {
            id: '4',
            Employee: "Alsonso",
            Product: "Producto4",
            SKU: "1689888112FR",
            ExpiryDay: "MM/DD/YYYY",
            Quantity: "21",
            Price: "$752",
        },
    ]

    const getProducts = async () => {
        const getAllProducts = await obtenerProducto()
        console.log('GET', getAllProducts.data.data)
    }

    useEffect(() => {
        getProducts();
      }, [])

    return (
        <>
            <div className="menu-lista-tarjetas">
                <Tarjeta icon={<BsFillCalendarEventFill size="1.3em" />} backgroundColor="verde" color="#91BDB6" cardTitle={"Expiration"} cardDescription={"0,0"} />
                <Tarjeta icon={<BsFillStarFill size="1.3em" />} backgroundColor="amarillo" cardTitle={"Bestseller"} cardDescription={"0,0"} />
                <Tarjeta icon={<BsFillClipboard2CheckFill size="1.3em" />} backgroundColor="azul" cardTitle={"Low inventory"} cardDescription={"0,0"} />
                <Tarjeta icon={<BsCalculatorFill size="1.3em" />} backgroundColor="rojo" cardTitle={"Accounting"} cardDescription={"0,0"} />
            </div>
            <div className="inventario-table-container">
                {/* <Tabla tableName="Inventario"labelButton="Agregar producto" onclick={() => console.log('Agregar Producto')}  headers={headerCell} data={tableData} /> */}
            </div>
        </>
    )
}

export default Inventario