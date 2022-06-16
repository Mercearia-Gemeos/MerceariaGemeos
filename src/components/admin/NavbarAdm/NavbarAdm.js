import React from "react";
//Blibliotecas

import {
    Navbar,
    Container,
    Nav,
    Offcanvas,
    Dropdown,
    DropdownButton,
    Row,
} from "react-bootstrap";
//Bootstrap

import { Link } from "react-router-dom";
//Componentes

import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarAdm.css";
//Css

import UserAdm from "../../../assets/img-adm/userAdm-p.png";
import Logo from "../../../assets/img-adm/LOGO.png";
import ProdutosIcon from "../../../assets/img-adm/Produtos.png";
import CategoriasIcon from "../../../assets/img-adm/Categorias.png";
import BannerOfertaIcon from "../../../assets/img-adm/BannerOferta.png";
import PedidosIcon from "../../../assets/img-adm/Pedidos.png";
//Imgs

function NavbarAdm() {
    return (
        <section className="NavbarAdm">
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Toggle
                        className="NavbarAdmBtn"
                        aria-controls="offcanvasNavbar"
                    />
                    <Link className="linkH1" to="/Admin">
                        Admin Mercearia Gêmeos
                    </Link>
                    <DropdownButton
                        className="AdmUserBtn"
                        title={
                            <img
                                className="thumbnail-image"
                                src={UserAdm}
                                width="40px"
                                alt="user pic"
                            />
                        }
                        id="bg-nested-dropdown"
                        drop="start"
                    >
                        <Link
                            className="dropdownToHome"
                            to="/admin"
                            eventkey="1"
                        >
                            Pagina Inicial
                        </Link>

                        <Dropdown.Item
                            className="dropdownToHome"
                            href="/"
                            eventkey="1"
                        >
                            Sair
                        </Dropdown.Item>
                    </DropdownButton>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header
                            className="offcanvasAdmHeader"
                            closeButton
                        >
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <Row>
                                    <Link to="/admin">
                                        <img
                                            src={Logo}
                                            alt="Logotipo"
                                            height="100px"
                                        />
                                    </Link>
                                    <Link className="titleOffCanvasLink" to="/admin">
                                        <h1 className="offcanvasAdmTitle">
                                            Gêmeos Admin
                                        </h1>
                                    </Link>
                                </Row>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="offcanvasAdmBody">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <ul className="LinkAdmUl">
                                    <li className="LinkAdmLi">
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarProdutos"
                                        ></Link>
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarProdutos"
                                        >
                                            <img
                                                src={ProdutosIcon}
                                                alt="iconCard"
                                                width="35px"
                                                height="25px"
                                            />
                                            ...
                                        </Link>
                                        <Link
                                            to="/Admin/GerenciarProdutos"
                                            className="LinkAdm"
                                        >
                                            Gerenciar Produtos
                                        </Link>
                                    </li>
                                    <li className="LinkAdmLi">
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarCategorias"
                                        ></Link>
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarCategorias"
                                        >
                                            <img
                                                src={CategoriasIcon}
                                                alt="iconCard"
                                                width="35px"
                                                height="25px"
                                            />
                                            ...
                                        </Link>
                                        <Link
                                            to="/Admin/GerenciarCategorias"
                                            className="LinkAdm"
                                        >
                                            Gerenciar Categorias
                                        </Link>
                                    </li>
                                    <li className="LinkAdmLi">
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarBanner"
                                        ></Link>
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarBanner"
                                        >
                                            <img
                                                src={BannerOfertaIcon}
                                                alt="iconCard"
                                                width="35px"
                                                height="25px"
                                            />
                                            ...
                                        </Link>
                                        <Link
                                            to="/Admin/GerenciarBanner"
                                            className="LinkAdm"
                                        >
                                            Gerenciar Banners de Oferta
                                        </Link>
                                    </li>
                                    <li className="LinkAdmLi" href="#">
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarPedidos"
                                        ></Link>
                                        <Link
                                            className="ImgAdmLink"
                                            to="/Admin/GerenciarPedidos"
                                        >
                                            <img
                                                src={PedidosIcon}
                                                alt="iconCard"
                                                width="35px"
                                                height="25px"
                                            />
                                            ...
                                        </Link>
                                        <Link
                                            to="/Admin/GerenciarPedidos"
                                            className="LinkAdm"
                                        >
                                            Gerenciar Pedidos
                                        </Link>
                                    </li>
                                </ul>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </section>
    );
}
export default NavbarAdm;
