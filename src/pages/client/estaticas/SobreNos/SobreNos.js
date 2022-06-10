import React from "react";
//Blicliotecas

import NavbarEstatico from "../../../../components/client/navbars/navbar-estatico/NavbarEstatico";
import NavbarPrincipal from "../../../../components/client/navbars/navbar-principal/NavbarPrincipal";
import FooterCli from "../../../../components/client/footer/FooterCli";
import CardEquipeV from "../../../../components/client/cards/CardEquipe/CardEquipeV";
import CardEquipeG from "../../../../components/client/cards/CardEquipe/CardEquipeG";
import CardEquipeI from "../../../../components/client/cards/CardEquipe/CardEquipeI";
import CardEquipeB from "../../../../components/client/cards/CardEquipe/CardEquipeB";
import CardEquipeD from "../../../../components/client/cards/CardEquipe/CardEquipeD";
//Componentes

import "./SobreNos.css";
//Css

import IconeSobre from "../../../../assets/img-client/sobreNosP.png";
import IconeEquipe from "../../../../assets/img-client/equipe.png";
//Img

function SobreNos() {
    return (
        <div>
            <NavbarEstatico />
            <NavbarPrincipal />
            <section className="SobreContainer">
                <h1 className="SobreTitulo">SOBRE NÓS</h1>
                <div className="containerSobreNós">
                    <div className="container-flex">
                        <img src={IconeSobre} alt="Icone sobre"></img>
                    </div>
                    <div className="container-flex">
                        <div className="ConteudoContainerSobre">
                            <h2 className="SegundoTitulo">
                                DIFERENTE DE TODOS E IGUAL À VOCÊ
                            </h2>
                            <p className="TEXTSOBRENOS">
                                {" "}
                                Nossa mercearia tem esse nome com o intuito de
                                parecer cada vez mais com seu cliente, e juntos,
                                se torna um só. Valorizamos a parceria com
                                nossos clientes e nosso time, sempre a postos
                                para atender a todos. Somos essência está na
                                forma como adiministramos o nosso negócio de
                                maneira bem particular, com transparência,
                                simplicidade e hulmildade, de nossa pessoas e em
                                nosso processo, e sempre com foco no cliente.
                            </p>
                            <p className="TEXTSOBRENOS">
                                {" "}
                                E sustentado por três pilares que traduzem a
                                nossa forma de agir e pensar. Foi por meio deles
                                que nos tornamos destaque no cenário nacional
                            </p>
                            <p className="TEXTSOBRENOS">
                                - Nosso maior patrimônio são as pessoas.
                            </p>
                            <p className="TEXTSOBRENOS">
                                - Nossa essências é a simplicidade.
                            </p>
                            <p className="TEXTSOBRENOS">
                                - Nossa segredo é saber negociar.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="containerSobreNós">
                    <div className="container-flex">
                        <img
                            className="imgEquipe"
                            src={IconeEquipe}
                            alt="Icone tecTree"
                            width="90px"
                            height="90px"
                        ></img>
                    </div>
                    <div className="container-flex">
                        <div className="ConteudoContainerSobre">
                            <h2 className="SegundoTitulo">A EQUIPE</h2>
                            <p className="TEXTSOBRENOS">
                                {" "}
                                Equipe <i>TecTree</i>, O nome foi escolhido com o objetivo de
                                relacionar tecnologia e sustentabilidade, onde a
                                palavra “<i>Tec</i>”, está relacionado a tecnologia, e
                                <i>“Tree”</i>, que em inglês significa arvore, está
                                representando a sustentabilidade, além disso há
                                um trocadilho com o número 3, que em inglês é escrito como
                                <i> "Three"</i>, onde o intuito é representar um
                                triângulo, que simboliza a lógica e a perfeição.
                                Assim como nosso nome, nossa logo é representada
                                por uma árvore, ligada a várias áreas da
                                tecnologia, representando a indústria 5.0, que
                                está ligada cada vez mais ao bem estar da
                                população, usando a tecnologia e
                                sustentabilidade, cuidando do mundo e do meio
                                ambiente. Os tons de azul simbolizam a
                                criatividade, segurança e lógica. Selecionamos
                                essas cores para transmitir aos nossos clientes
                                a paz e segurança de que nossos projetos são
                                confiáveis e seguros para serem utilizados. Os
                                tons de verde simbolizam a natureza, equilíbrio
                                e harmonia. Essas cores foram trazidas para a
                                nossa empresa para representar o futuro e a
                                harmonia entre a sociedade.
                            </p>
                            <div className="CardsEqFlex">
                                <CardEquipeV />
                                <CardEquipeG />
                                <CardEquipeI />
                                <CardEquipeB />
                                <CardEquipeD />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterCli />
        </div>
    );
}
export default SobreNos;
