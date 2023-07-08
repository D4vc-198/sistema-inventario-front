import React from "react"
import "./../../Styles/Tabla.css"

const Tabla = (props) => {
    const { tableName, headers, dataTable, labelButton, onclick } = props

    return (
        <div className="table-container">
            <div className="table-container-title">
                <h2>{tableName}</h2>
                <button classNameonClick={onclick}>{labelButton}</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {headers.map((item) => <th key={item.label}>{item.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {dataTable && dataTable.map((data, index) => (
                        <tr key={index}>
                            {headers.map((headValue) => {
                                if (headValue.value === 'active') {
                                    return (
                                        <td>
                                            <div className={data[headValue.value] === 1 ? "status-user active-user" : "status-user inactive-user"}>
                                            {data[headValue.value] === 1 ? "Activo" : "Inactivo"}
                                        </div>
                                        </td>
                    )
                                }
                    return <td>{data[headValue.value]}</td>
                            })}
                </tr>
                    ))}
            </tbody>
        </table>
        </div >
    )
}

export default Tabla