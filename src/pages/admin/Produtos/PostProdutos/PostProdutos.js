import Axios from "axios";
//Axios

import React, { useState, useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
//Hooks

import { Container, Form, Button, Modal } from "react-bootstrap";
//Bootstrap

import "./PostProdutos.css";
// Css

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
// Componentes

function PostProdutos() {
    //------------------------------------------------------------------//
    //                   UseStates De Cadastro                         //
    //----------------------------------------------------------------//

    const { auth } = useAuth();

    const [idCategoriaProd, setIdCategoriaProd] = useState(1);
    const [nomeProduto, setNomeProduto] = useState();
    const [descProduto, setDescProduto] = useState();
    const [valorProduto, setValorProduto] = useState();
    const [status, setStatus] = useState(0);
    const [emOferta, setEmOferta] = useState(0);
    const [emEstoque, setEmEstoque] = useState(0);
    const [imagemProduto, setImagemProduto] = useState();
    const [errmsg, setErrMsg] = useState(false);

    useEffect(() => {
        setErrMsg(false);
    }, [nomeProduto, descProduto, valorProduto, imagemProduto]);
    //Limpa Mensagens de erro ao digitar nos campos

    function limpar(){
        setImagemProduto();
        setIdCategoriaProd(1);
        setNomeProduto("");
        setDescProduto("");
        setValorProduto("");
    }

    //----------------------------------------------------------------//
    //                   Função De Cadastro                          //
    //--------------------------------------------------------------//
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            cadastarProduto();
        }
        setValidated(true);
    };
    const cadastarProduto = (e) => {
        Axios.post(
            "https://gemeos-server.herokuapp.com/produtos",
            {
                id_categoria: parseInt(idCategoriaProd),
                nome: nomeProduto,
                descricao: descProduto,
                valor: parseFloat(valorProduto),
                status: parseInt(status),
                emOferta: parseInt(emOferta),
                linkImagemProduto: imagemProduto,
                emEstoque: parseInt(emEstoque),
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        )
            .then(() => {
                alert("Produto Adicionado Com Sucesso!");

                limpar();
            })
            .catch((error) => {
                setErrMsg(true);
            });
    };

    //---------------------------------------------------------------//
    //                   Dados Das Categorias                       //
    //-------------------------------------------------------------//

    const [categorias, setcategorias] = useState([]);

    useEffect(() => {
        const getcateg = async () => {
            const res = await fetch(`https://gemeos-server.herokuapp.com/categorias`);
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

    ////////////////////////////////////////
    //                                    //
    //       Abrir e Fechar Modals        //
    //                                    //
    ////////////////////////////////////////

    const [modalImg, setmodalImg] = useState(false);

    const fecharModalImg = () => setmodalImg(false);

    const abrirModalImg = () => setmodalImg(true);

    /*/////////////////////////////////////*/

    return (
        <section className="PostProdutos">
            <NavbarAdm />
            <main className="admGer">
                <Container>
                    <h1 className="TituloProdutos">Cadastro De Produtos</h1>

                    {/*

        ////////////////////////////////////////
        //                                    //
        //         Cadastrar Imagem           //
        //                                    //
        //////////////////////////////////////// 

        */}

                    <div className="container-cadastar">
                        <div className="containerImg">
                            <div className="CadastarImagem">
                                <div
                                    className={`caixa${
                                        errmsg === false ? " " : "Error"
                                    }`}
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
                            </div>

                            <p className="AddImageText">
                                {errmsg === true && (
                                    <label className="requiredText">*</label>
                                )}
                                + Adicione uma imagem
                            </p>
                            {errmsg === true && (
                                <p className="requiredText requiredTextBox">
                                    {" "}
                                    Campos Com * <br /> São Obrigatórios
                                </p>
                            )}
                            <div className="ExibirImagem">
                                <img
                                    src ={imagemProduto? imagemProduto:"https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png"}
                                    height="100%"
                                    width="100%"
                                    alt="img-cadastro"
                                ></img>
                            </div>
                        </div>

                        {/* 

        ////////////////////////////////////////
        //                                    //
        //     Formulario de Cadastro         //
        //                                    //
        //////////////////////////////////////// 

    */}

                        <div className="CadastrarAtributos">
                            <Form
                                className="FormCadastroProd"
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Form.Group
                                    className="mb-3"
                                    controlId="NomeCategoria"
                                >
                                    <Form.Label className="mb-2">
                                        Categoria:
                                    </Form.Label>
                                    <Form.Select
                                        required
                                        id="SelectCategProd"
                                        aria-label="Categoria"
                                        onChange={(e) => {
                                            setIdCategoriaProd(
                                                e.currentTarget.value
                                            );
                                        }}
                                        value={idCategoriaProd}
                                    >
                                        {Categorias.map((item, idx) => (
                                            <option
                                                key={idx}
                                                id={`radioProdCateg-${idx}`}
                                                type="radio"
                                                variant="danger"
                                                name={`${item.Nome_Categoria}`}
                                                value={item.Id_Categoria}
                                            >
                                                {item.Nome_Categoria}
                                            </option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Selecione a categoria
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="NomeProduto"
                                >
                                    <Form.Label className="mb-2">
                                        {errmsg === true && (
                                            <label className="requiredText">
                                                *
                                            </label>
                                        )}
                                        Nome:
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o Nome do Produto ..."
                                        onChange={(e) => {
                                            setNomeProduto(e.target.value);
                                        }}
                                        value={nomeProduto}
                                        required
                                        minLength="1"
                                        maxLength="20"
                                    />
                                    <Form.Control.Feedback>
                                        Parece bom!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Campo inválido
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="DescProduto"
                                >
                                    <Form.Label className="mb-2">
                                        {errmsg === true && (
                                            <label className="requiredText">
                                                *
                                            </label>
                                        )}
                                        Descrição:
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="ex: 200g, 1L, 1Un"
                                        onChange={(e) => {
                                            setDescProduto(e.target.value);
                                        }}
                                        value={descProduto}
                                        required
                                        minLength="1"
                                        maxLength="30"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Campo inválido
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="PrecoProduto"
                                >
                                    <Form.Label className="mb-2">
                                        {errmsg === true && (
                                            <label className="requiredText">
                                                *
                                            </label>
                                        )}
                                        Preço:
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="0.00"
                                        onChange={(e) => {
                                            setValorProduto(e.target.value);
                                        }}
                                        value={valorProduto}
                                        required
                                        minLength="1"
                                        maxLength="5"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Campo inválido
                                    </Form.Control.Feedback>
                                    {errmsg === true && (
                                        <label className="requiredText">
                                            O Preço Deve Ser Inferior ou igual a
                                            9999.99
                                        </label>
                                    )}
                                </Form.Group>

                                <Form.Label className="mb-2">
                                    Status:
                                </Form.Label>
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

                                <Form.Label className="mb-2">
                                    Em Oferta:
                                </Form.Label>
                                <Form.Select
                                    aria-label="Status"
                                    className="mb-3"
                                    onChange={(e) => {
                                        setEmOferta(e.target.value);
                                    }}
                                >
                                    <option value="0">Não</option>
                                    <option value="1">Sim</option>
                                </Form.Select>
                                <Form.Label className="mb-2">
                                    Em Estoque:
                                </Form.Label>
                                <Form.Select
                                    aria-label="Status"
                                    className="mb-3"
                                    onChange={(e) => {
                                        setEmEstoque(e.target.value);
                                    }}
                                >
                                    <option value="0">Não</option>
                                    <option value="1">Sim</option>
                                </Form.Select>

                                <Button
                                    variant="primary"
                                    className="btnCadastrarProd"
                                    type="submit"
                                >
                                    Cadastrar
                                </Button>
                            </Form>
                        </div>
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
                                placeholder="Insira a Url Da Imagem"
                                onChange={(e) => {
                                    setImagemProduto(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        type="submit"
                        className="btn"
                        variant="primary"
                        onClick={fecharModalImg}
                    >
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}
export default PostProdutos;
