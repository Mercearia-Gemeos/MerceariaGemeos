import React from "react";
//Bliblioteca

import { Row}  from "react-bootstrap";
//Bootstrap

import "./CardAdmSmall.css";
//Css

function CardAdmSmall({ title, icon, content }) {
    return (
        <div className="cardAdm-sm">
            <Row className="RowCardAdmInner">
                <h1 className="admCardTitle">{title}</h1>
                <div className="divImgCardAdm">
                <img
                    className="admCardImg"
                    src={icon}
                    alt="iconCard"
                    width="15px"
                    height="15px"
                />
                </div>
            </Row>
            <div className="cardAdmContent">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default CardAdmSmall;
