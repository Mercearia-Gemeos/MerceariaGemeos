import React from "react";
//Blibliotecas

import { Container } from "react-bootstrap";
//Componentes

import "./NaoEncontrado.css";
//Css

function NaoEncontrado() {
    return (
        <section className="ErroContainer admGer">
            <Container className="containerCont">
                <p className="ErroText"> ERROR </p>
                <h1 className="tituloErro">404</h1>
                <p className="ErroText">PAGE NOT FOUND</p>
            </Container>
        </section>
    );
}
export default NaoEncontrado;
