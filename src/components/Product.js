import React from "react";
import { Tooltip } from "@mui/material";
//Blibliotecas

import { Button, Card } from "react-bootstrap";
//Bootstrap

import useStore from "../hooks/useStore";
//Hooks

import "./Product.css";
//Css

function Product(props) {
    const { product, onAdd } = props;

    const { authCli } = useStore();

    return (
        <section className="Card-container">
            {/*Formatação do Produto, os dados são recebitos por props*/}

            <Card
                className="cardProd"
                border="danger"
                style={{ width: "15rem" }}
            >
                {/*---------------------------------Corpo Do Card Externo (Borda Vermelha)*/}

                <Card.Img
                    className="cardImg"
                    variant="top"
                    src={product.Link_Imagem_Produto}
                />

                {/*--------------------------------------Imagem Do Card*/}

                <Card.Body className="cardBody">
                    {/*-------------------------------------------------------------------Corpo do Card Interno*/}

                    <Card.Title className="cardTitle">
                        {product.Nome_Produto}
                    </Card.Title>

                    {/*---------------------------------------Título Do Card*/}

                    <Card.Text className="cardDesc">
                        {/*---------------------------------------------------------------Descrição do Card*/}

                        {product.Descricao}
                    </Card.Text>
                    <Card.Text className="cardValor">
                        {/*--------------------------------------------------------------Valor do Card*/}
                        R$ {product.Valor}
                    </Card.Text>
                    <div>
                        {authCli?.user ? (
                            <>
                                <Button
                                    variant="danger"
                                    className="btnCarrinho"
                                    onClick={() => onAdd(product)}
                                >
                                    {" "}
                                    + Adicionar Ao Carrinho
                                </Button>
                            </>
                        ) : (
                            <>
                                <Tooltip
                                    title="Faça Login Para Ter Acesso a Essa Ação "
                                    arrow
                                >
                                    <span>
                                        <Button
                                            variant="danger"
                                            className="btnCarrinho btnNoLogin"
                                        
                                        >
                                            {" "}
                                            + Adicionar Ao Carrinho
                                        </Button>
                                    </span>
                                </Tooltip>
                            </>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Product;
