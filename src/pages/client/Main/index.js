import React from "react";
//Blibliotecas

import { useWindowScroll } from "react-use";

import {
    Button,
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Offcanvas,
    ToggleButton,
    ButtonGroup,
    Dropdown,
    DropdownButton,
} from "react-bootstrap";
//Bootstrap

import FooterCli from "../../../components/client/footer/FooterCli";
import NavbarEstatico from "../../../components/client/navbars/navbar-estatico/NavbarEstatico";
import OfertasBanner from "../../../components/client/banners/ofertas/OfertasBanner";
import Produtos from "../../../components/Produtos";
import ProdutosCateg from "../../../components/ProdutosCateg";
import Product from "../../../components/Product";
import Basket from "../../../components/Basket";
import Carrousel from "../../../components/client/carrossel/Carrosel";
import { Link } from "react-router-dom";
//Componentes

import Logotipo from "../../../assets/img-client/logo-escrita.png";
import Lupa from "../../../assets/img-client/lupa-p.png";
import carrinho_compras from "../../../assets/img-client/carrinho-p.png";
import user_cadastrar from "../../../assets/img-client/user-p.png";
//Imgs

import "./Main.css";
import "./NavbarPrincipal.css";
import "./NavbarCategoria.css";
import "bootstrap/dist/css/bootstrap.min.css";
//CSS

import { useState, useEffect } from "react";
import useStore from "../../../hooks/useStore";
//Hooks

function Main() {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    function usefilter(item){
        scrollToTop();
        setCategName(`${item}`)
    }


    function usefilter2(e){
        scrollToTop();
        setFilterValue("0")
        
    }

    //Dados

    const { authCli } = useStore();

    //--------------------------------------------------------------//
    //                        Dados Dos Produtos                    //
    //--------------------------------------------------------------//

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItens = async () => {
            const res = await fetch(`https://gemeos-server.herokuapp.com/produtos`);
            const data = await res.json();
            setItems(data);
        };

        getItens();
    }, []);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//

    //--------------------------------------------------------------//
    //                        Dados Das Categorias                  //
    //--------------------------------------------------------------//

    const [categorias, setcategorias] = useState([]);

    useEffect(() => {
        const getcateg = async () => {
            const res = await fetch(`https://gemeos-server.herokuapp.com/categorias`);
            const data = await res.json();

            setcategorias(data);
        };

        getcateg();
    }, []);

    //--------------------------------------------------------------//
    //--------------------------------------------------------------//

    ////////////////// Consts/useStates/Events /////////////////////////////////

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

    //////////////////< Abrir Offcanvas Categoria >/////////////////////////////

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const IconColor = {
        color: "#fff",
    };
    //////////////////< ///////////////////////// >/////////////////////////////

    //////////////////> Abrir Offcanvas Carrinho <//////////////////////////////

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const IconColor2 = {
        color: "#fff",
    };

    //////////////////> //////////////////////// </////////////////////////////

    ///////////////////$ Configs Do Carrinho de Compras $///////////////////////

    /*Recebe Todos Os Dados dos produtos */

    const products = items;

    /*Recebe Todos Os Dados das Categorias */

    const Categorias = categorias;

    /*//////////////////////////////////*/

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find(
            (x) => x.Id_Produto === product.Id_Produto
        );
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.Id_Produto === product.Id_Produto
                        ? { ...exist, Quantidade: exist.Quantidade + 1 }
                        : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, Quantidade: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find(
            (x) => x.Id_Produto === product.Id_Produto
        );
        if (exist.Quantidade === 1) {
            setCartItems(
                cartItems.filter((x) => x.Id_Produto !== product.Id_Produto)
            );
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.Id_Produto === product.Id_Produto
                        ? { ...exist, Quantidade: exist.Quantidade - 1 }
                        : x
                )
            );
        }
    };

    let QuantItems = 0;

    cartItems.forEach((item) => {
        QuantItems += item.Quantidade;
    });

    ///////////////////$////////////////////////////$///////////////////////////

    ///////////////////*Configurações do Carrousel*////////////////////////////

    ///////////////////*////////////////////////*/////////////////////////////

    //////////////////////////////////////////////////////////////////////////

    //--------------------------------------------------------------//
    //     UseStates de Filtro por Categoria                        //
    //--------------------------------------------------------------//

    const [filterValue, setFilterValue] = useState("0");
    const [categName, setCategName] = useState("0");

    //--------------------------------------------------------------//

    //--------------------------------------------------------------//
    //     UseStates de Barra de Buscar                             //
    //--------------------------------------------------------------//

    const [search, setSearch] = useState("");

    //--------------------------------------------------------------//

    // Trabalhando com JSX

    return (
        <div>
            {/*////////////////////////////// NavBars ////////////////////////////////////////////////////////////////////*/}

            <nav className="FixedTop">
                {/*----------------- Navbar Estatico ------------------*/}

                <NavbarEstatico />

                {/*----------------- Navbar Principal ------------------*/}

                <section className="Navbarprincipal" id="NavbarPrincipal">
                    <Navbar bg="light" expand="lg" className="NavbarPrincipal">
                        <Container fluid className="Alinhamento ">
                            <Navbar.Brand>
                                <Link to="/">
                                    <img
                                        src={Logotipo}
                                        height="60px"
                                        alt="Logotipo"
                                    ></img>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse
                                id="navbarScroll red"
                                style={MenuResposivoBackgrounRed}
                            >
                                {/*----------------- Barra de Pesquisa ------------------*/}

                                <Form className="d-flex left">
                                    <FormControl
                                        type="search"
                                        placeholder="Pesquisar..."
                                        className="me-2 FormularioBusca"
                                        aria-label="Search"
                                        onChange={(e) => {
                                            setSearch(e.target.value);
                                        }}
                                    />
                                    <Button
                                        variant="outline-success lupa"
                                        disabled
                                    >
                                        <img
                                            src={Lupa}
                                            width="30px"
                                            alt="lupa"
                                        ></img>
                                    </Button>
                                </Form>
                                <Nav
                                    className="carrinho-login"
                                    style={backgroundStyleButtonMenu}
                                    navbarScroll
                                >
                                    {/*Nav Link da Imagem do Cadastro ou login*/}

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

                                            {/*Nav Link da Imagem do Carrinho do compras*/}

                                            {QuantItems === 0 && (
                                                <div className="Container-right ">
                                                    <Nav.Link
                                                        href="#"
                                                        className="carrinho img-nav2"
                                                        data-count={QuantItems}
                                                    >
                                                        <img
                                                            src={
                                                                carrinho_compras
                                                            }
                                                            alt="carrinho de compra"
                                                            width="50px"
                                                            onClick={
                                                                handleShow2
                                                            }
                                                        ></img>
                                                    </Nav.Link>
                                                </div>
                                            )}
                                            {QuantItems !== 0 && (
                                                <div className="Container-right ">
                                                    <Nav.Link
                                                        href="#"
                                                        className="carrinho img-nav2 botaoCarrinho"
                                                        data-count={QuantItems}
                                                    >
                                                        <img
                                                            src={
                                                                carrinho_compras
                                                            }
                                                            alt="carrinho de compra"
                                                            width="50px"
                                                            onClick={
                                                                handleShow2
                                                            }
                                                        ></img>
                                                    </Nav.Link>
                                                </div>
                                            )}
                                            {/* Nav Link do texto do Carrinho do compras*/}

                                            <div className="Container-right container-carrinho-margin ">
                                                <Nav.Link
                                                    href="#"
                                                    className="carrinho TextoCarrinho-2 "
                                                    onClick={handleShow2}
                                                >
                                                    CARRINHO DE COMPRAS
                                                </Nav.Link>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="Container-right ">
                                                <Nav.Link
                                                    href="/login"
                                                    className="carrinho img-nav "
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

                {/*----------------------------------------------------------------------------------------------------------------------------------*/}

                {/*----------------- Navbar Categoria ------------------*/}

                <section
                    className="Container-categoria-mercearia"
                    id="NavbarCategoria"
                >
                    <section className="NavbarCategoria">
                        <nav className="Categoria-nav">
                            <div className="categoria-buttton-texto">
                                <div
                                    className="Botão-menu-categoria"
                                    onClick={handleShow}
                                >
                                    <div className="linha-1"> </div>
                                    <div className="linha-1"> </div>
                                    <div className="linha-1"> </div>
                                </div>

                                {/*----------------- Offcanvas Categorias ------------------*/}

                                <Offcanvas
                                    show={show}
                                    onHide={handleClose}
                                    className="MenuLateral-container"
                                >
                                    <Offcanvas.Header
                                        closeButton
                                        className="MenuLateral-icon offcanvas-headerCategoria"
                                    >
                                        <Offcanvas.Title style={IconColor}>
                                            Categorias
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <nav className="Navbar-lateral">
                                            <ul className="lista-links-lateral">
                                                <ButtonGroup className="lista-lateral-categorias">
                                                    <ToggleButton
                                                        className="btnRemoverFiltro"
                                                        type="radio"
                                                        variant="outline-danger"
                                                        name="radio"
                                                        value="0"
                                                        checked={
                                                            filterValue === "0"
                                                        }
                                                        onClick={(e) => usefilter2("0")}
                                                    >
                                                        Todos os Produtos
                                                    </ToggleButton>
                                                    <br />

                                                    {Categorias.map(
                                                        (item, idx) =>
                                                            item.Status_Categoria ===
                                                                1 && (
                                                                <ToggleButton
                                                                    key={idx}
                                                                    className="btnCategorias"
                                                                    id={`radio-${idx}`}
                                                                    type="radio"
                                                                    variant="danger"
                                                                    name="radio"
                                                                    value={
                                                                        item.Id_Categoria
                                                                    }
                                                                    checked={
                                                                        filterValue ===
                                                                        item.Id_Categoria
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setFilterValue(
                                                                            e
                                                                                .currentTarget
                                                                                .value
                                                                        )
                                                                    }
                                                                    onClick={(e) => usefilter(item.Nome_Categoria)}
                                                                >
                                                                    {
                                                                        item.Nome_Categoria
                                                                    }
                                                                </ToggleButton>
                                                            )
                                                    )}
                                                </ButtonGroup>
                                            </ul>
                                        </nav>
                                    </Offcanvas.Body>
                                </Offcanvas>
                                <p className="TextCategoria button-text">
                                    {" "}
                                    Todas as categorias
                                </p>
                            </div>

                            {/*----------------- Links Categorias ------------------*/}

                            <div className="Navs-links">
                                <ButtonGroup className="mb-2">
                                    <ToggleButton
                                        type="radio"
                                        className="btnRemoverFiltroNav"
                                        variant="outline-danger"
                                        name="radio"
                                        value="0"
                                        checked={filterValue === "0"}
                                        onClick={(e) => usefilter2("0")}
                                    >
                                        Todos Os Produtos
                                    </ToggleButton>
                                    {Categorias.map(
                                        (item, idx) =>
                                            item.Status_Categoria === 1 &&
                                            item.Em_Destaque === 1 && (
                                                <ToggleButton
                                                    key={idx}
                                                    to="#PedidosDisplay"
                                                    className="TextCategoria-link"
                                                    id={`radio-${idx}`}
                                                    type="radio"
                                                    variant="danger"
                                                    name="radio"
                                                    value={item.Id_Categoria}
                                                    checked={
                                                        filterValue ===
                                                        `${item.Id_Categoria}`
                                                    }
                                                    onChange={(e) =>
                                                        setFilterValue(
                                                            e.currentTarget
                                                                .value
                                                        )
                                                    }                                                  
                                                    onClick={(e) => usefilter(item.Nome_Categoria)}
                                                >
                                                    {item.Nome_Categoria}
                                                </ToggleButton>
                                            )
                                    )}
                                </ButtonGroup>
                                
                            </div>
                        </nav>
                    </section>
                </section>
            </nav>
            <main className="Main-index">
                {/*----------------------------------------------------------------------------------------------------------------------------------*/}

                {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

                {/*----------------- Banner ------------------*/}

                <OfertasBanner />

                {/*----------------- Main ------------------*/}

                <div id="PedidosDisplay">
                    <h1 className="h1Destaque">Ofertas Do Dia</h1>
                </div>
                <div className="Carousel-main">
                    <div className="ofertasContainer">
                        {/*Apenas Renderiza Dentro do Carorusel os produtos com o atributo emOferta "1" */}

                        <Carrousel>
                            {products.map(
                                (product, index) =>
                                    product.Em_Oferta === 1 && (
                                        <Product
                                            key={index}
                                            product={product}
                                            onAdd={onAdd}
                                        ></Product>
                                    )
                            )}
                        </Carrousel>
                    </div>

                    {/*--------------------------------------------------------------*/}
                    {/*----/                                                    \----*/}
                    {/*----/                     Produtos                       \----*/}
                    {/*----/                                                    \----*/}
                    {/*--------------------------------------------------------------*/}
                    <div className="ScrollContent">
                    {filterValue === "0" && (
                        <div className="ProdutosCliContent">
                            <h1 className="h1Destaque">Todos Os Produtos</h1>
                            <Produtos
                                products={products}
                                onAdd={onAdd}
                                busca={search}
                            ></Produtos>
                        </div>
                    )}
                    {filterValue !== "0" && (
                        <div className="ProdutosCliContent">
                            <h1 className="h1Destaque">{categName}</h1>
                            <ProdutosCateg
                                products={products}
                                onAdd={onAdd}
                                category={filterValue}
                                busca={search}
                            ></ProdutosCateg>
                        </div>
                    )}
                    </div>

                    {/*----------------- Offcanvas Carrinho ------------------*/}

                    <Offcanvas
                        show={show2}
                        onHide={handleClose2}
                        placement="end"
                    >
                        <Offcanvas.Header
                            closeButton
                            className="MenuLateralCarrinho"
                        >
                            <Offcanvas.Title
                                style={IconColor2}
                                className="imgCarrinhoOffcanvas"
                            >
                                <img
                                    src={carrinho_compras}
                                    alt="carrinho de compra"
                                    width="40px"
                                    className="imgCarrinhoOffcanvas"
                                ></img>
                                Carrinho
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="offcanvasBodyCarrinho">
                            {/*----------------- Carrinho ------------------*/}

                            <Basket
                                cartItems={cartItems}
                                onAdd={onAdd}
                                onRemove={onRemove}
                            ></Basket>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>

                {/*----------------- Footer ------------------*/}

                <FooterCli />
            </main>
        </div>
    );
}

export default Main;
