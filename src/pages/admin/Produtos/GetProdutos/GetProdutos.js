import Axios from "axios";
//Axios

import React, { useState, useEffect } from "react";
import useGlobal from "../../../../hooks/useGlobal";
import useAuth from "../../../../hooks/useAuth";
//Hooks

import { Container, Modal, Form, Button } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
//Componentes

import "./GetProdutos.css";
//Css

import Edit from "../../../../assets/img-adm/IconEdit.png";
import Add from "../../../../assets/img-adm/add.png";
//Img

function GetProdutos(idProd) {
    
    const { idItem } = useGlobal();

    idProd = idItem;

    //--------------------------------------------------------------//
    //                        Dados Do Produto                      //
    //--------------------------------------------------------------//

    const [produto, setProduto] = useState([]);

    useEffect(() => {
        const getProd = async () => {
            const res = await fetch(`http://localhost:4000/produtos/${idProd}`);
            const data = await res.json();
            setProduto(data);
        };

        getProd();
    },[idProd]);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados do Produto */

    const Produto = produto;

    /*/////////////////////////////////////*/

    //---------------------------------------------------------------//
    //                   Dados Das Categorias                       //
    //-------------------------------------------------------------//

    const [categorias, setcategorias] = useState([]);

    useEffect(() => {
        const getcateg = async () => {
            const res = await fetch(`http://localhost:4000/categorias`);
            const data = await res.json();
            setcategorias(data);
        };

        getcateg();
    }, []);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados das Categorias */

    const Categorias = categorias;

    /*/////////////////////////////////////*/

    const [filterValue] = useState("0");

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
    //           MODAL CATEGORIA CONFIGURAÇÕES         //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalCateg, setModalCateg] = useState(false);
    const fecharModalCateg = () => setModalCateg(false);
    const abrirModalCateg = () => setModalCateg(true);

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
    //           MODAL PREÇO CONFIGURAÇÕES             //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalPreco, setModalPreco] = useState(false);
    const fecharModalPreco = () => setModalPreco(false);
    const abrirModalPreco = () => setModalPreco(true);

    //////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    //                                                 //
    //           MODAL STATUS CONFIGURAÇÕES             //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalStatus, setModalStatus] = useState(false);
    const fecharModalStatus = () => setModalStatus(false);
    const abrirModalStatus = () => setModalStatus(true);

    //////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    //                                                 //
    //           MODAL EM OFERTA CONFIGURAÇÕES         //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalEmOferta, setModalEmOferta] = useState(false);
    const fecharModalEmOferta = () => setModalEmOferta(false);
    const abrirModalEmOferta = () => setModalEmOferta(true);

    //////////////////////////////////////////////////////

    /////////////////////////////////////////////////////
    //                                                 //
    //           MODAL EM ESTOQUE CONFIGURAÇÕES        //
    //                                                 //
    /////////////////////////////////////////////////////

    const [modalEmEstoque, setModalEmEstoque] = useState(false);
    const fecharModalEmEstoque = () => setModalEmEstoque(false);
    const abrirModalEmEstoque = () => setModalEmEstoque(true);

    //////////////////////////////////////////////////////

    //--------------------------------------------------------------//
    //                    Update Dos Produtos                       //
    //--------------------------------------------------------------//

    const { auth } = useAuth();

    const [newIdCategoriaProd, setNewIdCategoriaProd] = useState(0);
    const [newNomeProduto, setNewNomeProduto] = useState(" ");
    const [newDescProduto, setNewDescProduto] = useState(" ");
    const [newValorProduto, setNewValorProduto] = useState(0.0);
    const [newStatus, setNewStatus] = useState(0);
    const [newEmOferta, setNewEmOferta] = useState(0);
    const [newImagemProduto, setNewImagemProduto] = useState(" ");
    const [newEmEstoque, setNewEmEstoque] = useState(0);

    ////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                    //
    //                                                                                    //
    //                                PATCHS PARA A API                                   //
    //                                                                                    //
    //                                                                                    //
    ////////////////////////////////////////////////////////////////////////////////////////

    //--------------------------------------------------------------//
    //                    Update Imagem Produto                     //
    //--------------------------------------------------------------//

    const atualizarImgProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateImg",
            {
                linkImagemProduto: newImagemProduto,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Imagem Do Produto Alterada Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Categoria Produto                  //
    //--------------------------------------------------------------//

    const atualizarCategProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateCategoria",
            {
                id_categoria: newIdCategoriaProd,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Categoria Do Produto Alterada Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Nome Produto                       //
    //--------------------------------------------------------------//

    const atualizarNomeProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateNome",
            {
                nome: newNomeProduto,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Nome Do Produto Alterado Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Descrição Produto                  //
    //--------------------------------------------------------------//

    const atualizarDescProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateDesc",
            {
                descricao: newDescProduto,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Descrição Do Produto Alterado Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Preço Produto                      //
    //--------------------------------------------------------------//

    const atualizarPrecoProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateValor",
            {
                valor: newValorProduto,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Preço Do Produto Alterado Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Status Produto                     //
    //--------------------------------------------------------------//

    const atualizarStatusProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateStatus",
            {
                status: newStatus,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Status Do Produto Alterado Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Em Oferta Produto                  //
    //--------------------------------------------------------------//

    const atualizarEmOfertaProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateEmOferta",
            {
                emOferta: newEmOferta,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Campo 'Em Oferta' Do Produto Alterado Com Sucesso!");
        });
    };

    //--------------------------------------------------------------//
    //                    Update Em Estoque Produto                  //
    //--------------------------------------------------------------//

    const atualizarEmEstoqueProduto = (e) => {
        e.preventDefault();
        Axios.patch(
            "http://localhost:4000/produtos/updateEmEstoque",
            {
                emEstoque: newEmEstoque,
                id_produto: parseInt(idProd),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        ).then(() => {
            alert("Campo 'Em Estoque' Do Produto Alterado Com Sucesso!");
        });
    };

    return (
        <section className="DetalhesProdutos">
            <NavbarAdm />
            <main className="admGer">
                {/* 

    ////////////////////////////////////////////////////////////////////////////
    //                                                                        //
    //                          Formularios De Display                        //
    //                                                                        //
    ////////////////////////////////////////////////////////////////////////////
    
    */}
                {Produto.map((item, idx) => (
                    <Container key={idx}>
                        <h1 className="TituloProduto">Editar Produto</h1>

                        <div className="ContainerExibir">
                            <div className="ImagemContainer">
                                <div
                                    className="AddImagem"
                                    onClick={abrirModalImg}
                                >
                                    <img
                                        src={Add}
                                        alt="AddImage"
                                        className="imgAdd"
                                    />
                                </div>

                                <div key={idx} className="ExibirImagem">
                                    <img
                                        className="ImagemProd"
                                        src={item.Link_Imagem_Produto}
                                        alt="Imagem Produto"
                                    />
                                </div>
                            </div>
                            <div className="ExibirForm">
                                <Form className="FormCadastroProdEdit">
                                    {/*

            //////////////////////////////////////////////////
            //               Campo Categoria                //
            //////////////////////////////////////////////////

            */}

                                    <div className="ConjuntoForm">
                                        <div className="labelprod">
                                            <Form.Label className="mb-2">
                                                Categoria:
                                            </Form.Label>
                                        </div>
                                        <Form.Select
                                            aria-label="Categoria"
                                            disabled
                                        >
                                            <option
                                                defaultValue={item.Id_Categoria}
                                            >
                                                {item.Nome_Categoria}
                                            </option>
                                        </Form.Select>
                                        <div className="IconeEditar ">
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                                onClick={abrirModalCateg}
                                            ></img>
                                        </div>
                                    </div>

                                    {/*

            //////////////////////////////////////////////////
            //               Campo Nome                     //
            //////////////////////////////////////////////////

        */}

                                    <div className="ConjuntoForm">
                                        <div className="labelprod">
                                            <Form.Label className="mb-2">
                                                Nome:
                                            </Form.Label>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            placeholder=" "
                                            defaultValue={item.Nome_Produto}
                                            disabled
                                        />
                                        <div className="IconeEditar">
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                                onClick={abrirModalNome}
                                            ></img>
                                        </div>
                                    </div>

                                    {/*

            //////////////////////////////////////////////////
            //               Campo Descrição                //
            //////////////////////////////////////////////////

        */}

                                    <div className="ConjuntoForm">
                                        <div className="labelprod">
                                            <Form.Label className="mb-2">
                                                Descrição:
                                            </Form.Label>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            placeholder=" "
                                            disabled
                                            defaultValue={item.Descricao}
                                        />
                                        <div className="IconeEditar">
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                                onClick={abrirModalDesc}
                                            ></img>
                                        </div>
                                    </div>

                                    {/*

            //////////////////////////////////////////////////
            //               Campo Preço                    //
            //////////////////////////////////////////////////

        */}

                                    <div className="ConjuntoForm">
                                        <div className="labelprod">
                                            <Form.Label className="mb-2">
                                                Preço:
                                            </Form.Label>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            disabled
                                            defaultValue={item.Valor}
                                        />
                                        <div className="IconeEditar">
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                                onClick={abrirModalPreco}
                                            ></img>
                                        </div>
                                    </div>

                                    {/*

            //////////////////////////////////////////////////
            //               Campo Status                   //
            //////////////////////////////////////////////////

        */}

                                    <div className="ConjuntoForm">
                                        <div className="labelprod">
                                            <Form.Label className="mb-2">
                                                Status:
                                            </Form.Label>
                                        </div>
                                        <Form.Select
                                            aria-label="Status"
                                            disabled
                                        >
                                            {item.Status_Produto === 1 && (
                                                <option value="1">
                                                    Ativado
                                                </option>
                                            )}
                                            {item.Status_Produto === 0 && (
                                                <option value="0">
                                                    Desativado
                                                </option>
                                            )}
                                        </Form.Select>
                                        <div className="IconeEditar mgdw">
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem"
                                                onClick={abrirModalStatus}
                                            ></img>
                                        </div>
                                    </div>

                                    {/*

            //////////////////////////////////////////////////
            //               Campo Em Oferta                //
            //////////////////////////////////////////////////

        */}

                                    <div className="ConjuntoForm">
                                        <div className="labelprod">
                                            <Form.Label className="mb-2">
                                                Em Oferta:
                                            </Form.Label>
                                        </div>
                                        <Form.Select
                                            aria-label="Em Oferta:"
                                            className="mb-3 "
                                            disabled
                                        >
                                            {item.Em_Oferta === 1 && (
                                                <option value="1">Sim</option>
                                            )}
                                            {item.Em_Oferta === 0 && (
                                                <option value="0">Não</option>
                                            )}
                                        </Form.Select>
                                        <div className="IconeEditar mgdw">
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem "
                                                onClick={abrirModalEmOferta}
                                            ></img>
                                        </div>
                                    </div>

                                    {/*

            //////////////////////////////////////////////////
            //               Campo Em Estoque               //
            //////////////////////////////////////////////////

        */}

                                    <div className="ConjuntoForm">
                                        <div className="labelprod">
                                            <Form.Label className="mb-2">
                                                Em Estoque:
                                            </Form.Label>
                                        </div>
                                        <Form.Select
                                            aria-label="Em Estoque:"
                                            className="mb-3 "
                                            disabled
                                        >
                                            {item.Em_Estoque === 1 && (
                                                <option value="1">Sim</option>
                                            )}
                                            {item.Em_Estoque === 0 && (
                                                <option value="0">Não</option>
                                            )}
                                        </Form.Select>
                                        <div className="IconeEditar mgdw">
                                            <img
                                                src={Edit}
                                                alt="Edit"
                                                className="EditImagem "
                                                onClick={abrirModalEmEstoque}
                                            ></img>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagem:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite a url da imagem"
                                onChange={(e) => {
                                    setNewImagemProduto(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarImgProduto}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA EDITAR CATEGORIA                  //
            ///////////////////////////////////////////////////////////////////

            */}

            <Modal
                className="ModalEditar"
                show={modalCateg}
                onHide={fecharModalCateg}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Categoria:</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setNewIdCategoriaProd(e.target.value);
                                }}
                            >
                                {Categorias.map((item, idx) => (
                                    <option
                                        key={idx}
                                        id={`radioProdCateg-${idx}`}
                                        type="radio"
                                        variant="danger"
                                        name={`${item.Nome_Categoria}`}
                                        value={item.Id_Categoria}
                                        checked={
                                            filterValue === item.Nome_Categoria
                                        }
                                    >
                                        {item.Nome_Categoria}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarCategProduto}>
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Novo Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o novo Nome ..."
                                onChange={(e) => {
                                    setNewNomeProduto(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarNomeProduto}>
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nova Descrição</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite a nova Descrição ..."
                                onChange={(e) => {
                                    setNewDescProduto(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarDescProduto}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA EDITAR PREÇO                      //
            ///////////////////////////////////////////////////////////////////

            */}

            <Modal
                className="ModalEditar"
                show={modalPreco}
                onHide={fecharModalPreco}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Preço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Novo Preço:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o Novo Preço..."
                                onChange={(e) => {
                                    setNewValorProduto(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={atualizarPrecoProduto}>
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    <Button variant="primary" onClick={atualizarStatusProduto}>
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA EDITAR EM OFERTA                  //
            ///////////////////////////////////////////////////////////////////

            */}

            <Modal
                className="ModalEditar"
                show={modalEmOferta}
                onHide={fecharModalEmOferta}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Deixar Em Oferta?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setNewEmOferta(e.target.value);
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
                        onClick={atualizarEmOfertaProduto}
                    >
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*

            ///////////////////////////////////////////////////////////////////
            //                  MODAL PARA EDITAR EM OFERTA                  //
            ///////////////////////////////////////////////////////////////////

            */}

            <Modal
                className="ModalEditar"
                show={modalEmEstoque}
                onHide={fecharModalEmEstoque}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Está Em Estoque?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Select
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setNewEmEstoque(e.target.value);
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
                        onClick={atualizarEmEstoqueProduto}
                    >
                        Atualizar
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
export default GetProdutos;
