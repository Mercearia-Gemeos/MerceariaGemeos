/* eslint-disable array-callback-return */
import React from "react";
//Blibliotecas

import Product from "./ProdutoAdm/ProductAdm";
//Componentes

import "./ProdutosAdm.css";
//Css

import InfiniteScroll from 'react-infinite-scroller';
//InfiniteScroll

import { useEffect, useState } from "react";
import useAuth from "../../../../../hooks/useAuth"
//Hooks

//--------------------------------------------------------------//
//      Configuraçoes de itens, "se tem mais", e página         //
//--------------------------------------------------------------//

function Produtos(props) {


    const { auth } = useAuth();

    const { onAdd, busca } = props;

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
                `http://localhost:4000/produtos?_page=1&_limit=3`,{
                method: 'GET',
                headers: new Headers({ 'Authorization': `Bearer ${auth.accessToken}`})
            });
            const data = await res.json();
            setItems(data);
        };

        getItens();
    }, [auth.accessToken]);

    //--------------------------------------------------------------//

    //--------------------------------------------------------------//
    //     retorna os dados dos produtos baseado na página          //
    //--------------------------------------------------------------//

    const fetchItens = async () => {
        const res = await fetch(
            `http://localhost:4000/produtos?_page=${page}&_limit=3`
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
        if (itensFormServer.length === 0 || itensFormServer.length < 3) {
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
                {items
                    .filter((val) => {
                        if (busca === "") {
                            return val
                        } else if (
                            val.Nome_Produto.toLowerCase().includes(busca.toLowerCase())
                        ) {
                            return val
                        }
                    })
                    .map((item, index) => {
                        return (
                            <main className="block" key={index}>
                                <div>
                                    <Product
                                        product={item}
                                        onAdd={onAdd}
                                    ></Product>
                                </div>
                            </main>
                        );
                    })}
            </InfiniteScroll>
            <div className="EndScrollMsgAdm">
                <p> Você Chegou ao Fim!</p>
            </div>
        </div>
    );
}

export default Produtos;
