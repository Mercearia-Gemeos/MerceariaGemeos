import React from "react";
//React

import {
    BsLinkedin,
    BsInstagram,
    BsGithub
} from "react-icons/bs";

import "./CardEquipe.css";
//Css

function CardEquipeI() {
    return (
        <div className="cardEquipe">
            <h1 className="cardEquipeTitle">Igor Camargo</h1>
            <h2 className="cardEquipeRole">Designer</h2>
            <div className="cardEquipeSocials">
            <a href="https://www.linkedin.com/in/igor-camargo-820183223/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/igorcamargo1" target="_blank" rel="noreferrer"><BsGithub/></a>
            <a href="https://www.instagram.com/_igor.camargo/" target="_blank" rel="noreferrer"><BsInstagram/></a>
            </div>
        </div>
    );
}

export default CardEquipeI;
