import React from "react";
//Blibliotecas

import { Form, FormControl, ToggleButton, ButtonGroup } from "react-bootstrap";
//Bootstrap

import NavbarPrincipal from "../../../../components/client/navbars/navbar-principal/NavbarPrincipal";
import NavbarEstatico from "../../../../components/client/navbars/navbar-estatico/NavbarEstatico";
import FooterCli from "../../../../components/client/footer/FooterCli";

import PedidosCli from "../../../../components/client/cards/CardsPedidosCliente/PedidosCli";
import PedidosCliFiltrado from "../../../../components/client/cards/CardsPedidosCliente/PedidosCliFiltrado";
//Componentes

import { useState, useEffect } from "react";
import useStore from "../../../../hooks/useStore";
//Hooks

import "./GerPedidosCli.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

function GerPedidosCli() {
    const { authCli } = useStore();

    const idCli = authCli.id;

    //--------------------------------------------------------------//
    //                        Dados Dos Produtos                    //
    //--------------------------------------------------------------//

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/cliente/pedidos/${idCli}`
            );
            const data = await res.json();
            setItems(data);
        };

        getItens();
    }, [idCli]);

    const [search, setSearch] = useState("");

    const [filterName, setFilterName] = useState("0");
    const [filterValue, setFilterValue] = useState("0");

    const pedidos = items;
    function FuncaoSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className="GerPedidosCliContent">
            <NavbarEstatico />
            <NavbarPrincipal />
            <section id="GerPedidosCli">
                <div className="center TitlePedidoCliDiv">
                    <h1 className="TitlePedidoCli">Meus Pedidos</h1>
                </div>

                <div className="filterbarPedidosCli">
                    <div>
                        <Form className="FormBuscaCli" onSubmit={FuncaoSubmit}>
                            <FormControl
                                type="search"
                                placeholder="Pesquisar Por Data..."
                                className="FormularioBuscaCli"
                                aria-label="Search"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                        </Form>
                    </div>

                    <div className="Navs-linksCli">
                        <ButtonGroup className="mb-2 FilterbtnGroupCli">
                            <ToggleButton
                                type="radio"
                                className="TextCategoria-linkCli"
                                variant="primary"
                                name="radio"
                                value="0"
                                checked={filterValue === "0"}
                                onClick={(e) =>
                                    setFilterValue((e.currentTarget = "0"))
                                }
                                href="#GerPedidosCli"
                            >
                                Todos Os Pedidos
                            </ToggleButton>
                            <ToggleButton
                                className="TextCategoria-linkCli"
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
                                href="#GerPedidosCli"
                            >
                                Concluídos
                            </ToggleButton>
                            <ToggleButton
                                className="TextCategoria-linkCli"
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
                                href="#GerPedidosCli"
                            >
                                Em Andamento
                            </ToggleButton>
                            <ToggleButton
                                className="TextCategoria-linkCli"
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
                                href="#GerPedidosCli"
                            >
                                Cancelados
                            </ToggleButton>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="ScrollContent">
                    {filterValue === "0" && (
                        <div className="PedidosCliContent">
                            <h1 className="h1DestaqueAdm h1Shadow">
                                Todos Os Pedidos
                            </h1>
                            <PedidosCli
                                pedidos={pedidos}
                                busca={search}
                            ></PedidosCli>
                        </div>
                    )}
                    {filterValue !== "0" && (
                        <div className="PedidosCliContent">
                            {filterName === "Concluídos" && (
                                <h1 className="h1DestaqueCliPedidoConcluido">
                                    {filterName}
                                </h1>
                            )}
                            {filterName === "Em Andamento" && (
                                <h1 className="h1DestaqueCliPedidoAndamento">
                                    {filterName}
                                </h1>
                            )}
                            {filterName === "Cancelados" && (
                                <h1 className="h1DestaqueCliPedidoCancelado">
                                    {filterName}
                                </h1>
                            )}
                            <PedidosCliFiltrado
                                pedidos={pedidos}
                                busca={search}
                                filter={filterValue}
                            ></PedidosCliFiltrado>
                        </div>
                    )}
                </div>
            </section>
            <FooterCli />
        </div>
    );
}

export default GerPedidosCli;
