import React from "react";
//Blibliotecas

import { Card, Row } from "react-bootstrap";
//Bootstrap

import { Link } from "react-router-dom";
//Componentes

import "./ProductAdm.css";
//Css

import useGlobal from "../../../../../../hooks/useGlobal";
//Hooks

function ProductAdm(props) {
    const { product } = props;

    const { setIdItem } = useGlobal();

    function HandleItemId() {
        setIdItem(product.Id_Produto);
    }

    return (
        <section className="Card-container">
            {/*Formatação do Produto, os dados são recebitos por props*/}

            <Card
                className="cardProd"
                border="primary"
                style={{ width: "15rem" }}
            >
                {" "}
                {/*---------------------------------Corpo Do Card Externo (Borda Vermelha)*/}
                <Card.Img
                    className="cardImg"
                    variant="top"
                    src={product.Link_Imagem_Produto}
                />{" "}
                {/*--------------------------------------Imagem Do Card*/}
                <Card.Body className="cardBody">
                    {" "}
                    {/*-------------------------------------------------------------------Corpo do Card Interno*/}
                    <Card.Title className="cardTitle">
                        {product.Nome_Produto}
                    </Card.Title>{" "}
                    {/*---------------------------------------Título Do Card*/}
                    <Card.Text className="cardDesc">
                        {" "}
                        {/*---------------------------------------------------------------Descrição do Card*/}
                        {product.Descricao}
                    </Card.Text>
                    <Card.Text className="cardValorAdm">
                        {" "}
                        {/*--------------------------------------------------------------Valor do Card*/}
                        R$ {product.Valor}
                    </Card.Text>
                    <Row className="RowEditbtn">
                        <Link
                            onClick={HandleItemId}
                            className=" btn btnAdm btnAdmEditar"
                            to="/Admin/GerenciarProdutos/Editar"
                        >
                            Editar
                        </Link>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
}
export default ProductAdm;
