/* eslint-disable eqeqeq */

import React from "react";
//Blibliotecas

import { useState, useEffect } from "react";
//Hooks

import { Container, Button } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";

import { Link } from "react-router-dom";

import useGlobal from "../../../../hooks/useGlobal";
import ReactHtmlTableToExcel from "react-html-table-to-excel";

//Hooks

//Componentes

import "./GerCategorias.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

function GerCategorias() {
    //--------------------------------------------------------------//
    //                        Dados Das Categorias                  //
    //--------------------------------------------------------------//

    const [categorias, setcategorias] = useState([]);
    const { setIdItem } = useGlobal();

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

    /*//////////////////////////////////*/

    return (
        <div className="admGer backgroundad">
            <NavbarAdm />
            {/*

            ===================================================================================
                                Listando todos os registros da tabela categoria
            ===================================================================================
            
            */}
            <main className="MainCategoria">
                <Button className=" btn ButtonNew ">
                    <Link
                        variant="primary"
                        to="/Admin/GerenciarCategorias/Cadastrar"
                    >
                        Nova categoria
                    </Link>
                </Button>
                <Container>
                    <h1 className="TitleCategoria">
                        Gerenciamento De Categorias
                    </h1>
                    <div className="Container-Categoria marginTable">
                        <table className="TabelaCarrinho " id="execel">
                            <tbody>
                                <tr className="LinhaDeCimaTabelaAdm">
                                    <td className="ColunaCarrinho"> ID</td>
                                    <td className="ColunaCarrinho"> NOME</td>

                                    <td className="ColunaCarrinho">
                                        {" "}
                                        ATIVO/ DESATIVADO
                                    </td>
                                    <td className="ColunaCarrinho">
                                        {" "}
                                        EM DESTAQUE
                                    </td>
                                    <td className="ColunaCarrinho"> EDITAR</td>
                                </tr>
                                {Categorias.map((item, idx) => (
                                    <tr
                                        key={idx}
                                        className="linhaTabela BackgroundTabelaCategoria"
                                    >
                                        <td className="ColunaCarrinho linhaGetCategoria">
                                            {" "}
                                            {item.Id_Categoria}{" "}
                                        </td>
                                        <td className="ColunaCarrinho linhaGetCategoria">
                                            {item.Nome_Categoria}
                                        </td>

                                        <td className="ColunaCarrinho linhaGetCategoria">
                                            {item.Status_Categoria == 0
                                                ? "Desativado"
                                                : "Ativo"}
                                        </td>
                                        <td className="ColunaCarrinho linhaGetCategoria">
                                            {item.Em_Destaque == 0
                                                ? "Não"
                                                : "Sim"}
                                        </td>
                                        <td className="ColunaCarrinho linhaGetCategoria resposiva">
                                            <Link
                                                onClick={() => {
                                                    setIdItem(
                                                        item.Id_Categoria
                                                    );
                                                }}
                                                className="btn resposiva"
                                                to="/Admin/GerenciarCategorias/Editar"
                                            >
                                                <Button variant="warning">
                                                    Editar
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <ReactHtmlTableToExcel
                            className="btn btn-light ButtonExportExecel"
                            table="execel"
                            filename="Cetegoria mercearia gemeos"
                            sheet="Sheet"
                            buttonText="Exportar tabela para o excel"
                        />
                    </div>
                </Container>
            </main>
            {/*
            
            =========================================================================================
                                                        FIM
            =========================================================================================
            
            */}
        
        </div>
    );
}

export default GerCategorias;
