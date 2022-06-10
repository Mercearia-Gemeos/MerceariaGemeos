import React from "react";
//Blibliotecas

import { useRef, useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
//Hooks

import {useNavigate, useLocation } from "react-router-dom"
//Componentes

import { Form, Button } from "react-bootstrap";
//Bootstrap

import "./LoginAdm.css";
//Importando css

import axios from "../../../LoginApi/axios";
const LOGIN_URL = "/admin/login";
//Axios De Login

function LoginAdm() {

    const { setAuth } = useAuth();
    //Autenticador Global de Adm

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/admin";
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
    //coloca o foco no input de login ao carregar a pagina

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
                JSON.stringify({ login: user, senha: pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            const accessToken = response?.data?.token;
            setAuth({ user, pwd, accessToken });
            setUser("");
            setPwd("");
            navigate(from, { replace: true });
            // Caso Autenticado, Armazena As Informações 
            // e Limpa o campo de login



        } catch (err) {
            if (!err?.response) {
                setErrMsg('Sem Resposta Do Server');    
            } else if (err.response?.status === 400) {
                setErrMsg(' Ausência de Login ou Senha');

            } else if (err.response?.status === 401) {
                setErrMsg(' Login ou Senha Incorretos')
            } else {
                setErrMsg('Falha No Login')
            }
            errRef.current.focus();
            // Caso ocorra alguma falha ao Autenticar
            // recebe a mensagem de erro do servidor
        }
    };

    return (
                <section className="LoginUser">
                    <div className="ContainerLogin">
                        <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive"
                        >
                            {errMsg}
                        </p>
                        {/* Caso Exista uma mensagem de Erro,
                            Renderiza ela para o Usuario */}

                        <h1 className="AdmLogin">Login Admin</h1>
                        <Form className="formLoginAdm" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Login:</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
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
                                />
                            </Form.Group>
                            <div className="btnLoginDiv">
                                <Button
                                    variant="primary"
                                    className="btnLoginAdm"
                                    type="submit"
                                >
                                    Entrar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </section>
    );
}

export default LoginAdm;
