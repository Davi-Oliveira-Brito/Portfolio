import './index.scss';
import React from 'react';

import { Toaster, toast } from 'react-hot-toast';
import Header from '../../components/header/index.js';
import Card from '../../components/card/index.js';

function LandingPage() {

    const CurriculoDownload = () => {
        const link = document.createElement("a");
        link.href = "/Assets/pdf/CV - Davi Oliveira Brito.pdf"; // Caminho do arquivo PDF
        link.download = "CV - Davi Oliveira Brito.pdf"; // Nome do arquivo ao ser baixado
        link.click();

        //essa função é a mesma coisa que criar uma tag <a> com o atributo 'download', exemplo:
        //<a href="/Assets/pdf/Curriculo_Davi_Oliveira_Brito.pdf" download> Baixar CV </a>
        //ambas funcionam do mesmo jeito
    };
    const copiarEmail = () => {
        const email = "davioliveirabrito@outlook.com";
        navigator.clipboard.writeText(email).then(() => {
            toast.success("Email copiado", {
                style: {
                    fontFamily: "Poppins-Regular",
                    fontSize: "14px"
                },
            });
        });
    };

    

    let SobreMim = `Olá! Sou Davi Oliveira Brito, tenho 19 anos e sou um estudante de Análise e Desenvolvimento de Sistemas na Faculdade das Américas (FAM).
    Tenho me dedicado ao desenvolvimento Full Stack, atuando tanto no Front-End quanto no Back-End e buscando constantemente aprimorar minhas habilidades técnicas e práticas.
    `





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
                        <img src="/Assets/svg/react.svg" alt="React Icon" />
                        <img src="/Assets/svg/CSharp.svg" alt="C# Icon" />
                        <img src="/Assets/svg/NET.svg" alt=".NET Icon" />
                        <img src="/Assets/svg/PostgreSQL.svg" alt="PostgreSQL Icon" />
                        <img src="/Assets/svg/sql.svg" alt="MySQL Icon" />
                        <img src="/Assets/svg/MongoDb.svg" alt="MongoDB Icon" />
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
                     
                        <Card
                            title="DevMonk"
                            text="Auxílio no desenvolvimento de tarefas frontend e backend conforme planejamento e arquitetura previamente definidos. Participação em reuniões de alinhamento, delegação de tarefas e atualização de status."
                            technologies={['JavaScript','React', 'Node.js', 'MongoDB', 'Figma', 'Sass']}

                        />
                        <Card
                            title="Feira das Profissões"
                            text="Desenvolvimento de uma aplicação WEB para o Projeto Feira das Profissões 2022
                                Apresentação dos Projetos desenvolvidos pelos alunos do curso de informática.
                                Apresentando códigos e tirando duvidas feitas pelos visitantes sobre o curso etc."
                            technologies={['JavaScript','React', 'Node.js', 'MySQL', 'Figma', 'Sass']}

                        />
                        <Card
                            title="Finance Manager"
                            text="sistema de gestão financeira pessoal que permite ao usuário cadastrar contas, registrar transações, visualizar dashboards com análises financeiras 
                           e receber orientações inteligentes através de um assistente com IA. O objetivo é facilitar o controle do dinheiro, oferecer clareza sobre hábitos financeiros
                           e sugerir melhorias de forma simples, visual e automatizada"
                            technologies={['C#', '.Net', 'PostgreSQL', 'Figma']}

                        />
                        <Card
                            title="Food Manager"
                            text="Sistema para organização e gerenciamento de alimentos, desenvolvido com React.js (frontend), Node.js (API REST) e MySQL (banco de dados).
                                Permite registrar ambientes de armazenamento, controlar validade, quantidade e peso dos alimentos, além de editar, excluir e receber notificações de produtos próximos ao vencimento.
                                O projeto inclui protótipo visual, modelagem do banco e implementação da API funcional."
                            technologies={['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS']}
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
                    <a onClick={copiarEmail} target="_blank" rel="noopener noreferrer" href="mailto:davioliveirabrito@outlook.com" >  <img src="/assets/svg/email.svg" alt="" />   <Toaster />  </a>
                </div>

                <div className='assinatura'>
                    <p>Developed by </p>
                </div>
            </section>
        </>
    );

}
export default LandingPage;