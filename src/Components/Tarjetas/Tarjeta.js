import React from "react"
import "./../../Styles/Tarjetas.css"

const Tarjeta = (props) => {
    const { icon, cardTitle, cardDescription, backgroundColor } = props

    return (
        <div className="card-container">
            <div className={`card-icon-container ${backgroundColor}`}>
                <div className="card-icon-background">
                    {icon}
                </div>
            </div>
            <div className="card-info-container">
                <p><strong>{cardTitle}</strong></p>
                <p>{cardDescription}</p>
            </div>
        </div>
    )
}

export default Tarjeta