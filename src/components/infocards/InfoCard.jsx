import React, { useState } from 'react'
import { Trans } from 'react-i18next';
import "./InfoCard.scss";
const InfoCard = ({ backColor, titleKey, technologies }) => {
    const [selected, setSelected] = useState(-1);
    const [onLogo, setOnLogo] = useState(false);
    const [keyText, setKeyText] = useState("");
    return (
        <div className="info-card" style={{
            backgroundColor: backColor,
        }} onClick={() => { if (!onLogo) { setSelected(-1); setKeyText("") } }}>
            <div className="mb-5 fs-1"><Trans i18nKey={titleKey} /></div>
            <div className="d-flex justify-content-around">{technologies.map((elem, idx) =>
                <div className={`logo ${idx === selected ? 'selected' : ''}`}
                    onClick={() => { setSelected(idx); setKeyText(elem.bodyKey) }}
                    onMouseEnter={() => setOnLogo(true)}
                    onMouseLeave={() => setOnLogo(false)}>
                    <img src={elem.logo} width={80}></img>
                </div>)}
            </div>
            <div className="mt-5 fs-5"><Trans i18nKey={keyText} /></div>
        </div>
    )
}

export default InfoCard