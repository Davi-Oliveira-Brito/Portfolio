import './index.scss';
import React from 'react';


import Projeto from '../../components/projects/index.js';
import Header from '../../components/header/index.js';

function LandingPage() {

    const CurriculoDownload = () => {
        const link = document.createElement("a");
        link.href = "/Assets/pdf/CV_Davi Oliveira Brito.pdf"; // Caminho do arquivo PDF
        link.download = "CV_Davi_Oliveira_Brito.pdf"; // Nome do arquivo ao ser baixado
        link.click();

        //essa função é a mesma coisa que criar uma tag <a> com o atributo 'download', exemplo:
        //<a href="/Assets/pdf/Curriculo_Davi_Oliveira_Brito.pdf" download> Baixar CV </a>
        //ambas funcionam do mesmo jeito
    };

    let SobreMim = `Tenho 18 anos, estudo Análise e Desenvolvimento de Sistemas (ADS) na FAM e sou apaixonado por programação. 
    Estou sempre buscando aprender e colocar em prática novos conhecimentos para crescer como desenvolvedor. 
    Neste portfólio, você encontra meus projetos e experiências que mostram minha evolução na área.`





    return (
        <>
            <section className='page1' id='Home' >
                <Header />

                <div className='infos'>
                    <div className="infos-text">
                        <p className='l1'>Olá! me chamo</p>
                        <h1 className='l2'>Davi</h1>
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
                        <p className='p2-text'>{SobreMim}</p>
                    </div>

                    <div className='right'>
                        <img src="/Assets/svg/ilustra.svg" alt="Ilustração" />

                    </div>
                </div>

                <div className='techs'>
                    <h1 className='tech-tittle'>Tecnologias</h1>
                    <div className='icons'>
                        <img src="/Assets/svg/js.svg" alt="JS Icon" />
                        <img src="/Assets/svg/node.svg" alt="Node Icon" />
                        <img src="/Assets/svg/sql.svg" alt="SQL Icon" />
                        <img src="/Assets/svg/react.svg" alt="React Icon" />
                        <img src="/Assets/svg/sass.svg" alt="SASS Icon" />
                        <img src="/Assets/svg/html.svg" alt="HTML Icon" />
                        <img src="/Assets/svg/css.svg" alt="CSS Icon" />
                        <img src="/Assets/svg/Figma.svg" alt="Figma Icon" />
                    </div>
                </div>
            </section>
            <section className='page3' id='Projetos' >
                <div className='p3'>
                    <div className='p3-tittle' >
                        <h1>Projetos</h1>
                    </div>
                    <div className='projetos'>
                        <Projeto
                            tittle="DevMonk"
                            text="Auxílio no desenvolvimento de tarefas frontend e backend conforme planejamento e arquitetura previamente definidos. Participação em reuniões de alinhamento, delegação de tarefas e atualização de status."
                            imagem="/assets/svg/devmonk.svg"
                            link="https://devmonk.com.br/"
                        />
                        <Projeto
                            tittle="Food Manager 🚧 Em andamento"
                            text="Sistema para organização e gerenciamento de alimentos, desenvolvido com React.js (frontend), Node.js (API REST) e MySQL (banco de dados).
                                Permite registrar ambientes de armazenamento, controlar validade, quantidade e peso dos alimentos, além de editar, excluir e receber notificações de produtos próximos ao vencimento.
                                O projeto inclui protótipo visual, modelagem do banco e implementação da API funcional."
                            imagem="/assets/svg/FoodManager.svg"
                            link="https://www.linkedin.com/posts/davi-oliveira-brito-b7267b252_uiux-figma-projetospessoais-activity-7353504004502364165-Qg_g"
                        />
                        <Projeto
                            tittle="Feira das Profissões"
                            text="Desenvolvimento de uma aplicação WEB para o Projeto Feira das Profissões 2022
                                Apresentação dos Projetos desenvolvidos pelos alunos do curso de informática.
                                Apresentando códigos e tirando duvidas feitas pelos visitantes sobre o curso etc. Obs(Site original não está mais no ar)"
                            imagem="/assets/svg/frei.svg"
                            link="https://glistening-axolotl-bd8dd6.netlify.app/"
                        />
                        <Projeto
                            tittle="CineArchive"
                            text="Desenvolvimento de uma aplicação WEB para consulta de filmes, consumindo uma API pública (TMDB). 
                            Implementação de rotas com React Router Dom, estilização com Sass e deploy realizado na Vercel."
                            imagem="/assets/svg/cinearchive.svg"
                            link="https://cinearchive.vercel.app/"
                        />
                    </div>
                </div>


            </section>

            <section className='page4' id='Contato'>
                <div className='pg4-tittle'>
                    <h1 className='tittle'> Contato </h1>
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
        </>
    );

}
export default LandingPage;