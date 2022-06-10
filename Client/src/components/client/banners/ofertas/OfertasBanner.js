import React from 'react';
//Blibliotecas

import { useState ,useEffect } from "react";
//Hooks

import { Carousel } from 'react-bootstrap';
//Bootstrap

import './OfertasBanner.css';
//Css

function OfertasBanner() {


    //Dados

    //--------------------------------------------------------------//
    //                        Dados Dos Banners                     //
    //--------------------------------------------------------------//

    const [bannersDb, setBannersDb] = useState([]);


    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(
                `http://localhost:4000/banners`
            );
            const data = await res.json();
            setBannersDb(data);
        };

        getItens();
    }, []);

    /*Recebe Todos Os Dados dos Banners */

    const  Banners  = bannersDb;



    return (

        <Carousel className="bannerOfertas">
        {
            Banners.map((item, index) => (
                item.Status_Banner === 1 &&
                    <Carousel.Item key={index} className="OfertaBannerItem">
                    <img
                        className="d-block w-100 bannerOfertasImg"
                        src={item.Link_Banner_Imagem}
                        alt={`Oferta-${item.Id_Banner}`}
                    />
                    </Carousel.Item>
            ))
        }
        </Carousel>
    );
}
export default OfertasBanner;