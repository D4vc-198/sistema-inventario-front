import { BsCalculatorFill, BsFillCalendarEventFill, BsFillClipboard2CheckFill, BsFillStarFill } from "react-icons/bs"
import Tarjeta from "../Components/Tarjetas/Tarjeta"
import Tabla from "../Components/Tabla/Tabla"
import './../Styles/usuarios.css'
import { useEffect, useState } from "react"
import { obtenerProducto } from "../api/inventario"

const Inventario = () => {
    const [listaProductos, setListaProductos] = useState({})
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

    const getProducts = async () => {
    }

    useEffect(() => {
        async function getProducts() {
          // You can await here
          const getAllProducts = await obtenerProducto()
          console.log('GET', getAllProducts.data.data)
          // ...
        }
        getProducts();
      }, []); // Or [] if effect doesn't need props or state

    // useEffect(async () => {
    //     const getProducts = await obtenerProducto()
    //     console.log(getProducts)
    // }, [])

    return (
        <>
            <div className="usuarios-menu-lista-tarjetas">
                <Tarjeta icon={<BsFillCalendarEventFill size="1.3em" />} backgroundColor="verde" color="#91BDB6" cardTitle={"Expiration"} cardDescription={"0,0"} />
                <Tarjeta icon={<BsFillStarFill size="1.3em" />} backgroundColor="amarillo" cardTitle={"Bestseller"} cardDescription={"0,0"} />
                <Tarjeta icon={<BsFillClipboard2CheckFill size="1.3em" />} backgroundColor="azul" cardTitle={"Low inventory"} cardDescription={"0,0"} />
                <Tarjeta icon={<BsCalculatorFill size="1.3em" />} backgroundColor="rojo" cardTitle={"Accounting"} cardDescription={"0,0"} />
            </div>
            <div className="usuarios-table-container">
                <Tabla header={headerCell} data={tableData} />
            </div>
        </>
    )
}

export default Inventario