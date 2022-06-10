import React from "react";
//Blibliotecas

import { Link } from "react-router-dom";
//Componentes

import useGlobal from "../../../../hooks/useGlobal"
//Hooks

import "./CardBanner.css";
//Css

function CardBanner({ id, Titulo, img, descricao }) {

    const { setIdItem } = useGlobal();


    function HandleItemId(){
        setIdItem(id)
    }

    return (
        <section className="CardBanner">
            <header>
                <h2 className="CardBannerTittle"> {Titulo}</h2>
            </header>
            <main>
                <div className="ImgBannerBox">
                    <img
                        src={img}
                        alt={Titulo}
                        className="ImagemBannerCard"
                    ></img>
                </div>
            </main>
            <footer>
                <p className="DescricaoBanner">
                    <strong>Descrição: </strong> {descricao}
                </p>
            </footer>
            <Link
                onClick={HandleItemId}
                className=" btn btnAdm btnAdmEditar"
                to="/Admin/GerenciarBanner/Editar"
            >
                Editar
            </Link>
        </section>
    );
}
export default CardBanner;
