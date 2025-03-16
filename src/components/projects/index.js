import React from "react";
import './index.scss'


export default function Projeto({ tittle, text, imagem, link }) {

    return (
        <div className="project">
            <div className="left">
                <div className="texts">
                    <p className="tittle">{tittle}</p>
                    <p className="text">{text}</p>
                </div>
                <a className="button" href={link} target="_blank" rel="noopener noreferrer">
                    <p>Visitar</p>
                    <img src="/assets/svg/arrow.svg" alt="" />



                </a>
            </div>
            <div className="right">
                <img src={imagem} alt="" />
            </div>
        </div>
    );

}
