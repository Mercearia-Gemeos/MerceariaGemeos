import React from "react";
//Blibliotecas

import { Card, Row } from "react-bootstrap";
//Bootstrap

import { Link } from "react-router-dom";
//Componentes

import "./PedidoCli.css";
//Css

import useGlobal from "../../../../hooks/useGlobal";
//Hooks

function PedidoCli(props) {
    
    const { pedido } = props;

    const { setIdItem } = useGlobal();

    function HandleItemId() {
        setIdItem(pedido.Id_Pedido);
    }

    function toBrDate(usDate) {
        const cleanDate = usDate.split("T03:00:00.000Z").reverse().join();
        const cleanCollon = cleanDate.split(",").join("");
        const OrderDate = cleanCollon.split("-").reverse().join("/");

        let dateBr = OrderDate;
        return dateBr;
    }

    return (
        <section className="">
            {/*Formatação do Produto, os dados são recebitos por props*/}

            <Card
                className="cardPedidoCli"
                border="danger"
                style={{ width: "15rem" }}
            >
                <Card.Body className="cardBody2">
                    <div
                        className={`statusPedido  
                        ${pedido.Status_pedido === 1 && "statusAndamento"}
                        ${pedido.Status_pedido === 2 && "statusConcluido"} 
                        ${pedido.Status_pedido === 3 && "statusCancelado"}`}
                    ></div>
                    <Card.Title className="cardNumber">
                        {" "}
                        N°{pedido.Id_Pedido}
                    </Card.Title>
                    <Card.Text className="cardName">
                        {" "}
                        {pedido.Nome} {pedido.Sobrenome}
                    </Card.Text>
                    <Card.Text className="cardEndereco">
                        {" "}
                        {pedido.Endereco}
                    </Card.Text>
                    <Card.Text className="cardDate">
                        {" "}
                        {toBrDate(pedido.Data_Pedido)}
                    </Card.Text>
                    <Row className="RowEditbtn">
                        <Link
                            onClick={HandleItemId}
                            className=" btn btnCli btnCliEditar"
                            to="/GerenciarPedidos/Detalhes"
                        >
                            Detalhes
                        </Link>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
}
export default PedidoCli;
