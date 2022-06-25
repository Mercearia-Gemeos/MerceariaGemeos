import React from "react";
//Blibliotecas

import {
    Form,
    FormControl,
    ToggleButton,
    ButtonGroup
} from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../../components/admin/NavbarAdm/NavbarAdm";
import PedidosAdm from "../../../../components/admin/Cards/CardPedidos/PedidosAdm";
import PedidosAdmFiltrado from "../../../../components/admin/Cards/CardPedidos/PedidosAdmFiltrado";
//Componentes

import { useState, useEffect } from "react";
//Hooks

import "./GerPedidos.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

function GerPedidos() {
    //--------------------------------------------------------------//
    //                        Dados Dos Produtos                    //
    //--------------------------------------------------------------//

    const [items, setItems] = useState([]);

    

    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(`http://https://gemeos-server.herokuapp.com/:4000/pedidos`);
            const data = await res.json();
            setItems(data);
        };

        getItens();
    }, []);

    const [search, setSearch] = useState("");

    const [filterName, setFilterName] = useState("0");
    const [filterValue, setFilterValue] = useState("0");

    const pedidos = items;

    function FuncaoSubmit(e){
        e.preventDefault();
        e.stopPropagation();
    }

    return (

        <div className="admGer">
            <NavbarAdm />
            <section id="GerPedidosAdm">
                <div className="center">
                    <h1 className="TitlePedido">Gerenciamento De Pedidos</h1>
                </div>

                <div className="filterbarPedidosAdm">
                    <div>
                        <Form className="FormBuscaAdm" onSubmit={FuncaoSubmit}>
                            <FormControl
                                type="search"
                                placeholder="Pesquisar Por Cliente ..."
                                className="FormularioBuscaAdm"
                                aria-label="Search"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                        </Form>
                    </div>

                    <div className="Navs-linksAdm">
                        <ButtonGroup className="mb-2 FilterbtnGroupAdm">
                            <ToggleButton
                                type="radio"
                                className="TextCategoria-linkAdm"
                                variant="primary"
                                name="radio"
                                value="0"
                                checked={filterValue === "0"}
                                onClick={(e) =>
                                    setFilterValue((e.currentTarget = "0"))
                                }
                                href="#GerPedidosAdm"
                            >
                                Todos Os Pedidos
                            </ToggleButton>
                            <ToggleButton
                                className="TextCategoria-linkAdm"
                                id="Concluidosbtn"
                                type="radio"
                                variant="success"
                                name="radio"
                                value="2"
                                checked={filterValue === "2"}
                                onChange={(e) =>
                                    setFilterValue(e.currentTarget.value)
                                }
                                onClick={(e) => setFilterName("Concluídos")}
                                href="#GerPedidosAdm"
                            >
                                Concluídos
                            </ToggleButton>
                            <ToggleButton
                                className="TextCategoria-linkAdm"
                                id="EmAndamentobtn"
                                type="radio"
                                variant="warning"
                                name="radio"
                                value="1"
                                checked={filterValue === "1"}
                                onChange={(e) =>
                                    setFilterValue(e.currentTarget.value)
                                }
                                onClick={(e) => setFilterName("Em Andamento")}
                                href="#GerPedidosAdm"
                            >
                                Em Andamento
                            </ToggleButton>
                            <ToggleButton
                                className="TextCategoria-linkAdm"
                                id="Canceladosbtn"
                                type="radio"
                                variant="danger"
                                name="radio"
                                value="3"
                                checked={filterValue === "3"}
                                onChange={(e) =>
                                    setFilterValue(e.currentTarget.value)
                                }
                                onClick={(e) => setFilterName("Cancelados")}
                                href="#GerPedidosAdm"
                            >
                                Cancelados
                            </ToggleButton>
                        </ButtonGroup>
                        
                    </div>
                </div>
                <div className="ScrollContent">

                {filterValue === "0" && (
                    <div className="PedidosAdmContent">
                        <h1 className="h1DestaqueAdm h1Shadow">Todos Os Pedidos</h1>
                        <PedidosAdm
                            pedidos={pedidos}
                            busca={search}
                        ></PedidosAdm>
                    </div>
                )}
                {filterValue !== "0" && (
                    <div className="PedidosAdmContent">
                        {filterName === "Concluídos" && (
                            <h1 className="h1DestaqueAdmPedidoConcluido">
                                {filterName}
                            </h1>
                        )}
                        {filterName === "Em Andamento" && (
                            <h1 className="h1DestaqueAdmPedidoAndamento">
                                {filterName}
                            </h1>
                        )}
                        {filterName === "Cancelados" && (
                            <h1 className="h1DestaqueAdmPedidoCancelado">
                                {filterName}
                            </h1>
                        )}
                        <PedidosAdmFiltrado
                            pedidos={pedidos}
                            busca={search}
                            filter={filterValue}
                        ></PedidosAdmFiltrado>
                    </div>
                )}
                </div>
            </section>
        </div>
    );
}

export default GerPedidos;
