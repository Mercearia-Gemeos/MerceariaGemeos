import Axios from "axios";
//Axios

import React, { useState, useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
//Hooks

import { Form, Button } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
// Componentes

import "./PostCategoria.css";
//Css

function PostCategoria() {
    //------------------------------------------------------------------//
    //                   UseStates De Cadastro                         //
    //----------------------------------------------------------------//

    const { auth } = useAuth();

    const [nomeCategoria, setNomeCategoria] = useState();
    const [emDestaque, setEmDestaque] = useState(0);
    const [status, setStatus] = useState(0);
    const [errmsg, setErrMsg] = useState(false);

    useEffect(() => {
        setErrMsg(false);
    }, [nomeCategoria]);
    //Limpa Mensagens de erro ao digitar nos campos

    //----------------------------------------------------------------//
    //                   Função De Cadastro                          //
    //--------------------------------------------------------------//

    const cadastrarCategoria = (e) => {
        Axios.post(
            "http://https://gemeos-server.herokuapp.com/:4000/categorias",
            {
                nome: nomeCategoria,
                emDestaque: emDestaque,
                status: status,
            },
            {
                headers: { Authorization: `Bearer ${auth.accessToken}` },
            }
        )
            .then(response => {
                const id = response.data.Id_Categoria;
                alert(`Categoria inserda com  Sucesso Com o Id: ${id}`)

            })
            .catch((error) => {
                setErrMsg(true);
            });
    };

    return (
        <section className="PostCategoria">
            <NavbarAdm />
            <main className="admGer">
                <div className="MainGetCategoria">
                    {errmsg === true && (
                        <p className="requiredText requiredTextBoxOut">
                            {" "}
                            Campos Com * São Obrigatórios
                        </p>
                    )}
                    <div className="FormCategCad">
                        <h1 className="TitleCadCategoria"> Nova Categoria</h1>
                        <Form>
                            <div className="inputCadCateg">
                                <div className="JuntarLabelIcon">
                                    <Form.Group
                                        className="mb-3 InputFormCat"
                                        controlId="NomeCategoria"
                                    >
                                        <Form.Label className="LabelCategoria">
                                            {errmsg === true && (
                                                <label className="requiredText">
                                                    *
                                                </label>
                                            )}
                                            Nome Da Categoria:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Nome categoria"
                                            onChange={(e) => {
                                                setNomeCategoria(
                                                    e.target.value
                                                );
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="inputCadCateg">
                                <label className="LabelCategoria" id="Destaque">
                                    Em destaque:
                                </label>
                                <div className="JuntarLabelIcon">
                                    <Form.Select
                                        aria-label="Em Destaque"
                                        onChange={(e) => {
                                            setEmDestaque(e.target.value);
                                        }}
                                    >
                                        <option value="0">Não</option>
                                        <option value="1">Sim</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="inputCadCateg">
                                <label className="LabelCategoria" id="Status">
                                    Status:
                                </label>
                                <div className="JuntarLabelIcon">
                                    <Form.Select
                                        aria-label="Status"
                                        onChange={(e) => {
                                            setStatus(e.target.value);
                                        }}
                                    >
                                        <option value="0">Desativado</option>
                                        <option value="1">Ativado</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="btnCadastarDiv">
                                <Button
                                    variant="primary"
                                    className="SubmitFormCat"
                                    onClick={cadastrarCategoria}
                                >
                                    Cadastrar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </main>
        </section>
    );
}
export default PostCategoria;
