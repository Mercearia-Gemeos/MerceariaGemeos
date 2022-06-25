import Axios from "axios";
//Axios

import { Container, Form, Button} from "react-bootstrap";
//Bootstrap

import NavbarEstatico from "../../../components/client/navbars/navbar-estatico/NavbarEstatico";
import NavbarPrincipal from "../../../components/client/navbars/navbar-principal/NavbarPrincipal";
import FooterCli from "../../../components/client/footer/FooterCli";
import { Link } from "react-router-dom";
//Componentes

import useStore from "../../../hooks/useStore";
import { useState} from "react";
//Hooks

import "./PedidoCliente.css";
//Css

function PedidoCliente() {
    const { ItemCarrinho} = useStore();

    const itemsPrice = ItemCarrinho.reduce(
        (a, c) => a + c.Quantidade * c.Valor,
        0
    );
    const totalPrice = itemsPrice.toFixed(2);

    //------------------------------------------------------------------//
    //                   UseStates De Cadastro                         //
    //----------------------------------------------------------------//

    const { authCli } = useStore();

    const idCli = authCli.id;

    let idPedido = 0;

    const [formaPagamento, setFormaPagamento] = useState("Dinheiro");
    const [observacaoPedido, setObservacaoPedido] = useState(" ");
    const [pedidoSucesso, setPedidoSucesso] = useState(false);

    //Limpa Mensagens de erro ao digitar nos campos

    //----------------------------------------------------------------//
    //                   Função De Cadastro                          //
    //--------------------------------------------------------------//

    const cadastrarItemPedido = (FuncIdProd, FuncValor, FuncQuant) => {
        Axios.post("http://https://gemeos-server.herokuapp.com/:4000/itemPedido", {
            id_pedido: idPedido,
            id_produto: FuncIdProd,
            valor: FuncValor,
            prodQuantidade: FuncQuant,
        }).catch((error) => {
            console.log(error);
        });
    };

    const cadastrarPedido = (e) => {
        Axios.post("http://https://gemeos-server.herokuapp.com/:4000/pedidos", {
            id_Cli: idCli,
            formaPagamento: formaPagamento,
            observacao: `${observacaoPedido}`,
        }).then((response) => {
            idPedido = response.data.Id_Pedido;
            ItemCarrinho.forEach((item) => {
                cadastrarItemPedido(
                    item.Id_Produto,
                    item.Valor,
                    item.Quantidade
                );
            });
            return setPedidoSucesso(true);
        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            cadastrarPedido();
        }
        setValidated(true);
    };
    const [validated, setValidated] = useState(false);

    return (
        <>
            <section className="containerPedidoCliente">
                <NavbarEstatico />
                <NavbarPrincipal />
                {pedidoSucesso ? (
                    <>
                        <main className="MainPedidoCli">
                            <div>
                                <section className="ContainerPedidoFilho">
                                    <div className="CarrinhoDeCompraPedido">
                                        <h1 className="ItensDoCarrinhoDeCompra">
                                            {" "}
                                            Produtos do pedido
                                        </h1>
                                        <Container className="CarrinhoDeCompraPedidoFilho">
                                            <table className="TabelaCarrinho">
                                                <tbody>
                                                    <tr className="LinhaDeCimaTabela">
                                                        <td className="ColunaCarrinho">
                                                            {" "}
                                                            Nome do produto
                                                        </td>
                                                        <td className="ColunaCarrinho">
                                                            {" "}
                                                            Quantidade
                                                        </td>
                                                        <td className="ColunaCarrinho">
                                                            {" "}
                                                            Preço
                                                        </td>
                                                    </tr>
                                                    {ItemCarrinho.map(
                                                        (item, idx, valor) => (
                                                            <tr
                                                                key={idx}
                                                                className="linhaTabela"
                                                            >
                                                                <td className="ColunaCarrinho">
                                                                    {" "}
                                                                    {
                                                                        item.Nome_Produto
                                                                    }{" "}
                                                                </td>
                                                                <td className="ColunaCarrinho">
                                                                    {
                                                                        item.Quantidade
                                                                    }
                                                                </td>
                                                                <td className="ColunaCarrinho">
                                                                    R$
                                                                    {valor = (item.Valor * item.Quantidade).toFixed(2) }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                            <Container className="containerTotalPrice">
                                                <div className="TotalPrice">
                                                    R${totalPrice}
                                                </div>
                                            </Container>
                                        </Container>
                                    </div>

                                    <div className="PedidoConcluido">
                                        <p className="PedidoConcluidoText">
                                            Pedido Realizado Com Sucesso!{" "}
                                        </p>
                                        <p>
                                            <Link
                                                className="PedidoConcluidoLink"
                                                to="/GerenciarPedidos"
                                            >
                                                Veja Seus Pedidos
                                            </Link>
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </>
                ) : (
                    <>
                        <main className="MainPedidoCli">
                            <div>
                                <section className="ContainerPedidoFilho">
                                    <div className="CarrinhoDeCompraPedido">
                                        <h1 className="ItensDoCarrinhoDeCompra">
                                            {" "}
                                            Produtos do pedido
                                        </h1>
                                        <Container className="CarrinhoDeCompraPedidoFilho">
                                            <table className="TabelaCarrinho">
                                                <tbody>
                                                    <tr className="LinhaDeCimaTabela">
                                                        <td className="ColunaCarrinho">
                                                            {" "}
                                                            Nome do produto
                                                        </td>
                                                        <td className="ColunaCarrinho">
                                                            {" "}
                                                            Quantidade
                                                        </td>
                                                        <td className="ColunaCarrinho">
                                                            {" "}
                                                            Preço
                                                        </td>
                                                    </tr>
                                                    {ItemCarrinho.map(
                                                        (item, idx, valor) => (
                                                            <tr
                                                                key={idx}
                                                                className="linhaTabela"
                                                            >
                                                                <td className="ColunaCarrinho">
                                                                    {" "}
                                                                    {
                                                                        item.Nome_Produto
                                                                    }{" "}
                                                                </td>
                                                                <td className="ColunaCarrinho">
                                                                    {
                                                                        item.Quantidade
                                                                    }
                                                                </td>
                                                                
                                                                <td className="ColunaCarrinho">
                                                                    R$ {valor = (item.Valor * item.Quantidade).toFixed(2) }
                                                                    
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                            <Container className="containerTotalPrice">
                                                <div className="TotalPrice">
                                                    R${totalPrice}
                                                </div>
                                            </Container>
                                        </Container>
                                    </div>

                                    <div className="Formularia">
                                        <Form
                                            noValidate
                                            validated={validated}
                                            onSubmit={handleSubmit}
                                        >
                                            <Form.Group className="mb-3">
                                                <Form.Label>
                                                    Forma de pagamento
                                                </Form.Label>
                                                <Form.Select
                                                    aria-label="Em Destaque"
                                                    onChange={(e) => {
                                                        setFormaPagamento(
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    <option value="Dinheiro">
                                                        Dinheiro
                                                    </option>
                                                    <option value="Cartão">
                                                        Cartão
                                                    </option>
                                                    <option value="Pix">
                                                        Pix
                                                    </option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                                required
                                            >
                                                <Form.Label>
                                                    Observação
                                                </Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    row={3}
                                                    placeholder=""
                                                    className="textAreaObs"
                                                    maxLength="200"
                                                    onChange={(e) => {
                                                        setObservacaoPedido(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Por favor prencha o campo
                                                    acima!
                                                </Form.Control.Feedback>
                                                <Form.Text className="text-muted">
                                                    Neste campo coloque se você
                                                    precisara de troco,
                                                    informações adicionais sobre
                                                    o pedido!
                                                </Form.Text>
                                            </Form.Group>

                                            <Button
                                                type="submit"
                                                className="btnLoginCli ControleTamanhoButton"
                                            >
                                                Confirmar Pedido!
                                            </Button>
                                        </Form>
                                    </div>
                                </section>
                            </div>
                        </main>
                    </>
                )}
                ;
            </section>
            <div>
                <FooterCli className="FooterPedido FooterPedidoT"> </FooterCli>
            </div>
        </>
    );
}
export default PedidoCliente;
