/* eslint-disable array-callback-return */

import React from "react";
//Blibliotecas

import InfiniteScroll from 'react-infinite-scroller';
//InfiniteScroll

import Product from "./Product";
//Componentes

import "./Produtos.css";
//Css

import { useEffect, useState } from "react";
//Hooks

//----------------------------------------------------------------
//      Configuraçoes de itens, "se tem mais", e página         --
//----------------------------------------------------------------
function ProdutosCateg(props) {
    const { onAdd, busca, category } = props;

    const [items, setItems] = useState([]);

    const [hasMore, sethasMore] = useState(true);

    const [page, setpage] = useState(1);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//
    //       Pega os dados do servidor, de forma assincrona         //
    //           com limite de 3 itens por página                   //
    //                                                              //
    //--------------------------------------------------------------//
    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(
                `http://https://gemeos-server.herokuapp.com/:4000/produtos?_page=1&_limit=3`
            );
            const data = await res.json();
            setItems(data);
        };

        getItens();
    }, []);

    //--------------------------------------------------------------//

    //--------------------------------------------------------------//
    //     retorna os dados dos produtos baseado na página          //
    //--------------------------------------------------------------//

    const fetchItens = async () => {
        const res = await fetch(
            `http://https://gemeos-server.herokuapp.com/:4000/produtos?_page=${page}&_limit=3`
        );
        const data = await res.json();
        return data;
    };

    //--------------------------------------------------------------//
    //   Verifica se tem mais produtos na lista do servidor,        //
    //   se Sim, adiciona +1 na var page                            //
    //   se Não, define como falso a "tem mais",                    //
    //   encerrando o infinite Scroll                               //
    //--------------------------------------------------------------//

    const fetchData = async () => {
        const itensFormServer = await fetchItens();

        setItems([...items, ...itensFormServer]);
        if (itensFormServer.length === 1 || itensFormServer.length < 3) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    //--------------------------------------------------------------//
    return (
        <div>
            <InfiniteScroll
                pageStart={0}
                loadMore={fetchData}
                hasMore={hasMore}
                loader=""
                endmessage=""
                className="row rowProdutcs"
            >
                {/*
                          //////////////////////////////////////////////////////////////////////
                         //                                                             //
                        //    Verifica se tem algo digitado no formulário de busca,    //
                       //    caso Verdadeiro,o objeto é filtrado deixando apenas      //
                      //   aqueles que se correspondem                               //
                     //                                                             //
                    /////////////////////////////////////////////////////////////////


                */}

                {items
                    .filter((val) => {
                        if (busca === "") {
                            return val;
                        } else if (
                            val.Nome_Produto.toLowerCase().includes(
                                busca.toLowerCase()
                            )
                        ) {
                            return val;
                        }
                    })
                    .map((item, index) => {
                        return (
                            `${item.Em_Estoque}` === "1" &&
                            `${item.Status_Produto}` === "1" &&
                            `${item.Id_Categoria}` === category && (
                                <main className="block" key={index}>
                                    <div>
                                        <Product
                                            product={item}
                                            onAdd={onAdd}
                                        ></Product>
                                    </div>
                                </main>
                            )
                        );
                    })}
            </InfiniteScroll>

            <div className="EndScrollMsgCli">
                <p> Você Chegou ao Fim!</p>
            </div>
        </div>
    );
}

export default ProdutosCateg;
