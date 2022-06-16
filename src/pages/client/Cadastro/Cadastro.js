import Axios from "axios";
//Axios

import React from "react";
//Blibliotecas

import { Container, Form, Row, Col, Button } from "react-bootstrap";
//Bootstrap

import { useEffect, useState } from "react";
//Hooks

import FooterCli from "../../../components/client/footer/FooterCli";
import NavbarPrincipal from "../../../components/client/navbars/navbar-principal/NavbarPrincipal";
import NavbarEstatico from "../../../components/client/navbars/navbar-estatico/NavbarEstatico";
import { Link } from "react-router-dom";
//Componentes


import { cpfMask } from "../../../components/Maks/cpfMaks";
import { cepMask } from "../../../components/Maks/cepMaks";
// Maks
import "./Cadastro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import createPalette from "@mui/material/styles/createPalette";
//CSS

function Cadastro() {
    //------------------------------------------------------------------//
    //                   UseStates De Cadastro                         //
    //----------------------------------------------------------------//

    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpfCli, setCpf] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confSenha, setConfSenha] = useState();
    const [endereco, setEndereco] = useState();
    const [celular, setCelular] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [uf, setUf] = useState();
    const [cep, setCep] = useState();
    const [logado, setLogado] = useState(false);
    const [errSenha, setErrSenha] = useState(false);
    const [errmsg, setErrMsg] = useState(false);
    const [errtxt, setErrTxt] = useState(false);

    useEffect(() => {
        setErrMsg(false);
    }, [cpfCli, email]);

    useEffect(() => {
        setErrSenha(false);
    }, [senha, confSenha]);

    //Limpa Mensagens de erro ao digitar nos campos

    //----------------------------------------------------------------//
    //                   Função De Cadastro                          //
    //--------------------------------------------------------------//

    const cadastrarCliente = (e) => {


        if (senha !== confSenha) {
            setErrSenha(true);
        } else {
            Axios.post("http://localhost:4000/cliente/cadastrar", {
                email,
                senha,
                cpfCli,
                nome,
                sobrenome,
                endereco,
                bairro,
                cidade,
                cep,
                uf,
                celular,
            })
                .then(() => {
                    setLogado(true);
                })
                .catch((error) => {
                    if (!error?.response) {
                        setErrTxt("Sem Resposta Do Server");
                    } else if (error.response?.status === 500) {
                        setErrTxt("Campos Com * São Obrigatórios");
                    } else if (error.response?.status === 409) {
                        setErrTxt("Email, ou Cpf Já Cadastrados");
                    } else {
                        setErrTxt("Falha No Cadastro");
                    }
                    setErrMsg(true);
                });
        }
    };
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            cadastrarCliente();
        }
        setValidated(true);
    };

    return (
        <div>
            <NavbarEstatico />
            <NavbarPrincipal />
            {logado ? (
                <div className="contentLoginSucesso">
                    <Container>
                        <Container className="ContainerLogadoSucesso">
                            <p className="PLogin">Logado Com Sucesso!</p>
                            <p className="PLogin">
                                Agora Você Pode Fazer{" "}
                                <Link to="/login">Login</Link>
                            </p>
                        </Container>
                    </Container>
                </div>
            ) : (
                <div>
                    <div className="ContainerCliCadastro">
                        {errmsg === true && (
                            <p className="requiredText requiredTextBox">
                                {" "}
                                {errtxt}
                            </p>
                        )}
                        <Container className="contentCadastro">
                            <h1 className="formCadTitle">Dados Cadastrais</h1>
                            <Form
                                className="borderCadForm"
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Row className="mb-3">
                                    {/*============================================================================= ======================
                                                                                        PRIMEIRO CAMPO DO FORUMÁLRIO 
                                                                                            CAMPO PRIMEIRO NOME
                                        ===============================================================================================================*/}
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="validationCustom01"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {
                                                // Casso os formulário estiver vazio manda esse *
                                            }
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Nome:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Digite Seu Nome"
                                            className="formCadInput"
                                            required
                                            maxLength="30"
                                            onChange={(e) => {
                                                setNome(e.target.value);
                                            }}
                                        />
                                        <Form.Control.Feedback>
                                            Parece bom!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    {/*===============================================================================================
                                                FIM DO CAMPO PRIMEIRO NOME
                                    ======================================================== ===================================================*/}
                                    {/*========================================
                                                Campo sobre nome
                                    =====================================*/}
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formSobrenome"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Sobrenome:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Digite Seu Sobrenome"
                                            required
                                            maxLength="30"
                                            minlenght="3"
                                            className="formCadInput"
                                            onChange={(e) => {
                                                setSobrenome(e.target.value);
                                            }}
                                        />
                                        <Form.Control.Feedback>
                                            Parece bom!
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {
                                        //*Fim campo sugundo nome
                                    }
                                </Row>

                                <Row className="mb-3">
                                    {/*=========================================================
                                                        CAMPO CPF
                                ============================================================*/}
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formCpf"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            CPF:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="xxx.xxx.xxx-xx"
                                            //pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                            required
                                            maxLength="14"
                                            className="formCadInput"
                                            value={cpfCli}
                                            onChange={(e) => {
                                                setCpf(cpfMask(e.target.value));
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Campo inválido. Atenção no nosso
                                            Formato xxx.xxx.xxx-xx
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    {/*=========================================================
                                                    FIM DO CAMPO CPF
                                ============================================================*/}
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formEmail"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Email:
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Digite Seu Email"
                                            required
                                            maxLength="40"
                                            className="formCadInput"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Email inválido!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formSenha"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errSenha === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Senha:
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Digite Sua Senha"
                                            required
                                            maxLength="30"
                                            className="formCadInput"
                                            onChange={(e) => {
                                                setSenha(e.target.value);
                                            }}
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formConfirmSenha"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errSenha === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Confirme Sua Senha:
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirme Sua Senha"
                                            required
                                            maxLength="30"
                                            className="formCadInput"
                                            onChange={(e) => {
                                                setConfSenha(e.target.value);
                                            }}
                                        />
                                        {errSenha === true && (
                                            <label className="requiredText">
                                                *As Senhas não Conferem
                                            </label>
                                        )}
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formEndereco"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Endereço:
                                        </Form.Label>
                                        <Form.Control
                                            placeholder="Rua das pedras, 65"
                                            required
                                            maxLength="50"
                                            className="formCadInput"
                                            onChange={(e) => {
                                                setEndereco(e.target.value);
                                            }}
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formCelular"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Celular:
                                        </Form.Label>
                                        <Form.Control
                                            placeholder="(00) 00000-0000"
                                            pattern="\d{0}\(\d{2}\)\d{5}-\d{4}"
                                            required
                                            maxLength="14"
                                            id="telefone"
                                            className="formCadInput"
                                            onChange={(e) => {
                                                setCelular(e.target.value);
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Formato inválido. Exemplo do
                                            formato: (00)00000-000
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formBairro"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Bairro:
                                        </Form.Label>
                                        <Form.Control
                                            className="formCadInput"
                                            placeholder="Digite seu Bairro"
                                            required
                                            maxLength="50"
                                            onChange={(e) => {
                                                setBairro(e.target.value);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formCidade"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Cidade:
                                        </Form.Label>
                                        <Form.Control
                                            className="formCadInput"
                                            placeholder=" Digite sua Cidade"
                                            required
                                            maxLength="30"
                                            onChange={(e) => {
                                                setCidade(e.target.value);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formUf"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            UF:
                                        </Form.Label>
                                        <Form.Control
                                            className="formCadInput"
                                            placeholder="SP, RJ..."
                                            required
                                            maxLength="2"
                                            onChange={(e) => {
                                                setUf(e.target.value);
                                            }}
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        className="formCadInputBody"
                                        controlId="formCep"
                                    >
                                        <Form.Label className="formCadLabel">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            CEP:
                                        </Form.Label>
                                        <Form.Control
                                            className="formCadInput"
                                            placeholder="00000-000"
                                            required
                                            maxLength="9"
                                            id="cep"
                                            value={cep}
                                            onChange={(e) => {
                                                setCep(cepMask(e.target.value));
                                            }}
                                        />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Button
                                            variant="danger"
                                            className="btn btnCadCli"
                                            type="submit"
                                        >
                                            Avançar
                                        </Button>
                                    
                                    </Col>
                                    <Col>
                                        <p className="PLogin">
                                            Já tem Uma Conta? Faça{" "}
                                            <Link to="/login">Login</Link>
                                        </p>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>
            )}
            <FooterCli />
        </div>
    );
}

export default Cadastro;
