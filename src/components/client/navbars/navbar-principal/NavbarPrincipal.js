import React from "react";
//Blibliotecas

import {
    Navbar,
    Container,
    Nav,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
//Bootstrap

import { Link } from "react-router-dom";
//Componentes

import useStore from "../../../../hooks/useStore";
//Hooks

import Logotipo from "../../../../assets/img-client/logo-escrita.png";
import user_cadastrar from "../../../../assets/img-client/user-p.png";
//Imgs

import "./NavbarPrincipal.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

function NavbarPrincipal() {
    const { authCli } = useStore();

    const backgroundStyleButtonMenu = {
        maxHeight: "200px",
        background: "#bf1601",
        margin: "0",
    };
    const MenuResposivoBackgrounRed = {
        background: "#bf1601",
        margin: "0",
        width: "100%",
        MaxWidht: "100%",
    };

    return (
        <section className="Navbarprincipal" id="NavbarPrincipal">
            <Navbar bg="light" expand="lg" className="NavbarPrincipal">
                <Container fluid className="Alinhamento ">
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={Logotipo} alt="Logo" height="60px"></img>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse
                        id="navbarScroll red"
                        style={MenuResposivoBackgrounRed}
                    >
                        <Nav
                            className="carrinho-login"
                            style={backgroundStyleButtonMenu}
                            navbarScroll
                        >
                            {authCli?.user ? (
                                <>
                                    <DropdownButton
                                        className="UserLoggedBtn"
                                        variant="danger"
                                        title={
                                            <div className="UserLogged">
                                                <img
                                                    src={user_cadastrar}
                                                    alt="Cadastro ou Login"
                                                    width="50px"
                                                ></img>
                                                <div className="">
                                                    BEM VINDO{" "}
                                                    <br className="UserLoggedBreak" />{" "}
                                                    {authCli.name}
                                                </div>
                                            </div>
                                        }
                                    >
                                        <Link
                                            className="dropdownToPedidos"
                                            to="/"
                                            eventkey="1"
                                        >
                                            Página Inicial
                                        </Link>
                                        <Link
                                            className="dropdownToPedidos"
                                            to="/GerenciarPedidos"
                                            eventkey="1"
                                        >
                                            Meus Pedidos
                                        </Link>
                                        <Dropdown.Item
                                            className="dropdownToPedidos"
                                            variant="danger"
                                            eventkey="1"
                                            href="/"
                                        >
                                            Sair
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </>
                            ) : (
                                <>
                                    {/*Nav Link da Texto do Cadastro ou login*/}

                                    <div className="Container-right">
                                        <Nav.Link
                                            href="/login"
                                            className="carrinho img-nav"
                                        >
                                            <img
                                                src={user_cadastrar}
                                                alt="Cadastro ou Login"
                                                width="50px"
                                            ></img>
                                        </Nav.Link>
                                    </div>

                                    {/*Nav Link da Texto do Cadastro ou login*/}

                                    <div className="Container-right">
                                        <Nav.Link
                                            href="/login"
                                            className="carrinho TextoCarrinho"
                                        >
                                            ENTRAR OU CADASTRAR
                                        </Nav.Link>
                                    </div>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </section>
    );
}
export default NavbarPrincipal;
