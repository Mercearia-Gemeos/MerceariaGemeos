import React from "react";
//Blibliotecas

import { Container, Row, Button } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../components/admin/NavbarAdm/NavbarAdm";
import CardAdmSmall from "../../../components/admin/MainCards/CardAdmSmall";
import CardAdmLarge from "../../../components/admin/MainCards/CardAdmLarge";
import { Link } from "react-router-dom";
//Componentes

import { useState, useEffect } from "react";
//Hooks

import ProdutosIcon from "../../../assets/img-adm/ProdutosBlack.png";
import CategoriasIcon from "../../../assets/img-adm/CategoriasBlack.png";
import BannerOfertaIcon from "../../../assets/img-adm/BannerOfertaBlack.png";
//Img

import "./MainAdm.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

function MainAdm() {
    //--------------------------------------------------------------//
    //                  Quantidades Das Tabelas                     //
    //--------------------------------------------------------------//

    const [numberProdutos, setNumberProdutos] = useState([]);
    const [numberCategorias, setNumberCategorias] = useState([]);
    const [numberBanners, setNumberBanners] = useState([]);
    const [numberPedidosAndamento, setNumberPedidosAndamento] = useState([]);
    const [numberPedidosConcluido, setNumberPedidosConcluido] = useState([]);
    const [numberPedidosCancelado, setNumberPedidosCancelado] = useState([]);

    //---------------------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                  Clientes Compradores                        //
    //--------------------------------------------------------------//

    const [numberClientes, setNumberClientes] = useState([]);

    //---------------------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                          Datas                               //
    //--------------------------------------------------------------//

    const [ganhosTotais, setGanhosTotais] = useState([]);
    const [ganhosMes, setGanhosMes] = useState([]);
    const [ganhosDia, setGanhosDia] = useState([]);

    const date = new Date();

    let dia = date.getDate();
    if (dia < 10) {
        dia = "0" + dia;
    }

    let mes = date.getMonth() + 1;
    if (mes < 10) {
        mes = "0" + mes;
    }
    let ano = date.getFullYear();

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberProdutos = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/produtos/quantidade`
            );
            const data = await res.json();
            setNumberProdutos(data);
        };

        getnumberProdutos();
    }, []);

    //---------------------------------------------------------------------------//

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberCategorias = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/categorias/quantidade`
            );
            const data = await res.json();
            setNumberCategorias(data);
        };

        getnumberCategorias();
    }, []);

    //---------------------------------------------------------------------------//

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberBanners = async () => {
            const res = await fetch(`https://gemeos-server.herokuapp.com/banners/quantidade`);
            const data = await res.json();
            setNumberBanners(data);
        };

        getnumberBanners();
    }, []);

    //---------------------------------------------------------------------------//

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberPedidosAndamento = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/pedidos/quantidadeAndamento`
            );
            const data = await res.json();
            setNumberPedidosAndamento(data);
        };

        getnumberPedidosAndamento();
    }, []);

    //---------------------------------------------------------------------------//

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberPedidosConcluido = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/pedidos/quantidadeConcluido`
            );
            const data = await res.json();
            setNumberPedidosConcluido(data);
        };

        getnumberPedidosConcluido();
    }, []);

    //---------------------------------------------------------------------------//

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberPedidosCancelado = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/pedidos/quantidadeCancelado`
            );
            const data = await res.json();
            setNumberPedidosCancelado(data);
        };

        getnumberPedidosCancelado();
    }, []);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberClientes = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/admin/quantidadeCliente`
            );
            const data = await res.json();
            setNumberClientes(data);
        };

        getnumberClientes();
    }, []);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getganhosTotais = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/pedidos/GanhosTotais`
            );
            const data = await res.json();
            setGanhosTotais(data);
        };

        getganhosTotais();
    }, []);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getganhosMes = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/pedidos/GanhosMes/${ano}/${mes}`
            );
            const data = await res.json();
            setGanhosMes(data);
        };

        getganhosMes();
    }, [ano, mes]);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getganhosDia = async () => {
            const res = await fetch(
                `https://gemeos-server.herokuapp.com/pedidos/GanhosDia/${ano}/${mes}/${dia}`
            );
            const data = await res.json();
            setGanhosDia(data);
        };

        getganhosDia();
    }, [ano, dia, mes]);

    //---------------------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                                                              //
    //                Recebe os Dados das Consultas                 //
    //                                                              //
    //--------------------------------------------------------------//

    const NumberProdutos = numberProdutos[0];
    const NumberCategorias = numberCategorias[0];
    const NumberBanners = numberBanners[0];
    const NumberPedidosAndamento = numberPedidosAndamento[0];
    const NumberPedidosConcluido = numberPedidosConcluido[0];
    const NumberPedidosCancelado = numberPedidosCancelado[0];

    const NumberClientes = numberClientes[0];

    const GanhosTotais = ganhosTotais[0];
    const GanhosMes = ganhosMes[0];
    const GanhosDia = ganhosDia[0];

    //--------------------------------------------------------------//

    return (
        <div className="admGer ">
            <NavbarAdm />
            <Container>
                <Row className="RowSmCards">
                    <CardAdmSmall
                        title="Produtos Cadastrados"
                        icon={ProdutosIcon}
                        content={
                            NumberProdutos?.quantidade
                                ? NumberProdutos.quantidade
                                : 0
                        }
                    />
                    <CardAdmSmall
                        title="Categorias Cadastradas"
                        icon={CategoriasIcon}
                        content={
                            NumberCategorias?.quantidade
                                ? NumberCategorias.quantidade
                                : 0
                        }
                    />
                    <CardAdmSmall
                        title="Banners Cadastrados"
                        icon={BannerOfertaIcon}
                        content={
                            NumberBanners?.quantidade
                                ? NumberBanners.quantidade
                                : 0
                        }
                    />
                    <CardAdmLarge
                        title="Pedidos"
                        andamento={
                            NumberPedidosAndamento?.quantidade
                                ? NumberPedidosAndamento.quantidade
                                : 0
                        }
                        concluido={
                            NumberPedidosConcluido?.quantidade
                                ? NumberPedidosConcluido.quantidade
                                : 0
                        }
                        cancelado={
                            NumberPedidosCancelado?.quantidade
                                ? NumberPedidosCancelado.quantidade
                                : 0
                        }
                    />
                    <Container className="cardAdm-lg">
                        <div className="titleGanhos">
                            <h1 className="admCardTitleLg">Ganhos</h1>
                            <p className="GanhosDate">
                                {dia}/{mes}/{ano}
                            </p>
                        </div>

                        <div className="admLargeCardContent cardGanhos">
                            <CardAdmSmall
                                title="Ganhos Totais"
                                content={
                                    GanhosTotais?.valorTotal
                                        ? `R$ ${GanhosTotais?.valorTotal}`
                                        : " R$ 0 R$"
                                }
                            />
                            <CardAdmSmall
                                title="Ganhos Do Mês"
                                content={
                                    GanhosMes?.valorTotalMes
                                        ? `R$ ${GanhosMes?.valorTotalMes}`
                                        : " R$ 0"
                                }
                            />
                            <CardAdmSmall
                                title="Ganhos Do Dia"
                                content={
                                    GanhosDia?.valorTotalDia
                                        ? `R$ ${GanhosDia?.valorTotalDia}`
                                        : " R$ 0"
                                }
                            />
                            <CardAdmSmall
                                title="Clientes Compradores"
                                content={
                                    NumberClientes?.quantidade
                                        ? NumberClientes?.quantidade
                                        : 0
                                }
                            />
                            <CardAdmSmall
                                title="Ganho Médio por Cliente"
                                content={
                                    NumberClientes?.quantidade
                                        ? GanhosTotais?.valorTotal
                                            ? `R$ ${(
                                                GanhosTotais.valorTotal /
                                                NumberClientes.quantidade
                                            ).toFixed(2)}`
                                            : " R$ 0"
                                        : " R$ 0"
                                }
                            />
                            <CardAdmSmall
                                title="Ganho Médio por Pedido"
                                content={
                                    NumberPedidosConcluido?.quantidade
                                        ? GanhosTotais?.valorTotal
                                            ? `R$ ${(
                                                GanhosTotais.valorTotal /
                                                NumberPedidosConcluido.quantidade
                                            ).toFixed(2)}`
                                            : " R$ 0"
                                        : " R$ 0"
                                }
                            />
                        </div>
                    </Container>
                    <Container className="containerBtnEmRelatorio">
                        <div className="admLargeCardContent">
                            <Button variant="secondary"className="btnEmitirRelatorio">
                                <Link to="Relatorio">Emitir Relatório</Link>
                            </Button>
                        </div>
                    </Container>
                </Row>
            </Container>
        </div>
    );
}

export default MainAdm;
