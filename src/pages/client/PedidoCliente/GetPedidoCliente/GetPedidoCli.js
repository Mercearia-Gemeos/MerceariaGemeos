import React from "react";
//Blibliotecas

import "./GetPedidoCli.css";
//Css

import NavbarPrincipal from "../../../../components/client/navbars/navbar-principal/NavbarPrincipal"
//Componentes

import { Container, Form, Row, Col } from "react-bootstrap";
//Bootstrap

import { useState, useEffect } from "react";
import useGlobal from "../../../../hooks/useGlobal";
//Hooks



function GetPedidoCli() {

    const { idItem } = useGlobal();

    const idPedido = idItem;


    //--------------------------------------------------------------//
    //                        Dados Dos Produto                     //
    //--------------------------------------------------------------//

    const [itemPedido, setItemPedido] = useState([]);

    useEffect(() => {
        const getItemPedido = async () => {
            const res = await fetch(
                `http://localhost:4000/itempedido/getItemPedido/${idPedido}`
            );
            const data = await res.json();
            setItemPedido(data);
        };

        getItemPedido();
    }, [idPedido]);

    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados do Produto */

    const ItemPedido = itemPedido;

    //--------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                        Dados Dos Pedido                      //
    //--------------------------------------------------------------//

    const [dataPedido, setDataPedido] = useState([]);

    useEffect(() => {
        const getPedido = async () => {
            const res = await fetch(
                `http://localhost:4000/pedidos/${idPedido}`
            );
            const data = await res.json();
            setDataPedido(data);
        };

        getPedido();
    }, [idPedido]);

    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados do Produto */

    const DataPedido = dataPedido;

    //--------------------------------------------------------------//

    const itemsPrice = ItemPedido.reduce(
        (a, c) => a + c.Prod_Quantidade * c.Valor,
        0
    );

    const totalPrice = itemsPrice.toFixed(2);

    function toBrDate(usDate) {
        const cleanDate = usDate.split("T03:00:00.000Z").reverse().join();
        const cleanCollon = cleanDate.split(",").join("");
        const OrderDate = cleanCollon.split("-").reverse().join("/");

        let dateBr = OrderDate;
        return dateBr;
    }

    return (
        <div className="GerPedidosCliContent">
            <NavbarPrincipal />
            <Container>
                <section className="ContainerPedidosDetalhes">
                            <div className="ContainerFormPedidoGet ">
                                <h1 className="GetTitlePedido center">
                                    {" "}
                                    Detalhes Do Pedido Nº {idPedido}
                                </h1>
                                {DataPedido.map((item, idx) => (
                                    <div key={idx} className="contentCli">
                                        <Row>
                                            <Col>
                                                <div className="contentListCli">
                                                    <Form>
                                                        <Form.Group
                                                            className="mb-3 displayFormPedido"
                                                            controlId="CliPedidoName"
                                                        >
                                                            <div className="labelDisplayFormpedido">
                                                                <Form.Label>
                                                                    Cliente:
                                                                </Form.Label>
                                                            </div>
                                                            <Form.Control
                                                                type="text"
                                                                defaultValue={`${item.Nome} ${item.Sobrenome} `}
                                                                disabled
                                                            />
                                                        </Form.Group>
                                                        <Form.Group
                                                            className="mb-3 displayFormPedido"
                                                            controlId="CliPedidoEmail"
                                                        >
                                                            <div className="labelDisplayFormpedido">
                                                                <Form.Label>
                                                                    Email:
                                                                </Form.Label>
                                                            </div>
                                                            <Form.Control
                                                                type="text"
                                                                defaultValue={`${item.Email}`}
                                                                disabled
                                                            />
                                                        </Form.Group>
                                                        <Form.Group
                                                            className="mb-3 displayFormPedido"
                                                            controlId="CliPedidoEmail"
                                                        >
                                                            <div className="labelDisplayFormpedido">
                                                                <Form.Label>
                                                                    Celular:
                                                                </Form.Label>
                                                            </div>
                                                            <Form.Control
                                                                type="text"
                                                                defaultValue={`${item.Celular}`}
                                                                disabled
                                                            />
                                                        </Form.Group>
                                                        <Form.Group
                                                            className="mb-3 displayFormPedido"
                                                            controlId="CliPedidoEmail"
                                                        >
                                                            <div className="labelDisplayFormpedido">
                                                                <Form.Label>
                                                                    Endereço:
                                                                </Form.Label>
                                                            </div>
                                                            <Form.Control
                                                                type="text"
                                                                defaultValue={`${item.Cidade}, ${item.Bairro}, ${item.Endereco}`}
                                                                disabled
                                                            />
                                                        </Form.Group>
                                                        <Form.Group
                                                            className="mb-3 displayFormPedido"
                                                            controlId="CliPedidoEmail"
                                                        >
                                                            <div className="labelDisplayFormpedido">
                                                                <Form.Label>
                                                                    CEP:
                                                                </Form.Label>
                                                            </div>
                                                            <Form.Control
                                                                type="text"
                                                                defaultValue={`${item.CEP}`}
                                                                disabled
                                                            />
                                                        </Form.Group>
                                                    </Form>
                                                    <div className="dateContentPedidoDetalhe">
                                                        <p>Criado em:</p>
                                                        <p>
                                                            {toBrDate(
                                                                item.Data_Pedido
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                            <div className="ContainerFormPedidoGet">
                                <h1 className="GetTitlePedido center mb-4 ">
                                    {" "}
                                    Produtos Do Pedido
                                </h1>
                                <table className="TabelaCarrinho">
                                    <tbody>
                                        <tr className="LinhaDeCimaTabela">
                                            <td className="ColunaCarrinho">
                                                {" "}
                                                Nome do produto
                                            </td>
                                            <td className="ColunaCarrinho">
                                                {" "}
                                                Quantidade
                                            </td>
                                            <td className="ColunaCarrinho">
                                                {" "}
                                                Preço
                                            </td>
                                        </tr>
                                        {ItemPedido.map((item, idx, valor) => (
                                            <tr
                                                key={idx}
                                                className="linhaTabela"
                                            >
                                                <td className="ColunaCarrinho">
                                                    {" "}
                                                    {item.Nome_Produto}{" "}
                                                </td>
                                                <td className="ColunaCarrinho">
                                                    {item.Prod_Quantidade}
                                                </td>
                                                <td className="ColunaCarrinho">
                                                    R$
                                                    {valor = (item.Valor * item.Prod_Quantidade).toFixed(2) }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="TotalPrice">
                                    R${totalPrice}
                                </div>
                            </div>

                            <div className="ContainerFormPedidoGet">
                                {DataPedido.map((item, idx) => (
                                    <Form key={idx}>
                                        <Row className="RowPagamentoObs">
                                            <Col className="FormaPagamentoDiv">
                                                <Form.Group
                                                    className="mb-3 displayFormPedidoPagamento"
                                                    controlId="PagamentoPedido"
                                                >
                                                    <div className="labelDisplayFormpedidoPagamento">
                                                        <Form.Label>
                                                            Forma De Pagamento:
                                                        </Form.Label>
                                                    </div>
                                                    <Form.Control
                                                        type="text"
                                                        defaultValue={`${item.FormaPagamento}`}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group
                                                    className="mb-3 displayFormPedidoObs"
                                                    controlId="ObservacaoPedido"
                                                >
                                                    <div className="labelDisplayFormObs">
                                                        <Form.Label>
                                                            Observações:
                                                        </Form.Label>
                                                    </div>
                                                    <Form.Control
                                                        as="textarea"
                                                        type="text"
                                                        defaultValue={`${item.Observacao}`}
                                                        disabled
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                ))}
                                {DataPedido.map((item, idx) => (
                                    <Container
                                        key={idx}
                                        className="ContainerBtnPedidos"
                                    >
                                        {item.Status_pedido === 1 && (
                                            <Container className="ContainerBtnPedidos">
                                                <div className="PedidoAndamentoDiv">
                                                    <h1 className="center">Pedido Em Andamento</h1>
                                                </div>
                                            </Container>
                                        )}

                                        {item.Status_pedido === 2 && (
                                            <Container className="ContainerBtnPedidos">
                                                <div className="PedidoConcluidoDiv">
                                                    <h1>Pedido Concluído!</h1>
                                                </div>
                                            </Container>
                                        )}

                                        {item.Status_pedido === 3 && (

                                            <Container className="ContainerBtnPedidos">

                                                <Form>
                                                    <Row className="RowPagamentoObs">
                                                        <Col className="FormaPagamentoDiv">
                                                            <Form.Group
                                                                className="mb-3 displayFormPedidoPagamento"
                                                                controlId="PagamentoPedido"
                                                            >
                                                                <div className="labelDisplayFormpedidoPagamento">
                                                                    <Form.Label>
                                                                        Data Do Cancelamento:
                                                                    </Form.Label>
                                                                </div>
                                                                <Form.Control
                                                                    type="text"
                                                                    defaultValue={toBrDate(
                                                                        item.Data_Cancelamento
                                                                    )}
                                                                    disabled
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group
                                                                className="mb-3 displayFormPedidoObs"
                                                                controlId="ObservacaoPedido"
                                                            >
                                                                <div className="labelDisplayFormObs">
                                                                    <Form.Label>
                                                                        Motivo Do Cancelamento:
                                                                    </Form.Label>
                                                                </div>
                                                                <Form.Control
                                                                    as="textarea"
                                                                    type="text"
                                                                    defaultValue={`${item.Motivo_Cancelamento}`}
                                                                    disabled
                                                                />
                                                            </Form.Group>

                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className="PedidoCanceladoDiv">
                                                    <h1 className="center">Pedido Cancelado</h1>
                                                </div>
                                            </Container>
                                        )}
                                    </Container>
                                ))}
                            </div>
                </section>
            </Container>
        </div>
    );
}
export default GetPedidoCli;
