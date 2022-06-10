import React from 'react';
//Blicliotecas

import { Link } from 'react-router-dom';
//Componentes

import './NavbarEstatico.css'
//Css

function NavbarEstatico() {
    return (
        <section className="menu-estatico">
            <div className="containers">
                <ul  className="ulNavEstatico">
                    <li className="componentes-lista suma">
                        <Link to="/" className="frase-de-efeito">Diferentes de todos igual à você, gêmeos!</Link>
                    </li>
                    <li className="componentes-lista"> <Link to="/CentralDeAtendimento"> Central de atendimento</Link></li>
                    <li className="componentes-lista"> <Link to="/FormasDePagamento"> Formas de pagamentos</Link></li>
                    <li className="componentes-lista"> <Link to="/SobreNos"> sobre nós</Link></li>
                </ul>
            </div>
        </section>
    )
}
export default NavbarEstatico;