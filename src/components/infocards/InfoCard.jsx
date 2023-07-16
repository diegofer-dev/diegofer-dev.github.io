import React, { useState } from 'react'
import { Trans } from 'react-i18next';
import "./InfoCard.scss";
const InfoCard = ({ backColor, titleKey, technologies }) => {
    const [selected, setSelected] = useState(0);
    const [keyText, setKeyText] = useState(technologies[0].bodyKey);
    return (
        <div className="info-card" style={{
            backgroundColor: backColor,
        }}>
            <div className="mb-5 fs-1"><Trans i18nKey={titleKey} /></div>
            <div className="d-flex justify-content-around">{technologies.map((elem, idx) =>
                <div key={`info-${idx}`} 
                    className={`logo ${idx === selected ? 'selected' : ''}`}
                    onClick={() => { setSelected(idx); setKeyText(elem.bodyKey) }}>
                    <img src={elem.logo} width={80}></img>
                </div>)}
            </div>
            <div className="mt-5 fs-5"><Trans i18nKey={keyText} /></div>
        </div>
    )
}

export default InfoCard