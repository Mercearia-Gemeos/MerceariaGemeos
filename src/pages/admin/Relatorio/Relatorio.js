import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
//Blibliotecas

import { Container, Table } from "react-bootstrap";
//Bootstrap

import NavbarAdm from "../../../components/admin/NavbarAdm/NavbarAdm";
//Componentes

import { useState, useEffect } from "react";
//Hooks

import Logotipo from "../../../assets/img-adm/LOGO2.png";
//Img

import "./Relatorio.css";
//Css

function Relatorio() {
    ////////////////////////////////////
    //                                //
    //          Data Atual            //
    //                                //
    ////////////////////////////////////

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

    let todayDate = `${ano}-${mes}-${dia} `

    //////////////////////////////////////

    ////////////////////////////////////
    //                                //
    //        Imprimir Tela           //
    //                                //
    ////////////////////////////////////

    function imprimirTela() {
        window.print();
    }

    //////////////////////////////////////

    //--------------------------------------------------------------//
    //                        Dados Dos Produtos                    //
    //--------------------------------------------------------------//

    const [produtos, setprodutos] = useState([]);

    useEffect(() => {
        const getprodutos = async () => {
            const res = await fetch(`http://localhost:4000/produtos`);
            const data = await res.json();
            setprodutos(data);
        };

        getprodutos();
    }, []);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados dos Produtos */

    const Produtos = produtos;

    /*/////////////////////////////////////*/

    //--------------------------------------------------------------//
    //                        Dados Das Categorias                  //
    //--------------------------------------------------------------//

    const [categorias, setcategorias] = useState([]);

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

    /*/////////////////////////////////////*/

    //--------------------------------------------------------------//
    //                        Dados Dos Banners                     //
    //--------------------------------------------------------------//

    const [bannersDb, setBannersDb] = useState([]);

    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(`http://localhost:4000/banners`);
            const data = await res.json();
            setBannersDb(data);
        };

        getItens();
    }, []);

    /*Recebe Todos Os Dados dos Banners */

    const Banners = bannersDb;

    /*/////////////////////////////////////*/

    //--------------------------------------------------------------//
    //                 Dados Dos Mais Vendidos                      //
    //--------------------------------------------------------------//

    const [maisVendidos, setMaisVendidos] = useState([]);

    useEffect(() => {
        const getmaisVendidos = async () => {
            const res = await fetch(`http://localhost:4000/admin/maisVendidos`);
            const data = await res.json();
            setMaisVendidos(data);
        };

        getmaisVendidos();
    }, []);

    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados dos MaisVendidos */

    const MaisVendidos = maisVendidos;

    /*/////////////////////////////////////*/


    //--------------------------------------------------------------//
    //                  Quantidades Das Tabelas                     //
    //--------------------------------------------------------------//

    const [numberPedidosAndamento, setNumberPedidosAndamento] = useState([]);
    const [numberPedidosConcluido, setNumberPedidosConcluido] = useState([]);
    const [numberPedidosCancelado, setNumberPedidosCancelado] = useState([]);

    const [numberPedidosDia, setNumberPedidosDia] = useState([]);
    const [numberPedidosMes, setNumberPedidosMes] = useState([]);

    const [numberVendasTotal, setNumberVendasTotal] = useState([]);
    const [numberVendasDia, setNumberVendasDia] = useState([]);
    const [numberVendasMes, setNumberVendasMes] = useState([]);

    //---------------------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                          Ganhos                              //
    //--------------------------------------------------------------//

    const [ganhosTotais, setGanhosTotais] = useState([]);
    const [ganhosMes, setGanhosMes] = useState([]);
    const [ganhosDia, setGanhosDia] = useState([]);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getnumberPedidosAndamento = async () => {
            const res = await fetch(
                `http://localhost:4000/pedidos/quantidadeAndamento`
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
                `http://localhost:4000/pedidos/quantidadeConcluido`
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
                `http://localhost:4000/pedidos/quantidadeCancelado`
            );
            const data = await res.json();
            setNumberPedidosCancelado(data);
        };

        getnumberPedidosCancelado();
    }, []);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getpedidosDia = async () => {
            const res = await fetch(
                `http://localhost:4000/pedidos/PedidosDia/${ano}/${mes}/${dia}`
            );
            const data = await res.json();
            setNumberPedidosDia(data);
        };

        getpedidosDia();
    }, [ano, mes, dia]);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getpedidosMes = async () => {
            const res = await fetch(
                `http://localhost:4000/pedidos/PedidosMes/${ano}/${mes}`
            );
            const data = await res.json();
            setNumberPedidosMes(data);
        };

        getpedidosMes();
    }, [ano, mes]);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getganhosTotais = async () => {
            const res = await fetch(
                `http://localhost:4000/pedidos/GanhosTotais`
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
                `http://localhost:4000/pedidos/GanhosMes/${ano}/${mes}`
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
                `http://localhost:4000/pedidos/GanhosDia/${ano}/${mes}/${dia}`
            );
            const data = await res.json();
            setGanhosDia(data);
        };

        getganhosDia();
    }, [ano, dia, mes]);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getquantidadeVendas = async () => {
            const res = await fetch(
                `http://localhost:4000/admin/quantidadeVendas`
            );
            const data = await res.json();
            setNumberVendasTotal(data);
        };

        getquantidadeVendas();
    }, []);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getquantidadeVendasDia = async () => {
            const res = await fetch(
                `http://localhost:4000/admin/quantidadeVendasDia/${ano}/${mes}/${dia}`
            );
            const data = await res.json();
            setNumberVendasDia(data);
        };

        getquantidadeVendasDia();
    }, [ano, mes, dia]);

    //---------------------------------------------------------------------------//

    useEffect(() => {
        const getquantidadeVendasMes = async () => {
            const res = await fetch(
                `http://localhost:4000/admin/quantidadeVendasMes/${ano}/${mes}`
            );
            const data = await res.json();
            setNumberVendasMes(data);
        };

        getquantidadeVendasMes();
    }, [ano, mes]);

    //---------------------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                                                              //
    //                Recebe os Dados das Consultas                 //
    //                                                              //
    //--------------------------------------------------------------//

    const NumberPedidosAndamento = numberPedidosAndamento[0];
    const NumberPedidosConcluido = numberPedidosConcluido[0];
    const NumberPedidosCancelado = numberPedidosCancelado[0];

    const NumberPedidosDia = numberPedidosDia[0];
    const NumberPedidosMes = numberPedidosMes[0];

    const NumberVendasTotal = numberVendasTotal[0];
    const NumberVendasDia = numberVendasDia[0];
    const NumberVendasMes = numberVendasMes[0];

    const GanhosTotais = ganhosTotais[0];
    const GanhosMes = ganhosMes[0];
    const GanhosDia = ganhosDia[0];

    //--------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                                                              //
    //                Datas de Consulta PedidosDate                 //
    //                                                              //
    //--------------------------------------------------------------//

    const [fullDateI, setFullDateI] = useState(todayDate);

    let fullDateISpace = fullDateI.split(" ");

    let fullDateINoSpace = fullDateISpace[0];

    let fullDateIArray = fullDateINoSpace.split("-");

    let anoI = fullDateIArray[0];
    let mesI = fullDateIArray[1];
    let diaI = fullDateIArray[2];


    //--------------------------------------------------------------//


    const [fullDateL, setFullDateL] = useState(todayDate);

    let fullDateLSpace = fullDateL.split(" ");

    let fullDateLNoSpace = fullDateLSpace[0];

    let fullDateLArray = fullDateLNoSpace.split("-");

    let anoL = fullDateLArray[0];
    let mesL = fullDateLArray[1];
    let diaL = fullDateLArray[2];

    //--------------------------------------------------------------//

    function toBrDate(usDate) {
        const cleanDate = usDate.split("T03:00:00.000Z").reverse().join();
        const cleanCollon = cleanDate.split(",").join("");
        const OrderDate = cleanCollon.split("-").reverse().join("/");

        let dateBr = OrderDate;
        return dateBr;
    }

        //--------------------------------------------------------------//
    //                 Dados Dos PedidosData                        //
    //--------------------------------------------------------------//

    const [pedidosData, setPedidosData] = useState([]);

    useEffect(() => {
        const getpedidosData = async () => {
            const res = await fetch(
                `http://localhost:4000/admin/pedidosData/${anoI}/${mesI}/${diaI}/${anoL}/${mesL}/${diaL}`
            );
            const data = await res.json();
            setPedidosData(data);
        };

        getpedidosData();
    }, [anoI, anoL, diaI, diaL, mesI, mesL]);

    //--------------------------------------------------------------//

    /*Recebe Todos Os Dados dos Pedidos por Data */

    const PedidosData = pedidosData;

    /*/////////////////////////////////////*/

    return (
        <div className="RelatorioBody ">
            <NavbarAdm />
            <Container>
                <div className="DateDiv">
                    <div className="Logotipo">
                        <img
                            className="ImgLogo"
                            src={Logotipo}
                            alt="Logotipo"
                        />
                        <p>Mercearia Gêmeos</p>
                    </div>
                    <p className="GanhosDate">
                        {dia}/{mes}/{ano}
                    </p>
                </div>
            </Container>

            <Container className="TablesDiv">
                <h1 className="TablesTitle">Produtos</h1>
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio"
                        striped
                        bordered
                        hover
                        size="sm"
                        id="TableProdutos"
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Id Categoria</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Em Oferta</th>
                                <th>Em Estoque</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Produtos.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <b> {item.Id_Produto}</b>{" "}
                                    </td>
                                    <td>{item.Id_Categoria}</td>
                                    <td>{item.Nome_Produto}</td>
                                    <td>{item.Descricao}</td>
                                    <td>R$ {item.Valor}</td>
                                    <td>
                                        {item.Em_Oferta === 0 ? "Não" : "Sim"}
                                    </td>
                                    <td>
                                        {item.Em_Estoque === 0 ? "Não" : "Sim"}
                                    </td>
                                    <td>
                                        {item.Status_Produto === 0
                                            ? "Desativado"
                                            : "Ativo"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <ReactHtmlTableToExcel
                        className="btn btn-light btnExport"
                        table="TableProdutos"
                        filename={`Produtos Mercearia Gêmeos ${dia}-${mes}-${ano}`}
                        sheet="Sheet"
                        buttonText="Exportar Tabela Para O Excel"
                    />
                </div>
                <hr />
                <br />
                <h1 className="TablesTitle">Categorias</h1>
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio"
                        striped
                        bordered
                        hover
                        size="sm"
                        id="TableCategorias"
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Em Destaque</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Categorias.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <b> {item.Id_Categoria}</b>{" "}
                                    </td>
                                    <td>{item.Nome_Categoria}</td>
                                    <td>
                                        {item.Em_Destaque === 0 ? "Não" : "Sim"}
                                    </td>
                                    <td>
                                        {item.Status_Categoria === 0
                                            ? "Desativado"
                                            : "Ativo"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <ReactHtmlTableToExcel
                        className="btn btn-light btnExport"
                        table="TableCategorias"
                        filename={`Categorias Mercearia Gêmeos ${dia}-${mes}-${ano}`}
                        sheet="Sheet"
                        buttonText="Exportar Tabela Para O Excel"
                    />
                </div>
                <hr />
                <br />
                <h1 className="TablesTitle">Banners</h1>
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio"
                        striped
                        bordered
                        hover
                        size="sm"
                        id="TableBanners"
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Banners.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <b> {item.Id_Banner}</b>{" "}
                                    </td>
                                    <td>{item.Nome}</td>
                                    <td>{item.Descricao}</td>
                                    <td>
                                        {item.Status_Banner === 0
                                            ? "Desativado"
                                            : "Ativado"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <ReactHtmlTableToExcel
                        className="btn btn-light btnExport"
                        table="TableBanners"
                        filename={`Banners Mercearia Gêmeos ${dia}-${mes}-${ano}`}
                        sheet="Sheet"
                        buttonText="Exportar Tabela Para O Excel"
                    />
                </div>
                <hr />
                <br />
                <h1 className="TablesTitle">Quantidade de Pedidos</h1>
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio"
                        striped
                        bordered
                        hover
                        size="sm"
                    >
                        <thead>
                            <tr>
                                <th>Código de Status</th>
                                <th>Status</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <b> 1</b>
                                </td>
                                <td>Em Andamento</td>
                                <td>
                                    {NumberPedidosAndamento?.quantidade
                                        ? NumberPedidosAndamento.quantidade
                                        : 0}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b> 2</b>
                                </td>
                                <td>Concluído</td>
                                <td>
                                    {NumberPedidosConcluido?.quantidade
                                        ? NumberPedidosConcluido.quantidade
                                        : 0}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b> 3</b>
                                </td>
                                <td>Cancelado</td>
                                <td>
                                    {NumberPedidosCancelado?.quantidade
                                        ? NumberPedidosCancelado.quantidade
                                        : 0}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr />
                <br />
                <fieldset className="PedidosDateTitle noPrint">
                    <hr />
                    <label htmlFor="dataInicio">
                        <h1>Pedidos Entre</h1>
                    </label>
                    <input
                        type="date"
                        id="dataInicio"
                        Value={`${anoI}-${mesI}-${diaI}`}
                        onChange={(e) => {
                            setFullDateI(e.target.value);
                        }}
                    />
                    
                    <label htmlFor="dataLimite">
                        <h1> - </h1>
                    </label>
                    <input
                        type="date"
                        id="dataLimite"
                        Value={`${anoL}-${mesL}-${diaL}`}
                        onChange={(e) => {
                            setFullDateL(e.target.value);
                        }}
                    />
                    <hr />
                </fieldset>
                <br />
                <h1 className="TablesTitle onlyPrint">Pedidos Entre  ({diaI}/{mesI}/{anoI}) - ({diaL}/{mesL}/{anoL})</h1>
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio"
                        striped
                        bordered
                        hover
                        size="sm"
                        id="TablePedidos"
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Cliente</th>
                                <th>Cpf Do Cliente</th>
                                <th>Data do Pedido</th>
                                <th>Status</th>
                                <th>Observações</th>
                                <th>Data do Cancelamento</th>
                                <th>Motivo Do Cancelamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {PedidosData.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <b> {item.Id_Pedido}</b>{" "}
                                    </td>
                                    <td>
                                        {item.Nome} {item.Sobrenome}{" "}
                                    </td>
                                    <td>{item.Cpf_Cli} </td>
                                    <td>{toBrDate(item.Data_Pedido)} </td>
                                    {item.Status_pedido === 1 && (
                                        <td>Em Andamento</td>
                                    )}
                                    {item.Status_pedido === 2 && (
                                        <td>Concluído</td>
                                    )}
                                    {item.Status_pedido === 3 && (
                                        <td>Cancelado</td>
                                    )}
                                    <td>{item.Observacao} </td>
                                    <td>
                                        {`${
                                            item.Data_Cancelamento
                                                ? toBrDate(
                                                    item.Data_Cancelamento
                                                )
                                                : ""
                                        }`}{" "}
                                    </td>
                                    <td>{item.Motivo_Cancelamento} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <ReactHtmlTableToExcel
                        className="btn btn-light btnExport"
                        table="TablePedidos"
                        filename={`Pedidos Mercearia Gêmeos ${dia}-${mes}-${ano}`}
                        sheet="Sheet"
                        buttonText="Exportar Tabela Para O Excel"
                    />
                </div>
                <hr />
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio "
                        striped
                        bordered
                        hover
                        size="sm"
                    >
                        <thead>
                            <tr>
                                <th>N° Pedidos No Dia</th>
                                <th>N° Pedidos No Mês</th>
                                <th>N° Pedidos Totais</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {NumberPedidosDia?.quantidade
                                        ? NumberPedidosDia.quantidade
                                        : 0}
                                </td>
                                <td>
                                    {NumberPedidosMes?.quantidade
                                        ? NumberPedidosMes.quantidade
                                        : 0}
                                </td>
                                <td>{`${
                                    Number(
                                        NumberPedidosAndamento?.quantidade
                                            ? NumberPedidosAndamento.quantidade
                                            : 0
                                    ) +
                                    Number(
                                        NumberPedidosConcluido?.quantidade
                                            ? NumberPedidosConcluido.quantidade
                                            : 0
                                    ) +
                                    Number(
                                        NumberPedidosCancelado?.quantidade
                                            ? NumberPedidosCancelado.quantidade
                                            : 0
                                    )
                                }`}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr />
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio "
                        striped
                        bordered
                        hover
                        size="sm"
                    >
                        <thead>
                            <tr>
                                <th>Produtos Vendidos No Dia</th>
                                <th>Produtos Vendidos No Mês</th>
                                <th>Produtos Vendidos Totais </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {NumberVendasDia?.quantidade
                                        ? NumberVendasDia.quantidade
                                        : 0}
                                </td>
                                <td>
                                    {NumberVendasMes?.quantidade
                                        ? NumberVendasMes.quantidade
                                        : 0}
                                </td>
                                <td>
                                    {NumberVendasTotal?.quantidade
                                        ? NumberVendasTotal.quantidade
                                        : 0}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr />
                <br />
                <h1 className="TablesTitle">Ganhos</h1>
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio"
                        striped
                        bordered
                        hover
                        size="sm"
                    >
                        <thead>
                            <tr>
                                <th>Ganhos Do Dia</th>
                                <th>Ganhos Do Mês</th>
                                <th>Ganhos Totais</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {GanhosDia?.valorTotalDia
                                        ? `R$ ${GanhosDia?.valorTotalDia}`
                                        : " R$ 0"}
                                </td>
                                <td>
                                    {GanhosMes?.valorTotalMes
                                        ? `R$ ${GanhosMes?.valorTotalMes}`
                                        : " R$ 0"}
                                </td>
                                <td>
                                    {GanhosTotais?.valorTotal
                                        ? `R$ ${GanhosTotais?.valorTotal}`
                                        : " R$ 0 R$"}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr />
                <br />
                <h1 className="TablesTitle">Mais Vendidos</h1>
                <br />
                <div className="tableScrollDiv">
                    <Table
                        className="TableRelatorio"
                        striped
                        bordered
                        hover
                        size="sm"
                        id="TableMaisVendidos"
                    >
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Produto</th>
                                <th>Valor Da Unidade</th>
                                <th>Quantidade Vendida</th>
                                <th>Lucro Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {MaisVendidos.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <b> {`${idx + 1}º`}</b>{" "}
                                    </td>
                                    <td>{item.nome_produto} </td>
                                    <td>R$ {item.valor} </td>
                                    <td>{item.qts_vendidos} </td>
                                    <td>R$ {item.total_vendido} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <ReactHtmlTableToExcel
                        className="btn btn-light btnExport"
                        table="TableMaisVendidos"
                        filename={`MaisVendidos Mercearia Gêmeos ${dia}-${mes}-${ano}`}
                        sheet="Sheet"
                        buttonText="Exportar Tabela Para O Excel"
                    />
                </div>

                <div className="btnImprimirDiv">
                    <button
                        className="btnImprimir .noprint"
                        onClick={imprimirTela}
                    >
                        Imprimir Relatório
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default Relatorio;
