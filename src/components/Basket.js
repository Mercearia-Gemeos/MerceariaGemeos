import React from "react";
//Blibliotecas

import "./Basket.css";
//Css

import { Row, Col, Container, Button } from "react-bootstrap";
//Bootstrap

import useStore from "../hooks/useStore";
//Hooks

import { Link } from "react-router-dom";
//Componentes

function Basket(props) {
    const {setItemCarrinho } = useStore();

    ////////////////////////////////////////////////////////////////////////
    //                                                                    //
    //         Recebe Dados Dos items de carrinho por props,              //
    //         calcula o valor dos items, e os arredonda para             //
    //           2 casas decimais                                         //
    //                                                                    //
    ////////////////////////////////////////////////////////////////////////

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce(
        (a, c) => a + c.Quantidade * c.Valor,
        0
    );
    const totalPrice = itemsPrice.toFixed(2);

    return (
        <aside className="">
            <h3>Produtos No Carrinho:</h3>
            <hr />
            <br />
            <div>
                {/*

                 ////////////////////////////////////////////////
                //                                            //
               //    Verifica se Existe Itens no carrinho    //
              //                                            //
             ////////////////////////////////////////////////

              */}

                {/*
            
                 ///////////////////////////
                //                       //
               //   Caso Esteja Vazio   //
              //                       //
             ///////////////////////////

              */}

                {cartItems.length === 0 && <div>O Carrinho Esta Vazio</div>}
                {cartItems.map((item, idx) => (
                    <Container key={idx}>
                        <Row className="row carrinhoItem">
                            <Col className="carrinhoItemNome">
                                {item.Nome_Produto}
                            </Col>
                            <Col className="btns-carrinho">
                                <button
                                    onClick={() => onRemove(item)}
                                    className="remove"
                                >
                                    -
                                </button>{" "}
                                <button
                                    onClick={() => onAdd(item)}
                                    className="add"
                                >
                                    +
                                </button>
                            </Col>
                            <Col className="carrinhopreco">
                                {item.Quantidade} x R${item.Valor}
                            </Col>
                        </Row>
                    </Container>
                ))}

                <br />

                {/*
            
                 ///////////////////////////
                //                       //
               //   Caso Tenha Itens    //
              //                       //
             ///////////////////////////

              */}

                {cartItems.length !== 0 && (
                    <>
                        <hr />
                        <div className="row carrinhoPrecoFinal">
                            <div className="col-2 ">
                                <strong>Preço Total:</strong>
                            </div>
                            <div className="col-1 carrinhoPrecoFinalValor ">
                                <strong>R${totalPrice}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row btnFazerPedidoDiv">
                            <Button
                                variant="success"
                                size="lg"
                                className="btnFazerPedido"
                            >
                                <Link
                                    to="/Pedido"
                                    onClick={() => setItemCarrinho(cartItems)}
                                >
                                    Fazer Pedido
                                </Link>
                            </Button>

                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}

export default Basket;
