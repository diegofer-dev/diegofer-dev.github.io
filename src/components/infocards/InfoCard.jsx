import React from 'react'
import "./InfoCard.scss";
const InfoCard = ({ backColor, title, body}) => {
    return (
        <div className="info-card" style={{
            backgroundColor: backColor,
            }}>
            <div className="mb-5 fs-1">{ title}</div>
            <div className="fs-5">{ body }</div>
        </div>
    )
}

export default InfoCard