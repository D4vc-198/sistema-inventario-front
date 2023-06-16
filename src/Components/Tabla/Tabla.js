import React from "react"
import "./../../Styles/Tables.css"

const Tabla = (props) => {
    const { header, data} = props 
    console.log(data)
    return (
        <table>
        <thead>
        <tr className="inventory-table">
           {header.map((header) => <th key={header.name}>{header.name}</th>)}
        </tr>    
        </thead> 
        <tbody>
        {data.map((information) => (
        <tr key={information.Employee}>
            <td className="table-cell">{information.Employee}</td>
            <td className="table-cell">{information.Product}</td>
            <td className="table-cell">{information.SKU}</td>
            <td className="table-cell">{information.ExpiryDate}</td>
            <td className="table-cell">{information.Quantity}</td>
            <td className="table-cell">{information.Price}</td>
        </tr>
        ))}
        </tbody>
        
        </table>
    )
}

export default Tabla