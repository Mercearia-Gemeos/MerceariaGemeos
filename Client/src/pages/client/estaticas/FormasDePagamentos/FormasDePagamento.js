import NavbarEstatico from '../../../../components/client/navbars/navbar-estatico/NavbarEstatico';
import NavbarPrincipal from '../../../../components/client/navbars/navbar-principal/NavbarPrincipal';
import FooterCli from '../../../../components/client/footer/FooterCli';
//Componentes

import './FormasDePagamento.css'
//Css

import IconeCartao from "../../../../assets/img-client/cartaoP.png";
import IconeDinheiro from "../../../../assets/img-client/dinheiroP.png";
import IconePix from "../../../../assets/img-client/pixP.png"
// Imgs 

function FormasDePagamento() {
    return (
        <section className='Container-FormasDePagamento'>
            <NavbarEstatico />
            <NavbarPrincipal />
            <section className='FormasDePagamento'>
                <h1 className='tituloEstatico'> FORMAS DE PAGAMENTO</h1>

            {/*

            ==============================================================
                                LINHAS COM OS CONTEÚDOS*
            ==============================================================

            */}

                <div className='LinhaFlex'>
                    {
                        // ICONE
                    }
                    <div className="IconePagamento">
                        <img img src={IconeCartao} alt="Atendimento" height="100px"></img>

                    </div>
                    {
                        // CONTEÚDOS 
                    }
                    <div className='ConteudoContainerPagementos'>
                        <h2 className='TituloQuadro'> CARTÃO DE CREDITO</h2>
                        <p className='ConteudoText' > Aceitamos os cartões de crédito: Visa, Mastercard, ELO, American Express, Diners e Hipercard. Parcelamos em 2 vezes sem juros em todos os cartões de crédito aceitos.</p>
                        <p className="ConteudoText"> O pagamento por cartão de crédito é totalmente seguro.</p>
                        <p className="ConteudoText">Os dados do cartão do cliente são digitados diretamente no ambiente da operadora, não havendo tráfego dos mesmos, entre a loja e a operadora.</p>
                        <p className="ConteudoText">Dessa forma,a mercearia não armazena nenhum tipo de informação de seus dados do cartão de crédito, sendo o mesmo procedimento adotado para qualquer uma das bandeiras aceitas.</p>
                        <p className="ConteudoText">Ao finalizar a compra, faremos a reserva do saldo no cartão utilizado. O pedido será analisado e está sujeito a aprovação de crédito. Sendo necessário, haverá o contato via telefone, para validar dados, para a sua segurança.</p>
                    </div>
                </div>
                <div className='LinhaFlex'>
                    {
                        // ICONE 
                    }
                    <div className="IconePagamento">
                        <img src={IconeDinheiro} alt="Atendimento" height="100px"></img>
                    </div>
                    {
                        // CONTEÚDOS 
                    }
                    <div className='ConteudoContainerPagementos'>
                        <h2 className='TituloQuadro'> DINHEIRO</h2>
                        <p className='ConteudoText'>O pagamento em dinehiro sera realizado na entrega do pedido. Quando finalizar a compra haverá uma opção para troco, caso necessário</p>

                    </div>

                </div>
                <div className='LinhaFlex'>
                    {
                        // ICONE 
                    }
                    <div className="IconePagamento">
                        <img src={IconePix} alt="Atendimento" height="100px"></img>
                    </div>
                    {
                        // CONTEÚDOS 
                    }
                    <div className='ConteudoContainerPagementos'>
                        <h2 className='TituloQuadro'> PIX</h2>
                        <p className='ConteudoText'>O pagamento sera realizado atráves do pix e feito após a seleção de itens desejados pelo cliente, sera gerado um chave pix, e após a configuração do pagamento o pedido sera finalizado e saira para a entraga </p>

                    </div>

                </div>
            </section>
            <FooterCli />
        </section>
    );
}
export default FormasDePagamento;