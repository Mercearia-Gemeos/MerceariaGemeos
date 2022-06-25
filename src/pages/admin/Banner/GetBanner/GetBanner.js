import Axios from "axios";
//Axios

import React, { useState, useEffect } from "react";
import useGlobal from "../../../../hooks/useGlobal";
import useAuth from "../../../../hooks/useAuth";
//Hooks

import { Form, Button, Modal, Container, Row } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
//Componentes

import Edit from "../../../../assets/img-adm/IconEdit.png";
//Img

import "./GetBanner.css";
//Css

function GetBanner(idBanner) {
    
    const { idItem } = useGlobal();

    idBanner = idItem;

    //--------------------------------------------------------------//
    //                        Dados Do Banner                      //
    //--------------------------------------------------------------//

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const getBanner = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/Banners/${idBanner}`
            );
            const data = await res.json();
            setBanner(data);
        };

        getBanner();
    },[idBanner]);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados do Banner */

    const Banner = banner;

    /////////////////////////////////////////////////////
    //                                                 //
    //           MODAL IMAGEM CONFIGURAÇÕES            //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalImg, setModalImg] = useState(false);
    const fecharModalImg = () => setModalImg(false);
    const abrirModalImg = () => setModalImg(true);

    //////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    //                                                 //
    //           MODAL NOME CONFIGURAÇÕES              //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalNome, setModalNome] = useState(false);
    const fecharModalNome = () => setModalNome(false);
    const abrirModalNome = () => setModalNome(true);

    //////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    //                                                 //
    //           MODAL DESCRIÇÃO CONFIGURAÇÕES         //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalDesc, setModalDesc] = useState(false);
    const fecharModalDesc = () => setModalDesc(false);
    const abrirModalDesc = () => setModalDesc(true);

    //////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    //                                                 //
    //           MODAL STATUS CONFIGURAÇÕES            //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalStatus, setModalStatus] = useState(false);
    const fecharModalStatus = () => setModalStatus(false);
    const abrirModalStatus = () => setModalStatus(true);

    //////////////////////////////////////////////////////

    //------------------------------------------------------------------//
    //                   Updates Dos Banners                           //
    //----------------------------------------------------------------//

    const { auth } = useAuth();

    const [newNomeBanner, setNewNomeBanner] = useState(" ");
    const [newDescBanner, setNewDescBanner] = useState(" ");
    const [newStatus, setNewStatus] = useState(0);
    const [newImagemBanner, setNewImagemBanner] = useState(" ");

    ////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                    //
    //                                                                                    //
    //                                PATCHS PARA A API                                   //
    //                                                                                    //
    //                                                                                    //
    ////////////////////////////////////////////////////////////////////////////////////////

    //--------------------------------------------------------------//
    //                    Update Imagem Banner                      //
    //--------------------------------------------------------------//

    const atualizarImgBanner = (e) => {
        e.preventDefault();
        Axios.patch("https://gemeos-server.herokuapp.com/banners/updateImg", {
            linkBannerImagem: newImagemBanner,
            id_banner: parseInt(idBanner),
        },{
            headers: { 'Authorization':  `Bearer ${auth.accessToken}` }
        }).then(() => {
            alert("Imagem Do Banner Alterada Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Nome Banner                        //
    //--------------------------------------------------------------//

    const atualizarNomeBanner = (e) => {
        e.preventDefault();
        Axios.patch("https://gemeos-server.herokuapp.com/banners/updateNome", {
            nome: newNomeBanner,
            id_banner: parseInt(idBanner),
        },{
            headers: { 'Authorization':  `Bearer ${auth.accessToken}` }
        }).then(() => {
            alert("Nome Do Banner Alterado Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Descrição Produto                  //
    //--------------------------------------------------------------//

    const atualizarDescBanner = (e) => {
        e.preventDefault();
        Axios.patch("https://gemeos-server.herokuapp.com/banners/updateDesc", {
            descricao: newDescBanner,
            id_banner: parseInt(idBanner),
        },{
            headers: { 'Authorization':  `Bearer ${auth.accessToken}` }
        }).then(() => {
            alert("Descrição Do Produto Alterado Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Status Banner                      //
    //--------------------------------------------------------------//

    const atualizarStatusBanner = (e) => {
        e.preventDefault();
        Axios.patch("https://gemeos-server.herokuapp.com/banners/updateStatus", {
            status: newStatus,
            id_banner: parseInt(idBanner),
        },{
            headers: { 'Authorization':  `Bearer ${auth.accessToken}` }
        }).then(() => {
            alert("Status Do Banner Alterado Com Sucesso!");
        });
    };

    return (
        <section className="GetBanner admGer">
            <NavbarAdm />
            <main className="ContainerGetBanner">
                {/* 

    ////////////////////////////////////////////////////////////////////////////
    //                                                                        //
    //                          Formularios De Display                        //
    //                                                                        //
    ////////////////////////////////////////////////////////////////////////////
    
    */}

                {Banner.map((item, idx) => (
                    <Container key={idx}>
                        <div className="FormUpdateBanner">
                            <header>
                                <div className="TituloBannerUpdate">
                                    <h1>Editar Banner</h1>
                                </div>
                            </header>
                            <main>
                                <Row className="RowImgEditBanner">
                                    <div className="ContainerExibirBanner">
                                        <img
                                            src={item.Link_Banner_Imagem}
                                            alt={item.Nome}
                                            className="ImagemExibirBanner"
                                        />
                                    </div>
                                    <div
                                        className="ContainerUpdateBanner"
                                        onClick={abrirModalImg}
                                    >
                                        <svg
                                            xmlns="https://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            fill="currentColor"
                                            className="bi bi-plus-circle-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                        </svg>
                                    </div>
                                </Row>
                            </main>
                            <footer>
                                <Form className="FormBannerEdit">
                                    <Form.Group
                                        className="mb-2"
                                        controlId="formBannerEdit"
                                    >
                                        <div className="ConjuntoForm">
                                            <div className="labelBanner">
                                                <Form.Label>
                                                    Título Banner:
                                                </Form.Label>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                defaultValue={item.Nome}
                                                disabled
                                            />
                                            <div
                                                className="IconeEditar"
                                                onClick={abrirModalNome}
                                            >
                                                <img
                                                    src={Edit}
                                                    alt="Edit"
                                                    className="EditImagem"
                                                ></img>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-2"
                                        controlId="formBannerEdit"
                                    >
                                        <div className="ConjuntoForm">
                                            <div className="labelBanner">
                                                <Form.Label>
                                                    Descrição:{" "}
                                                </Form.Label>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                defaultValue={item.Descricao}
                                                disabled
                                            />
                                            <div
                                                className="IconeEditar"
                                                onClick={abrirModalDesc}
                                            >
                                                <img
                                                    src={Edit}
                                                    alt="Edit"
                                                    className="EditImagem"
                                                ></img>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-2"
                                        controlId="formBannerEdit"
                                    >
                                        <div className="ConjuntoForm">
                                            <div className="labelBanner mgdw">
                                                <Form.Label>
                                                    Status:{" "}
                                                </Form.Label>
                                            </div>
                                            <Form.Select
                                                aria-label="Status"
                                                className="mb-3"
                                                disabled
                                            >
                                                {item.Status_Banner === 1 && (
                                                    <option value="1">
                                                        Ativado
                                                    </option>
                                                )}
                                                {item.Status_Banner === 0 && (
                                                    <option value="0">
                                                        Desativado
                                                    </option>
                                                )}
                                            </Form.Select>
                                            <div
                                                className="IconeEditar mgdw"
                                                onClick={abrirModalStatus}
                                            >
                                                <img
                                                    src={Edit}
                                                    alt="Edit"
                                                    className="EditImagem"
                                                ></img>
                                            </div>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </footer>
                        </div>
                        <br />
                    </Container>
                ))}
            </main>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA ADICIONAR UMA IMAGEM              //
            ///////////////////////////////////////////////////////////////////

            */}
            <Modal
                className="ModalEditar"
                show={modalImg}
                onHide={fecharModalImg}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Alterar Imagem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBannerEdit">
                            <Form.Label>Imagem:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite a url da imagem"
                                onChange={(e) => {
                                    setNewImagemBanner(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarImgBanner}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA EDITAR NOME                       //
            ///////////////////////////////////////////////////////////////////

            */}

            <Modal
                className="ModalEditar"
                show={modalNome}
                onHide={fecharModalNome}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Nome</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBannerEdit">
                            <Form.Label>Novo Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o novo Nome ..."
                                onChange={(e) => {
                                    setNewNomeBanner(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarNomeBanner}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA EDITAR DESCRIÇÃO                  //
            ///////////////////////////////////////////////////////////////////

            */}

            <Modal
                className="ModalEditar"
                show={modalDesc}
                onHide={fecharModalDesc}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Descrição</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBannerEdit">
                            <Form.Label>Nova Descrição</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite a nova Descrição ..."
                                onChange={(e) => {
                                    setNewDescBanner(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarDescBanner}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA EDITAR STATUS                     //
            ///////////////////////////////////////////////////////////////////

            */}

            <Modal
                className="ModalEditar"
                show={modalStatus}
                onHide={fecharModalStatus}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBannerEdit">
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
                    <Button variant="primary" onClick={atualizarStatusBanner}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
export default GetBanner;
