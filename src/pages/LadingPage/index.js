import './index.scss';
import React from 'react';
import DarkLightMode from '../../components/light-darkMode/index.js';
import { Link } from 'react-scroll';


import Projeto from '../../components/projects/index.js';
import Header from '../../components/header/index.js';

function LandingPage() {

    const CurriculoDownload = () => {
        const link = document.createElement("a");
        link.href = "/Assets/pdf/Curriculo_Davi_Oliveira_Brito.pdf";
        link.download = "Davi Oliveira Brito - Curriculo.pdf";
        link.click();

        //essa função é a mesma coisa que criar uma tag <a> com o atributo 'download', exemplo:
        //<a href="/Assets/pdf/Curriculo_Davi_Oliveira_Brito.pdf" download> Baixar CV </a>
        //ambas funcionam do mesmo jeito
    };





    return (
        <main>
            <section className='page1' id='Home'>
                <Header/>

                <div className='infos'>
                    <div className="infos-text">
                        <p className='l1'>Olá! me chamo</p>
                        <p className='l2'>Davi</p>
                        <p className='l3'>Desenvolvedor <span>Full-Stack</span> e Técnico em Informática</p>
                        <p className='l4'>Técnico em Informática pelo Instituto Social Nossa Senhora de Fátima</p>
                    </div>

                    <button className='cv-button' onClick={CurriculoDownload}>
                        Baixar CV
                    </button>
                </div>
            </section>

            <section className='page2' id='SobreMim' >
                <div className='about'>
                    <div className='left'>
                        <h1 className='p2-tittle'>Sobre Mim</h1>
                        <p className='p2-text'>Tenho 18 anos e sou estudante de programação, procurando sempre evoluir e adquirir novos conhecimentos.
                            Tenho conhecimento e algumas experiencias que serão apresentadas nesse portfólio.</p>
                    </div>

                    <div className='right'>
                        <img src="/Assets/svg/ilustra.svg" alt="Ilustração" />

                    </div>
                </div>

                <div className='techs'>
                    <p className='tech-tittle'>Tecnologias</p>
                    <div className='icons'>
                        <img src="/Assets/svg/js.svg" alt="JS Icon" />
                        <img src="/Assets/svg/node.svg" alt="Node Icon" />
                        <img src="/Assets/svg/sql.svg" alt="SQL Icon" />
                        <img src="/Assets/svg/react.svg" alt="React Icon" />
                        <img src="/Assets/svg/sass.svg" alt="SASS Icon" />
                        <img src="/Assets/svg/html.svg" alt="HTML Icon" />
                        <img src="/Assets/svg/css.svg" alt="CSS Icon" />
                    </div>
                </div>
            </section>
            <section className='page3' id='Projetos' >
                <div className='p3'>
                    <div className='p3-tittle' >
                        <p>Projetos</p>
                    </div>
                    <div className='projetos'>
                        <Projeto
                            tittle="DevMonk"
                            text="Auxílio no desenvolvimento de tarefas frontend e backend conforme planejamento e arquitetura previamente definidos. Participação em reuniões de alinhamento, delegação de tarefas e atualização de status."
                            imagem="/assets/svg/devmonk.svg"
                            link="https://devmonk.com.br/"
                        />
                        <Projeto
                            tittle="Feira das Profissões"
                            text="Desenvolvimento de uma aplicação WEB para o Projeto Feira das Profissões 2022
                                Apresentação dos Projetos desenvolvidos pelos alunos do curso de informática.
                                Apresentando códigos e tirando duvidas feitas pelos visitantes sobre o curso etc. Obs(Site original não está mais no ar)"
                            imagem="/assets/svg/frei.svg"
                            link="https://glistening-axolotl-bd8dd6.netlify.app/"
                        />
                    </div>
                </div>


            </section>

            <section className='page4' id='Contato'>
                <div className='pg4-tittle'>
                    <p className='tittle'> Contato </p>
                </div>

                <div className='pg4-icons'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/davi-oliveira-brito-b7267b252/">  <img src="/assets/svg/linkedin.svg" alt="" />  </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5511972193396">  <img src="/assets/svg/wpp.svg" alt="" />       </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Davi-Oliveira-Brito">  <img src="/assets/svg/github.svg" alt="" />    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:davioliveirabrito@outlook.com">  <img src="/assets/svg/email.svg" alt="" />     </a>
                </div>

                <div className='assinatura'>
                    <p>Developed by </p>
                </div>
            </section>
        </main>
    );

}
export default LandingPage;