// import { BsCalculatorFill, BsFillCalendarEventFill, BsFillClipboard2CheckFill, BsFillStarFill } from "react-icons/bs"
import { FaUserAlt, FaUserCheck, FaUserSlash } from "react-icons/fa"

import Tarjeta from "../Components/Tarjetas/Tarjeta"
import Tabla from "../Components/Tabla/Tabla"
import './../Styles/App.css'
import { useEffect, useState } from "react"
import { obtenerUsuarios } from "../api/usuarios"

const Usuarios = () => {
    const [dataUsuarios, setDataUsuarios] = useState({})
    const headerCell = [
        { label: "Nombre", value: 'firstName' },
        { label: "Apellido", value: 'lastName' },
        { label: "Teléfono", value: 'phone' },
        { label: "Correo electrónico", value: 'email' },
        { label: "Estado", value: 'active' },
        { label: "Rol", value: 'role' },
    ]

    const getAllUsers = async () => {
        const getUsers = await obtenerUsuarios()
        setDataUsuarios(getUsers.data)
        // console.log(getUsers.data)
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    console.log(dataUsuarios.data)
    return (
        <>
            <div className="menu-lista-tarjetas">
                <Tarjeta icon={<FaUserAlt size="1.3em" />} backgroundColor="verde" color="#91BDB6" cardTitle={"Total de Usuarios"} cardDescription={"0,0"} />
                <Tarjeta icon={<FaUserCheck size="1.3em" />} backgroundColor="amarillo" cardTitle={"Usuarios activos"} cardDescription={"0,0"} />
                <Tarjeta icon={<FaUserSlash size="1.3em" />} backgroundColor="azul" cardTitle={"Usuarios inactivos"} cardDescription={"0,0"} />
                <Tarjeta icon={<FaUserAlt size="1.3em" />} backgroundColor="rojo" cardTitle={"Accounting"} cardDescription={"0,0"} />
            </div>
            <div className="usuarios-table-container">
                <Tabla
                    tableName="Usuarios"
                    headers={headerCell}
                    dataTable={dataUsuarios.data}
                    labelButton="Agregar usuario"
                    onclick={() => console.log('Agregar usuario')}
                    />
            </div>
        </>
    )
}

export default Usuarios