/* eslint-disable array-callback-return */
import React from "react";
//Blibliotecas

import PedidoAdm from "./PedidoAdm";
//Componentes

import "./PedidosAdm.css";
//Css

import InfiniteScroll from 'react-infinite-scroller';
//InfiniteScroll

import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth"
//Hooks

//--------------------------------------------------------------//
//      Configuraçoes de itens, "se tem mais", e página         //
//--------------------------------------------------------------//

function PedidosAdmFiltrado(props) {


    const { auth } = useAuth();

    const { busca, filter } = props;

    const [items, setItems] = useState([]);

    const [hasMore, sethasMore] = useState(true);

    const [page, setpage] = useState(1);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//
    //       Pega os dados do servidor, de forma assincrona         //
    //           com limite de 6 itens por página                   //
    //                                                              //
    //--------------------------------------------------------------//
    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(
                `http://https://gemeos-server.herokuapp.com/:4000/pedidos?_page=1&_limit=6`,{
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
    //     retorna os dados dos pedidos baseado na página           //
    //--------------------------------------------------------------//

    const fetchItens = async () => {
        const res = await fetch(
            `http://https://gemeos-server.herokuapp.com/:4000/pedidos?_page=${page}&_limit=6`
        );
        const data = await res.json();
        return data;
    };

    //--------------------------------------------------------------//
    //   Verifica se tem mais pedidos na lista do servidor,         //
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
                pageStart={1}
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
                            val.Data_Pedido.includes(busca)
                        ) {
                            return val
                        }
                    })
                    .map((item, index) => {
                        return (
                            `${item.Status_pedido}` === `${filter}` && (
                            <main className="block" key={index}>
                                <div>
                                    <PedidoAdm
                                        pedido={item}                                      
                                    ></PedidoAdm>
                                </div>
                            </main>
                            )
                        );
                    })}
            </InfiniteScroll>
            <div className="EndScrollMsgAdm">
                <p> Você Chegou ao Fim!</p>
            </div>
        </div>
    );
}

export default PedidosAdmFiltrado;
