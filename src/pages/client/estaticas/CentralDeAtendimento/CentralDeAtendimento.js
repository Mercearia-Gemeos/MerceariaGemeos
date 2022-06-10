import NavbarEstatico from '../../../../components/client/navbars/navbar-estatico/NavbarEstatico';
import NavbarPrincipal from '../../../../components/client/navbars/navbar-principal/NavbarPrincipal';
import FooterCli from '../../../../components/client/footer/FooterCli';
//Componentes

//Css

import './CentralDeAtendimento.css'

// Impotando imagem 

import IconeAtendimento from '../../../../assets/img-client/atendimentoP.png'
import IconeTelefone from'../../../../assets/img-client/contatop.png'

function CentralDeAtendimento() {
    return (
        <section className="contentCA">
            <NavbarEstatico/>
            <NavbarPrincipal/>
            <section className='ContainerCentralAtendimento'>

                {/*================= TITULO ===========================*/}

                <h1 className='tituloEstatico'>CENTRAL DE ATENDIMENTO</h1>

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
                        <img src={IconeAtendimento} alt="Atendimento" height="100px"></img>
                    </div>
                    {
                        // CONTEÚDOS 
                    }
                    <div className=''>
                        <h2 className='TituloQuadro'> ATENDIMENTO</h2>
                        <p className='ConteudoText' > Deixe sua dúvida, insatisfação, agradecimento, entre outros. Nos envie um e-mail ou uma messagem no nosso WhatsApp, com detalhamento do ocorrido, nossa equipe te responderá em no máximo 24 horas. Em caso de contato urgente, fassa uma ligação pelo WhatsApp</p>
                    </div>
                </div>
                <div className='LinhaFlex'>
                    {
                        // ICONE 
                    }
                    <div className="IconePagamento">
                    <img src={IconeTelefone} alt="Atendimento" height="100px"></img>
                    </div>
                    {
                        // CONTEÚDOS 
                    }
                    <div className=''>
                        <h2 className='TituloQuadro'> CONTATOS</h2>
                        <p className='ConteudoText'>- (xx) xxxxx-xxxx</p>
                        <p className='ConteudoText'>- gemeosltda@gmail.com</p>
                        <p className='ConteudoText'>- <a href="https://www.facebook.com/merceariagemeos" rel="noreferrer" target="_blank" >facebook.com/merceariagemeos</a></p>
                        <p className='ConteudoText'>- <a href="https://www.instagram.com/merceariagemeos/" rel="noreferrer" target="_blank" >instagram.com/merceariagemeos</a></p>

                    </div>
                    
                </div>
                <div className='footerSpace'></div>
            </section>
            <div className='FooterCent'>
            <FooterCli/>
            </div>
        </section>
    );
}
export default CentralDeAtendimento;