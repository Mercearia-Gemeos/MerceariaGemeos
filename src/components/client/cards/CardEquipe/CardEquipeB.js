import React from "react";
//React

import {
    BsLinkedin,
    BsInstagram
} from "react-icons/bs";

import "./CardEquipe.css";
//Css

function CardEquipeB() {
    return (
        <div className="cardEquipe">
            <h1 className="cardEquipeTitle">Bruno Araujo</h1>
            <h2 className="cardEquipeRole">Analista</h2>
            <div className="cardEquipeSocials">
            <a href="https://www.linkedin.com/in/bruno-macedo-de-araujo-38aa33229/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://www.instagram.com/bruno.macedox/" target="_blank" rel="noreferrer"><BsInstagram/></a>
            </div>
        </div>
    );
}

export default CardEquipeB;
