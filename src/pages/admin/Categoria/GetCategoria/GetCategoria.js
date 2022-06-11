import Axios from "axios";
//Axios

import React from "react";
//Blibliotecas

import { useState, useEffect } from "react";
import useGlobal from "../../../../hooks/useGlobal";
import useAuth from "../../../../hooks/useAuth";
//Hooks

import { Form, Button, Modal } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
//Componentes

import "./GetCategoria.css";
//CSS

import Edit from "../../../../assets/img-adm/IconEdit.png";
//Imgs

function GetCategoria(idCateg) {
    const { idItem } = useGlobal();

    idCateg = idItem;

    //--------------------------------------------------------------//
    //                        Dados Das Categorias                  //
    //--------------------------------------------------------------//

    const [categoria, setcategoria] = useState([]);

    useEffect(() => {
        const getcateg = async () => {
            const res = await fetch(
                `http://localhost:4000/categorias/${idCateg}`
            );
            const data = await res.json();
            setcategoria(data);
        };

        getcateg();
    },[]);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados das Categorias */

    const Categoria = categoria;

    /*/////////////////////////////////////*/

    //Configurações do modal e editar nome

    const [nome, setNome] = useState(false);
    const FecharNomeModal = () => setNome(false);
    const AbrirNomeModal = () => setNome(true);

    //Configurarções de por em Destaque

    const [destaque, setDestaque] = useState(false);
    const FecharDestaqueModal = () => setDestaque(false);
    const AbrirDestaqueModal = () => setDestaque(true);

    //Configurações do status

    const [status, setStatus] = useState(false);
    const FecharStatusModal = () => setStatus(false);
    const AbrirStatusModal = () => setStatus(true);

    //--------------------------------------------------------------//
    //                    Update Das Categorias                     //
    //--------------------------------------------------------------//

    const { auth } = useAuth();

    const [newNomeCategoria, setNewNomeCategoria] = useState("");
    const [newEmDestaque, setNewEmDestaque] = useState(0);
    const [newStatus, setNewStatus] = useState(0);

    ////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                    //
    //                                                                                    //
    //                                PATCHS PARA A API                                   //
    //                                                                                    //
    //                                                                                    //
    ////////////////////////////////////////////////////////////////////////////////////////

    //--------------------------------------------------------------//
    //                    Update Nome Categoria                     //
    //--------------------------------------------------------------//

    const atualizarNomeCategoria = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/categorias/updateName",
            {
                nome: newNomeCategoria,
                id_categoria: parseInt(idCateg),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Nome Da Categoria Alterada Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                  Update Em Destaque Categoria                //
    //--------------------------------------------------------------//

    const atualizarEmDestaqueCategoria = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/categorias/updateEmDestaque",
            {
                emDestaque: parseInt(newEmDestaque),
                id_categoria: parseInt(idCateg),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert('Campo "Em Destaque" Da Categoria Alterada Com Sucesso!');
        });
    };

    //--------------------------------------------------------------//
    //                  Update Status Categoria                     //
    //--------------------------------------------------------------//

    const atualizarStatusCategoria = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/categorias/updateStatus",
            {
                status: newStatus,
                id_categoria: parseInt(idCateg),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert('Campo "Status" Da Categoria Alterada Com Sucesso!');
        });
    };

    return (
        <section className="GetCategoria">
            <NavbarAdm />

            <main className="admGer ">
                <div className="MainGetCategoria">
                    <div className="FormCategoiraContainer">
                        <h1 className="TitleCategoria editCateg"> Editar Categoria</h1>
                        <br />
                        {Categoria.map((item, idx) => (
                            <Form key={idx}>
                                <div className="ExibirItemCategoria">
                                    <div className="JuntarLabelIcon">
                                        <Form.Group
                                            className="mb-3 InputFormCat"
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className="LabelCategoria">
                                                Nome Da Categoria:
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                defaultValue={`${item.Nome_Categoria}`}
                                                disabled
                                            />
                                        </Form.Group>
                                        <div
                                            className="IconeEditar mgUp"
                                            onClick={AbrirNomeModal}
                                        >
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="ExibirItemCategoria">
                                    <label
                                        className="LabelCategoria"
                                        id="Destaque"
                                    >
                                        Em destaque:
                                    </label>
                                    <div className="JuntarLabelIcon">
                                        <Form.Select
                                            aria-label="Em Destaque"
                                            disabled
                                        >
                                            {item.Em_Destaque === 1 && (
                                                <option value="1">Sim</option>
                                            )}
                                            {item.Em_Destaque === 0 && (
                                                <option value="0">Não</option>
                                            )}
                                        </Form.Select>
                                        <div
                                            className="IconeEditar"
                                            onClick={AbrirDestaqueModal}
                                        >
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="ExibirItemCategoria">
                                    <label
                                        className="LabelCategoria"
                                        id="Status"
                                    >
                                        Status:
                                    </label>
                                    <div className="JuntarLabelIcon">
                                        <Form.Select
                                            aria-label="Status"
                                            disabled
                                        >
                                            {item.Status_Categoria === 1 && (
                                                <option value="1">
                                                    Ativado
                                                </option>
                                            )}
                                            {item.Status_Categoria === 0 && (
                                                <option value="0">
                                                    Desativado
                                                </option>
                                            )}
                                        </Form.Select>
                                        <div
                                            className="IconeEditar"
                                            onClick={AbrirStatusModal}
                                        >
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        ))}
                    </div>
                </div>
            </main>

            {/* 
/////////////////////////////////////////////////////////////////
//                                                             //
//                   Modal Categoria Nome                      //
//                                                             //
/////////////////////////////////////////////////////////////////
            */}

            <Modal className="ModalEditar" show={nome} onHide={FecharNomeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Alterando Nome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o novo nome ..."
                                onChange={(e) => {
                                    setNewNomeCategoria(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={atualizarNomeCategoria}
                    >
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* 
/////////////////////////////////////////////////////////////////
//                                                             //
//                   Modal Categoria Em Destaque               //
//                                                             //
/////////////////////////////////////////////////////////////////
            */}

            <Modal
                className="ModalEditar"
                show={destaque}
                onHide={FecharDestaqueModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deixar Em Destaque?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Em Destaque:</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setNewEmDestaque(e.target.value);
                                }}
                            >
                                <option value="0">Selecione...</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={atualizarEmDestaqueCategoria}
                    >
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* 
/////////////////////////////////////////////////////////////////
//                                                             //
//                   Modal Categoria Status                    //
//                                                             //
/////////////////////////////////////////////////////////////////
            */}

            <Modal
                className="ModalEditar"
                show={status}
                onHide={FecharStatusModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Alterando o Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Status:</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setNewStatus(e.target.value);
                                }}
                            >
                                <option value="0">Selecione...</option>
                                <option value="1">Ativado</option>
                                <option value="0">Desativado</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={atualizarStatusCategoria}
                    >
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
export default GetCategoria;
