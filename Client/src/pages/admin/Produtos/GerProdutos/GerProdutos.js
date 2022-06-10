import React from "react";
//Blibliotecas

import { useState, useEffect } from "react";
//Hooks

import { Container, Row, Button, Form } from "react-bootstrap";
//Bootstrap


import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
import ProdutosAdm from "../../../../components/admin/Cards/CardsProdutos/ProdutosAdm/ProdutosAdm";
import ProdutosCategAdm from "../../../../components/admin/Cards/CardsProdutos/ProdutosAdm/ProdutosCategAdm";
import { Link } from "react-router-dom"
//Componentes

import "./GerProdutos.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

function GerProdutos() {


    //--------------------------------------------------------------//
    //                        Dados Das Categorias                  //
    //--------------------------------------------------------------//

    const [categorias, setcategorias] = useState([]);


    useEffect(() => {
        const getcateg = async () => {
            const res = await fetch(
                `http://localhost:4000/categorias`
            );
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


    const [search] = useState("");

    const [filterValue, setFilterValue] = useState("0");
    const [categName, setCategName] = useState("0");

    function setCategoria(idCateg) {
        Categorias.forEach(item => {
            if (`${item.Id_Categoria}` === idCateg) {
                setCategName(item.Nome_Categoria)
            }
        });
    }

    return (
        <div id="GerProdutosAdm" className="admGer">

            <NavbarAdm />
            <Container className="GerProdutos">
                <Row className="RowTitleBtn">
                    <h1>Gerenciamento de Produtos</h1>
                    <Button className="NewButtonAdm">
                        <Link className="LinkButtonProduto" to="/Admin/GerenciarProdutos/Cadastrar">Novo Produto</Link>
                    </Button>
                </Row>

                {/* 
                //----------------------------//
                //                            //
                //   Filtro Por Categoria     //
                //                            //
                //----------------------------//
                */}


                <Row className="RowSelectCateg">
                    <label htmlFor="SelectCateg">Selecione a Categoria:</label>
                    <Form.Select
                        id="SelectCateg"
                        className="SelectCateg"
                        aria-label="Categoria"
                        name="formCateg"
                        onChange={(e) => {
                            setFilterValue(e.currentTarget.value)
                            setCategoria(e.currentTarget.value)
                        }
                        }
                    >
                        <option

                            id={'radio-0'}
                            type="radio"
                            variant="danger"
                            value="0"
                            name="10"
                            href="#GerProdutosAdm"

                        >
                            Todos Os Produtos
                        </option>
                        {Categorias.map((item, idx) => (
                            <option
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant="danger"
                                name={`${item.Nome_Categoria}`}
                                value={item.Id_Categoria}
                                checked={filterValue === item.Nome_Categoria}
                                href="#GerProdutosAdm"

                            >
                                {item.Nome_Categoria}
                            </option>

                        ))}
                    </Form.Select>
                </Row>


                {/* 
                //--------------------------------//
                //                                //
                //   Renderização dos Produtos    //
                //                                //
                //--------------------------------//
                */}

            </Container>
            <Container fluid className="GerProdutos">

                {/* Renderização sem Filtro*/}

                <div className="ScrollContent">

                    {filterValue === "0" && (
                        <div className="PedidosAdmContent">
                            <h1 className="h1DestaqueAdm">Todos Os Produtos</h1>
                            <ProdutosAdm
                                busca={search}
                            ></ProdutosAdm>
                        </div>
                    )}

                    {/* Renderização com Filtro*/}

                    {filterValue !== "0" && (
                        <div className="PedidosAdmContent">
                            <h1 className="h1DestaqueAdm">{categName}</h1>
                            <ProdutosCategAdm
                                category={filterValue}
                                busca={search}
                            ></ProdutosCategAdm>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default GerProdutos;
