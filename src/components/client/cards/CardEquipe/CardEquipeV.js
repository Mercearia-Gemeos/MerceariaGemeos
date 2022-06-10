import React from "react";
//React

import {
    BsLinkedin,
    BsInstagram,
    BsGithub
} from "react-icons/bs";

import "./CardEquipe.css";
//Css

function CardEquipeV() {
    return (
        <div className="cardEquipe">
            <h1 className="cardEquipeTitle">Vitor Oliveira</h1>
            <h2 className="cardEquipeRole">Programador</h2>
            <div className="cardEquipeSocials">
            <a href="https://www.linkedin.com/in/vitor-novais-2531a3207/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/VitorNovaisV" target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href="https://www.instagram.com/oliveira.vitor.23/" target="_blank" rel="noreferrer"><BsInstagram/></a>
            </div>
        </div>
    );
}

export default CardEquipeV;
