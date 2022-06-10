import { useRef } from "react";
//Hooks

import Scroll from "../../../assets/img-client/216151_right_chevron_icon.png";
//Imgs

import "./Carrosel.css";
//Css

function Carrosel({ children }) {
    const carousel = useRef(null);
    const EsquerdaClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    const DireitaClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <section className="Container-carrousel-section">
            <div className="Container-car" ref={carousel}>
                {children}{" "}

                {/*

                     /////////////////////////////////////////////////////
                    //                                                 //
                   //    tudo que estiver entre as tags Carrousel,    //
                  //    irão se tornar itens dele                    //
                 //                                                 //
                ///////////////////////////////////////////////////// 
                
                */}
            
            </div>
            <div className="buttons-carousel">
                <button className="left-scroll" onClick={EsquerdaClick}>
                    <img src={Scroll} alt="Scrol left"></img>
                </button>
                <button className="right-scroll" onClick={DireitaClick}>
                    <img src={Scroll} alt="Scrol right"></img>
                </button>
            </div>
        </section>
    );
}
export default Carrosel;
