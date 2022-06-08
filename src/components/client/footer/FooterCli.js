import {
    FaFacebook,
    FaWhatsapp,
    FaInstagram
} from "react-icons/fa";
import { Link } from "react-router-dom";
//Icones

import "./FooterCli.css";
//Css

function FooterCli() {
    return (
        <footer className="footerCli">
            <div className="fotter">
                <div className="Item">
                    {" "}
                    {/*Coluna 1 Onde Se Encontra os Icones Das Redes Sociais*/}
                    <a href="https://www.facebook.com/merceariagemeos" rel="noreferrer" target="_blank" ><FaFacebook className="socialItens"/></a>
                    <a href="https://www.whatsapp.com/?lang=pt_br" rel="noreferrer" target="_blank" ><FaWhatsapp className="socialItens" /></a>
                    <a href="https://www.instagram.com/merceariagemeos/" rel="noreferrer" target="_blank" ><FaInstagram className="socialItens" /></a> 
                    
                </div>
                <div className="Item">
                    {" "}
                    {/*Coluna 2 Onde Se Encontra o Número de Telefone, Link de menu, e link De Formas de pagamento*/}
                    <ul>
                        <li>(xx) xxxxx-xxxx</li>
                        <li>
                            <Link
                                className="linkPadraoFooter"
                                to="/CentralDeAtendimento"
                            >
                                Contato
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link
                                className="linkPadraoFooter"
                                to="/FormasDePagamento"
                            >
                                {" "}
                                Formas de pagamentos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default FooterCli;
