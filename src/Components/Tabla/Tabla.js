import React from "react"
import "./../../Styles/Tabla.css"

const Tabla = (props) => {
    const { header, data } = props
    console.log(data)
    return (
        <div className="table-container">
            <h2>Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        {header.map((header) => <th key={header.name}>{header.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((information) => (
                        <tr key={information.Employee}>
                            <td>{information.Employee}</td>
                            <td>{information.Product}</td>
                            <td>{information.SKU}</td>
                            <td>{information.ExpiryDay}</td>
                            <td>{information.Quantity}</td>
                            <td>{information.Price}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Tabla