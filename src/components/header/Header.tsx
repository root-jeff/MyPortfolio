import React, { useState } from "react";
import "./header.css";

export const Header = () => {
  /* ---------- Arreglo de Nav Options ----------*/

  const nav = [
    {
      active: true,
      ref: "#home",
      iconClass: "estate",
      name: "Inicio",
    },
    {
      active: false,
      ref: "#about",
      iconClass: "user",
      name: "Yo",
    },
    {
      active: false,
      ref: "#skills",
      iconClass: "file-alt",
      name: "Habilidades",
    },
    {
      active: false,
      ref: "#services",
      iconClass: "briefcase-alt",
      name: "Servicios",
    },
    {
      active: false,
      ref: "#portfolio",
      iconClass: "scenery",
      name: "Portafolio",
    },
    {
      active: false,
      ref: "#contact",
      iconClass: "message",
      name: "Contacto",
    },
  ];

  /* ---------- Estado del Menu ----------*/

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Jefferson
        </a>
        <div className={showMenu ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {nav.map(({ iconClass, name, ref, active }) => (
              <li className="nav__item">
                <a
                  href={ref}
                  className={`nav__link ${active ? "active-link" : ""}`}
                >
                  <i className={`uil uil-${iconClass} nav__icon`}></i>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" onClick={() => setShowMenu(!showMenu)}></i>
        </div>
        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
