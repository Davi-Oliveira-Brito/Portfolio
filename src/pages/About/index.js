import Stack from "../../components/Stacks";
import "./index.scss";

export default function About() {
  return (
    <main className="About" id="About">
      <section className="AboutContent">
        <div className="AboutTop">
          <h1>Sobre Mim</h1>
          <p>
            Tenho 19 anos e sou estudante de Análise e Desenvolvimento de
            Sistemas, com experiência em projetos Full Stack. Atualmente estou
            focado em NestJS e TypeScript, com interesse em backend, e iniciando
            meus estudos em C# e .NET. Também tenho experiência com Figma,
            atuando desde a prototipação até a implementação das soluções.
          </p>
        </div>
        <div className="AboutBottom">
          <h1>Tecnologias</h1>
          <div className="Stacks">
            <Stack
              tipo="Stack Principal"
              icons={[
                { img: "/Assets/images/JavaScript.png", alt: "JavaScript" },
                { img: "/Assets/images/TypeScript.png", alt: "TypeScript" },
                { img: "/Assets/images/Nest.png", alt: "Nest" },
                { img: "/Assets/images/React.png", alt: "React" },
                { img: "/Assets/images/PostgreSQL.png", alt: "PostgreSQL" },
              ]}
              desc="Desenvolvimento full stack com foco em aplicações web modernas, criação de APIs REST, autenticação e integração com banco de dados relacional."
            />
            <Stack
              tipo="Front End"
              icons={[
                { img: "/Assets/images/JavaScript.png", alt: "JavaScript" },
                { img: "/Assets/images/HTML.png", alt: "HTML" },
                { img: "/Assets/images/CSS.png", alt: "CSS" },
                { img: "/Assets/images/Sass.png", alt: "Sass" },
                { img: "/Assets/images/Next.png", alt: "Next" },
                { img: "/Assets/images/Figma.png", alt: "Figma" },
              ]}
              desc="Construção de interfaces responsivas e acessíveis, aplicando boas práticas de componentização, estilização e experiência do usuário."
            />
            <Stack
              tipo="Back End e Banco de Dados"
              icons={[
                { img: "/Assets/images/CSharp.png", alt: "C#" },
                { img: "/Assets/images/NET.png", alt: ".NET" },
                { img: "/Assets/images/PostgreSQL.png", alt: "PostgreSQL" },
                { img: "/Assets/images/MongoDB.png", alt: "MongoDB" },
              ]}
              desc="Estruturação de APIs, regras de negócio e modelagem de dados, com estudos e prática em ecossistema .NET e bancos NoSQL."
            />
            <Stack
              tipo="Versionamento e DevOps"
              icons={[
                { img: "/Assets/images/Git.png", alt: "Git" },
                { img: "/Assets/images/GitHub.png", alt: "GitHub" },
                { img: "/Assets/images/AzureDevOps.png", alt: "AzureDevOps" },
              ]}
              desc="Controle de versão, organização de tarefas e integração contínua utilizando Git, Azure DevOps e fluxos colaborativos."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
