import React, { useState } from 'react';
import "./NavBar.scss";
import "../../Variables.scss";

const NavBar = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverCenter, setHoverCenter] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  return (
    <div className="navbar-container d-flex flex-row fs-2">
      <div className={`col-lg-4 navbar-items navbar-item-1 ${hoverLeft? "on": "off"}`} 
      onMouseEnter={() => { setHoverLeft(true) }}
      onMouseLeave={() => { setHoverLeft(false) }}>
        EXPERIENCIA LABORAL
      </div>
      <div className={`col-lg-4 navbar-items navbar-item-2 ${hoverCenter? "on": "off"}`}
      onMouseEnter={() => { setHoverCenter(true) }}
      onMouseLeave={() => { setHoverCenter(false) }}>
        PROYECTOS PERSONALES
      </div>
      <div className={`col-lg-4 navbar-items navbar-item-3 ${hoverRight? "on": "off"}`} 
      onMouseEnter={() => { setHoverRight(true) }}
      onMouseLeave={() => { setHoverRight(false) }}>
        CONTACTO
      </div>
    </div>
  )
}

export default NavBar