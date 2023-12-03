import React from "react";
import {hand} from "../assets/hand.tsx"
import {send} from "../assets/send.tsx"

export const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Jefferson 
       {hand()}
      </h1>
      <h3 className="home__subtitle">Desarollo web zzzz</h3>
      <p className="home__description">Otros zzzzzz quemados por el momento</p>

      <a href="#contact" className="button button--flex">
        Como tan muchachos
        {send()}
      </a>
    </div>
  );
};
