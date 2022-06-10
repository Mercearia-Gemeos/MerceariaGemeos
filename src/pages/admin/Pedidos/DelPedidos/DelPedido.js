import Axios from "axios";
//Axios

import React from "react";
//Blibliotecas

import { Row, Col, Form, Button, Container } from "react-bootstrap";
//Bootstrap

import "./DelPedido.css";
//Css

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
import { Link } from "react-router-dom";
// Componentes


import useGlobal from "../../../../hooks/useGlobal";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
//Hooks

function DelPedido() {


    const { idItem, setIdItem } = useGlobal();
    const { auth } = useAuth();

    const idPedido = idItem;


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
    }, []);

    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados do Pedido */

    const DataPedido = dataPedido;

    //--------------------------------------------------------------//

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            cancelarPedido();
        }
        setValidated(true);
    };


    const [success, SetSuccess] = useState(false);

    const [msgCancelamento, setMsgCancelamento] = useState();


    function HandleItemId() {
        setIdItem();
    }

    //--------------------------------------------------------------//
    //                       Cancelar Pedido                        //
    //--------------------------------------------------------------//

    const cancelarPedido = (e) => {
        Axios.patch(
            "http://localhost:4000/pedidos/cancelar",
            {
                motivoCancelamento: msgCancelamento,
                id_pedido: parseInt(idPedido)
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            SetSuccess(true);
            HandleItemId();
        });
    };


    return (
        <div className="admGer">
            <NavbarAdm />
            <Container>
                {success?(<>
                    <Container className="contentConcluidoSucesso">
                                <Container className="ContainerConcluidoSucesso">
                                    <p className="PConcluido">
                                        Pedido Nº {idPedido} Cancelado com
                                        Sucesso
                                    </p>
                                    <p className="PConcluido">
                                        Voltar Para{" "}
                                        <Link to="/Admin/GerenciarPedidos">
                                            Pedidos
                                        </Link>
                                    </p>
                                </Container>
                            </Container>
                </>
                ):(<>
                    <section>
                <h1 className="DELETEPEDIDO"> Cancelar pedido</h1>
                <div className="ContainerFormPedidoGet ">
                    {DataPedido.map((item, idx) => (
                        <div key={idx} className="contentCli">
                            <Row>
                                <Col>
                                    <div className="contentListCli">
                                        <Form>
                                            <Form.Group
                                                className="mb-3 displayFormPedido displayPedidoId displayFormPedidoCancel"
                                                controlId="CliPedidoId"
                                            >
                                                <div className="labelDisplayFormpedido">
                                                    <Form.Label>
                                                        Pedido Nº
                                                    </Form.Label>
                                                </div>
                                                <Form.Control
                                                    type="text"
                                                    defaultValue={`${item.Id_Pedido} `}
                                                    disabled
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3 displayFormPedido displayFormPedidoCancel"
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
                                                className="mb-3 displayFormPedido displayFormPedidoCancel"
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
                                                className="mb-3 displayFormPedido displayFormPedidoCancel"
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
                                                className="mb-3 displayFormPedido displayFormPedidoCancel"
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
                                                className="mb-3 displayFormPedido displayFormPedidoCancel"
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
                                        <div className="dateContentPedidoDetalhe"></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
                <div className="ContainerFormPedidoGet ">
                <div className="contentCli">
                    <div className="contentListCli ">
                        <Form
                            className="FormularioCancelarDelPedido "
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <Form.Group
                                controlId="exampleForm.ControlTextarea1"
                                className="FormTextArea"
                            >
                                <Form.Label>Motivo do cancelamento:</Form.Label>
                                <Form.Control
                                    required
                                    minLength="10"
                                    maxLength="200"
                                    as="textarea"
                                    rows={6}
                                    onChange={(e) => {
                                        setMsgCancelamento(e.target.value);
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, prencha o campo acima.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Container className="ContainerBtnPedidos btnCancelPedidos">
                            <Button variant="danger" type="submit">
                                Cancelar Pedido
                            </Button>
                            </Container>
                        </Form>
                    </div>
                </div>
                </div>
                </section>
                </>)
            }
            </Container>
        </div>
    );
}
export default DelPedido;
