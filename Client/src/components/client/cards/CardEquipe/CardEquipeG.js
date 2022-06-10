import React from "react";
//React

import {
    BsLinkedin,
    BsGithub
} from "react-icons/bs";

import "./CardEquipe.css";
//Css

function CardEquipeG() {
    return (
        <div className="cardEquipe">
            <h1 className="cardEquipeTitle">Gabriel Carlos</h1>
            <h2 className="cardEquipeRole">Programador</h2>
            <div className="cardEquipeSocials">
            <a href="https://br.linkedin.com/in/gabriel-carlos-cavalcante-775a07215" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/Gabrielttbr" target="_blank" rel="noreferrer"><BsGithub/></a>
            </div>
        </div>
    );
}

export default CardEquipeG;
