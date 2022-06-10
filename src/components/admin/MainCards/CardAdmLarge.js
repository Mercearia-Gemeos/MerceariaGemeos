import React from "react";
//Blibliotecas

import { Container } from "react-bootstrap";
//Bootstrap

import "./CardAdmLarge.css";
//Css

function CardAdmSmall({ title, andamento, concluido, cancelado}) {

    
    return (

    <Container className="cardAdm-lg">
        <h1 className="admCardTitleLg">{title}</h1>
        <div className="admLargeCardContent">
            <ul className="admUlPedidos">
                <li className="LiPedidosAndamento" >Pedidos Em Andamento:  <b className="numberAndamento">{andamento}</b> </li>
                <li className="LiPedidosConcluido" >Pedidos Concluídos:  <b className="numberConcluido">{concluido}</b> </li>
                <li className="LiPedidosCancelado" >Pedidos Cancelados:  <b className="numberCancelado">{cancelado}</b> </li>
                <br />
                <li className="LiPedidosTotal">Pedidos Totais:  <b className="numberTotal">{Number(andamento) + Number(concluido) + Number(cancelado)}</b> </li>
            </ul>
        </div>
    </Container>
    );
}

export default CardAdmSmall;
