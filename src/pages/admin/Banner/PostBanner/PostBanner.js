import Axios from "axios";
//Axios

import React from "react";
//Blibliotecas

import { useState, useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
//Hooks

import { Form, Button, Modal, Container } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
//Componentes

import "./PostBanner.css";
//Css

function PostBanner() {
    //------------------------------------------------------------------//
    //                   UseStates De Cadastro                         //
    //----------------------------------------------------------------//

    const { auth } = useAuth();

    const [nomeBanner, setNomeBanner] = useState();
    const [descBanner, setDescBanner] = useState();
    const [status, setStatus] = useState(0);
    const [imagemBanner, setImagemBanner] = useState();
    const [errmsg, setErrMsg] = useState(false);

    useEffect(() => {
        setErrMsg(false);
    }, [nomeBanner, imagemBanner]);
    //Limpa Mensagens de erro ao digitar nos campos

    //----------------------------------------------------------------//
    //                   Função De Cadastro                          //
    //--------------------------------------------------------------//

    const cadastarBanner = (e) => {
        e.preventDefault();

        Axios.post(
            "http://https://gemeos-server.herokuapp.com/:4000/banners",
            {
                nome: nomeBanner,
                linkBannerImagem: imagemBanner,
                status: parseInt(status),
                descricao: descBanner,
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        )
            .then(() => {
                alert("Banner Adicionado Com Sucesso!");
                window.location.reload();
            })
            .catch((error) => {
                setErrMsg(true);
            });
    };

    ////////////////////////////////////////
    //                                    //
    //       Abrir e Fechar Modals        //
    //                                    //
    ////////////////////////////////////////

    const [modalImg, setModalImg] = useState(false);
    const fecharModalImg = () => {
        setModalImg(false);
    };
    const abrirModalImg = () => setModalImg(true);

    return (
        <section className="PostBanner admGer">
            <NavbarAdm />
            <main className="ContainerPostBanner">
                <Container>
                    <div className="FormCadBanner">
                        <header>
                            <div className="TituloBannerCad">
                                <h1>Novo Banner</h1>
                            </div>
                        </header>
                        <div>
                            <div
                                className={`ContainerAddBanner${
                                    errmsg === false ? " " : "Error"
                                }`}
                                style={{ background: `url(${imagemBanner})` }}
                                onClick={abrirModalImg}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="80"
                                    height="80"
                                    fill="currentColor"
                                    className="bi bi-plus-circle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                            </div>
                        </div>
                        <footer>
                            <div className="AddImageTextDiv">
                                <p className="AddImageText">
                                    {errmsg === true && (
                                        <label className="requiredText">
                                            *
                                        </label>
                                    )}
                                    + Adicione uma imagem
                                </p>
                            </div>
                            {errmsg === true && (
                                <p className="requiredText requiredTextBox">
                                    {" "}
                                    Campos Com * São Obrigatórios
                                </p>
                            )}
                            <Form className="FormBanner">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>
                                        {errmsg === true && (
                                            <label className="requiredText">
                                                *
                                            </label>
                                        )}
                                        Título Banner:
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o título do banner"
                                        onChange={(e) => {
                                            setNomeBanner(e.target.value);
                                        }}
                                        required
                                        maxLength="30"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>
                                        {errmsg === true && (
                                            <label className="requiredText">
                                                *
                                            </label>
                                        )}
                                        Descrição:{" "}
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite a descrição do banner"
                                        onChange={(e) => {
                                            setDescBanner(e.target.value);
                                        }}
                                        required
                                        maxLength="50"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Status: </Form.Label>
                                    <Form.Select
                                        aria-label="Status"
                                        className="mb-3"
                                        onChange={(e) => {
                                            setStatus(e.target.value);
                                        }}
                                    >
                                        <option value="0">Desativado</option>
                                        <option value="1">Ativado</option>
                                    </Form.Select>
                                </Form.Group>
                                <div className="btnCadastarDiv">
                                    <Button
                                        variant="primary"
                                        className="SubmitFormBanner"
                                        type="submit"
                                        onClick={cadastarBanner}
                                    >
                                        Cadastrar
                                    </Button>
                                </div>
                            </Form>
                        </footer>
                    </div>
                </Container>
            </main>

            {/* 

        ////////////////////////////////////////
        //                                    //
        //       Modal Cadastro Imagem        //
        //                                    //
        //////////////////////////////////////// 

    */}

            <Modal
                className="ModalEditar"
                show={modalImg}
                onHide={fecharModalImg}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Imagem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagem:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Insira a Url Da Imagem..."
                                onChange={(e) => {
                                    setImagemBanner(e.target.value);
                                }}
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        className="btn"
                        onClick={fecharModalImg}
                    >
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
export default PostBanner;
