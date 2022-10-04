import React from 'react';
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar-container d-flex flex-row fs-2">
        <div className="col-lg-4 navbar-items">EXPERIENCIA LABORAL</div>
        <div className="col-lg-4 navbar-items">PROYECTOS PERSONALES</div>
        <div className="col-lg-4 navbar-items">CONTACTO</div>
    </div>
  )
}

export default NavBar