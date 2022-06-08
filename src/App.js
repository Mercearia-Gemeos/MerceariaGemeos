import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

import React from "react";
//Bibliotecas

import RequireAuth from "./components/RequireAuth";
import RequireAuthCli from "./components/RequireAuthCli";
//Hooks

import { Routes, Route } from "react-router-dom";
//Componentes

// Importação de componentes de rota, para o funcionamento da paginação

//--------------------------------------------

import Main from "./pages/client/Main";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/client/Cadastro/Cadastro";

//Cliente

import Relatorio from "./pages/admin/Relatorio/Relatorio";
import MainAdm from "./pages/admin/MainAdm";
//Adm

import GerBanner from "./pages/admin/Banner/GerBanner/GerBanner";
import PostBanner from "./pages/admin/Banner/PostBanner/PostBanner";
import GetBanner from "./pages/admin/Banner/GetBanner/GetBanner";
//Banners

import GerCategorias from "./pages/admin/Categoria/GerCategorias/GerCategorias";
import GetCategoria from "./pages/admin/Categoria/GetCategoria/GetCategoria.js";
import PostCategoria from "./pages/admin/Categoria/PostCategoria/PostCategoria";
//Categorias

import GerProdutos from "./pages/admin/Produtos/GerProdutos/GerProdutos";
import PostProdutos from "./pages/admin/Produtos/PostProdutos/PostProdutos";
import GetProdutos from "./pages/admin/Produtos/GetProdutos/GetProdutos";
//Produtos

import GerPedidos from "./pages/admin/Pedidos/GerPedidos/GerPedidos";
import GetPedidos from "./pages/admin/Pedidos/GetPedido/GetPedido";
import Delpedido from "./pages/admin/Pedidos/DelPedidos/DelPedido";
//Pedidos

import LoginAdm from "./pages/admin/LoginAdm/LoginAdm";
import Layout from "./components/Layout";
//Login Admin

import SobreNos from "./pages/client/estaticas/SobreNos/SobreNos";
import CentralDeAtendimento from "./pages/client/estaticas/CentralDeAtendimento/CentralDeAtendimento";
import FormasDePagamento from "./pages/client/estaticas/FormasDePagamentos/FormasDePagamento";
//Estáticas

import PedidoCliente from "./pages/client/PedidoCliente/PedidoCliente";
import GerPedidosCli from "./pages/client/PedidoCliente/GerPedidosCliente/GerPedidosCli";
import GetPedidosCli from "./pages/client/PedidoCliente/GetPedidoCliente/GetPedidoCli";

//Pedido cliente

import NaoEncontrado from "./pages/NaoEncontrado/NaoEncontrado";
//404

//-------------------------------------------
//Importação Das Páginas

function App() {
    return (
        ///////////////////////////////////////////////////
        //                                               //
        //  Componente responsável por apenas renderizar //
        //              uma pagina de Cada Vez           //
        //                                               //
        ///////////////////////////////////////////////////

        <Routes>
            {/*

            /////////////////////////////////////////////////////
           //                                                 //
          //  Compenentes Que Definem O Componente e A Url   //
         //                                                 //
        ///////////////////////////////////////////////////// 

        */}

            <Route path="/" element={<Layout />}>
                {/*

                    /////////////////////////////
                   //                         //
                  //     Rotas Públicas      //
                 //                         //
                /////////////////////////////

                 */}
                <Route exact path="/" element={<Main />} /> {/*Rota Padrão*/}
                <Route exact path="/cadastro" element={<Cadastro />} />
                <Route exact path="/SobreNos" element={<SobreNos />} />
                <Route
                    exact
                    path="/CentralDeAtendimento"
                    element={<CentralDeAtendimento />}
                />
                <Route
                    exact
                    path="/FormasDePagamento"
                    element={<FormasDePagamento />}
                />
                {/*

                     ////////////////////////
                    //                    //
                   //     Login Cli      //
                  //                    //
                 ////////////////////////

                */}
                <Route exact path="/login" element={<Login />} />
                {/*

                     /////////////////////////////////
                    //                             //
                   //     Rotas Privadas Cliente  //
                  //                             //
                 /////////////////////////////////

                */}
                <Route element={<RequireAuthCli />}>
                    <Route exact path="/Pedido" element={<PedidoCliente />} />
                    <Route
                        exact
                        path="/GerenciarPedidos"
                        element={<GerPedidosCli />}
                    />
                    <Route
                        exact
                        path="/GerenciarPedidos/Detalhes"
                        element={<GetPedidosCli />}
                    />
                </Route>
                {/*

                     ////////////////////////
                    //                    //
                   //     Login Adm      //
                  //                    //
                 ////////////////////////

                */}
                <Route exact path="/Admin/Login" element={<LoginAdm />} />
                {/*

                     /////////////////////////////
                    //                         //
                   //     Rotas Privadas      //
                  //                         //
                 /////////////////////////////

                */}
                <Route element={<RequireAuth />}>
                    <Route exact path="/Admin" element={<MainAdm />} />

                    <Route exact path="/Admin/Relatorio" element={<Relatorio />} />

                    <Route
                        exact
                        path="/Admin/GerenciarBanner"
                        element={<GerBanner />}
                    />
                    <Route
                        exact
                        path="/Admin/GerenciarBanner/Cadastrar"
                        element={<PostBanner />}
                    />
                    <Route
                        exact
                        path="/Admin/GerenciarBanner/Editar"
                        element={<GetBanner />}
                    />

                    <Route
                        exact
                        path="/Admin/GerenciarCategorias"
                        element={<GerCategorias />}
                    />
                    <Route
                        exact
                        path="/Admin/GerenciarCategorias/Cadastrar"
                        element={<PostCategoria />}
                    />

                    <Route
                        exact
                        path="/Admin/GerenciarCategorias/Editar"
                        element={<GetCategoria />}
                    />

                    <Route
                        exact
                        path="/Admin/GerenciarPedidos"
                        element={<GerPedidos />}
                    />
                    <Route
                        exact
                        path="/Admin/GerenciarPedidos/Cancelar"
                        element={<Delpedido />}
                    />

                    <Route
                        exact
                        path="/Admin/GerenciarPedidos/Detalhes"
                        element={<GetPedidos />}
                    />

                    <Route
                        exact
                        path="/Admin/GerenciarProdutos"
                        element={<GerProdutos />}
                    />
                    <Route
                        exact
                        path="/Admin/GerenciarProdutos/Cadastrar"
                        element={<PostProdutos />}
                    />

                    <Route
                        exact
                        path="/Admin/GerenciarProdutos/Editar"
                        element={<GetProdutos />}
                    />
                </Route>
                {/*

                     /////////////////////////////
                    //                         //
                   //     Rota Inválida       //
                  //                         //
                 /////////////////////////////

                */}
                <Route path="*" element={<NaoEncontrado />} />
            </Route>
        </Routes>
    );
}

export default App;
