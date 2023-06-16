import React from "react"
import "./../../Styles/Tarjetas.css"

const Tarjeta = (props) => {
    const {icon, cardTitle, cardDescription } = props

    return (
        <div className="card-container">
            <div className="card-icon-container">
                <p>{icon}</p>
            </div>
            <div className="card-info-container">
                <p>{cardTitle}</p>
                <p>{cardDescription}</p>
            </div>
        </div>
    )
}

export default Tarjeta