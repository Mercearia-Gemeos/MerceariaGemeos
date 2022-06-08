import React from "react";
//Blibliotecas

import useGlobal from "../../../../hooks/useGlobal";
//Hooks

import { Link } from "react-router-dom";
//Componentes

import "./CardCategoria.css";
//Css

import Editar from "../../../../assets/img-adm/IconEdit.png";
//Imgs

function CardCategoria({ Nome, id }) {
    
    const { setIdItem } = useGlobal();

    function HandleItemId() {
        setIdItem(id);
    }

    return (
        <section className="ContainerCardCategoria">
            <div className="divNameCategoria">
                <h1 className="TituloCategoria" id={`CardCateg${id}`}>
                    {Nome}
                </h1>
            </div>

            <Link
                onClick={HandleItemId}
                className="btn"
                to="/Admin/GerenciarCategorias/Editar"
            >
                <img src={Editar} alt="Editar-icon" className="IconeCat"></img>
            </Link>
        </section>
    );
}
export default CardCategoria;
