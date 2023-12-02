import React from "react";
import "./header.css";

export const Header = () => {
  const nav = [
    {
      ref: "#home",
      iconClass: "estate",
      name: "Inicio",
    },
    {
      ref: "#about",
      iconClass: "user",
      name: "Yo",
    },
    {
      ref: "#skills",
      iconClass: "file-alt",
      name: "Habilidades",
    },
    {
      ref: "#services",
      iconClass: "briefcase-alt",
      name: "Servicios",
    },
    {
      ref: "#portfolio",
      iconClass: "scenery",
      name: "Portafolio",
    },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Jefferson
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            {nav.map(({ iconClass, name, ref }) => (
              <li className="nav__item">
                <a href={ref} className="nav__link">
                  <i className={`uil uil-${iconClass} nav__icon`}></i>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close"></i>
        </div>

        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
