import React from "react";
//React

import {
    BsLinkedin,
    BsInstagram
} from "react-icons/bs";

import "./CardEquipe.css";
//Css

function CardEquipeD() {
    return (
        <div className="cardEquipe">
            <h1 className="cardEquipeTitle">Daniela Aquino</h1>
            <h2 className="cardEquipeRole">Marketing</h2>
            <div className="cardEquipeSocials">
            <a href="https://www.linkedin.com/in/daniela-nogueira-45537570/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://www.instagram.com/daniela.aquino.391/" target="_blank" rel="noreferrer"><BsInstagram/></a>
            </div>
        </div>
    );
}

export default CardEquipeD;
