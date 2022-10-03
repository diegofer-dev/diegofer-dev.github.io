import React from 'react'
import "./InfoCard.scss";
const InfoCard = ({ backColor, title, body}) => {
    return (
        <div className="info-card" style={{
            backgroundColor: backColor,
            }}>
            <div className="info-card-title mb-5">{ title}</div>
            <div className="info-card-body">{ body }</div>
        </div>
    )
}

export default InfoCard