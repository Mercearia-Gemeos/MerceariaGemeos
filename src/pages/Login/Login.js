import React from "react";
//Blibliotecas

import { useRef, useState, useEffect } from "react";
import useStore from "../../hooks/useStore";
//Hooks

import FooterCli from "../../components/client/footer/FooterCli";
import NavbarPrincipal from "../../components/client/navbars/navbar-principal/NavbarPrincipal";
import NavbarEstatico from "../../components/client/navbars/navbar-estatico/NavbarEstatico";

import { useNavigate, useLocation, Link } from "react-router-dom";
//Componentes

import { Container, Form, Button } from "react-bootstrap";
//Bootstrap

import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

import axios from "../../LoginApi/axios";
const LOGIN_URL = "/cliente/login";
//Axios De Login

function Login() {
    const { setAuthCli } = useStore();
    //Autenticador Global de Adm

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // Depois de Logado, Redireciona para a página que
    // teve  o acesso barrado, ou para a Main Admin

    const userRef = useRef();
    const errRef = useRef();
    //Definições de Foco com a tecla Tab

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    //UseStates de Login

    useEffect(() => {
        userRef.current.focus();
    }, []);
    //Coloca o foco no input de login ao carregar a pagina

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);
    //Limpa Mensagens de erro ao digitar nos campos

    /////////////////////////////////
    //                             //
    //   Função de Autenticação    //
    //                             //
    /////////////////////////////////

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ email: user, senha: pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            const accessToken = response?.data?.tokenCli;
            const name = response?.data?.nome;
            const id = response?.data?.idCli;
            setAuthCli({ user, pwd, id, name, accessToken });
            setUser("");
            setPwd("");
            navigate(from, { replace: true });
            // Caso Autenticado, Armazena As Informações
            // e Limpa o campo de login
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Sem Resposta Do Server");
            } else if (err.response?.status === 400) {
                setErrMsg("Ausência de Login ou Senha");
            } else if (err.response?.status === 401) {
                setErrMsg(" Login ou Senha Incorretos");
            } else {
                setErrMsg("Falha No Login");
            }
            errRef.current.focus();
            // Caso ocorra alguma falha ao Autenticar
            // recebe a mensagem de erro do servidor
        }
    };

    // Trabalhando com JSX
    return (
        <main className="LoginPageCli">
            <NavbarEstatico />
            <NavbarPrincipal />
            <Container className="contentLogin">
                <div className="ContainerCliLogin">
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    {/* Caso Exista uma mensagem de Erro,
                            Renderiza ela para o Usuario */}

                    <h1 className="CliLogin">Faça Seu Login</h1>
                    <Form className="formLoginCli" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="text"
                                id="email"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                className="form-controlCli"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                className="form-controlCli"
                            />
                        </Form.Group>
                        <div className="btnLoginDiv">
                            <Button
                                variant="danger"
                                className="btnLoginCli"
                                type="submit"
                            >
                                Entrar
                            </Button>
                        </div>
                        <div>
                            <p className="LinkCadastro">
                                Precisa De Uma Conta? <br />
                                <span className="line">
                                    <Link to="/cadastro">Cadastre-se</Link>
                                </span>
                            </p>
                        </div>
                    </Form>
                </div>
            </Container>
            <FooterCli />
        </main>
    );
}

export default Login;
