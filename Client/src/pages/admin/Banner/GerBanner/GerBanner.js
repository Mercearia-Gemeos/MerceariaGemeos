import React from "react";
//Blibliotecas

import { Container, Row, Button } from "react-bootstrap";
//Bootstrap

import { useState, useEffect } from "react";
//Hooks

import CardBanner from "../../../../components/admin/Cards/CardBanner/CardBanner";
import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
import { Link } from "react-router-dom";
//Componentes

import "./GerBanner.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

function GerBanner() {
    
    //--------------------------------------------------------------//
    //                        Dados Dos Banners                     //
    //--------------------------------------------------------------//

    const [bannersDb, setBannersDb] = useState([]);

    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(`http://localhost:4000/banners`);
            const data = await res.json();
            setBannersDb(data);
        };

        getItens();
    }, []);

    /*Recebe Todos Os Dados dos Banners */

    const Banners = bannersDb;

    // Trabalhando com JSX
    return (
        <div className="admGer">
            <NavbarAdm />
            <Row className="RowTitleBtnBanner">
                <div>
                    <h1 className="TituloBanner"> Gerenciamento De Banners</h1>
                </div>
                <Button
                    variant="primary"
                    size="md"
                    className="ButtonNew btnBannerAdd"
                >
                    <Link to="/Admin/GerenciarBanner/Cadastrar">
                        Novo Banner
                    </Link>
                </Button>
            </Row>
            <Container>
                <main className="OfertasBannerContainer">
                    {Banners.map((banner, idx) => (
                        <CardBanner
                            key={idx}
                            id={banner.Id_Banner}
                            Titulo={banner.Nome}
                            img={banner.Link_Banner_Imagem}
                            descricao={banner.Descricao}
                        ></CardBanner>
                    ))}
                </main>
            </Container>
        </div>
    );
}

export default GerBanner;
