import Stack from "../../components/Stacks";
import "./index.scss";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="About" id="About">
      <section className="AboutContent">
        <div className="AboutTop">
          <h1>{t("about.titulo")}</h1>
          <p>{t("about.bio")}</p>
        </div>
        <div className="AboutBottom">
          <h1>{t("about.tecnologias")}</h1>
          <div className="Stacks">
            <Stack
              tipo={t("about.stacks.principal.tipo")}
              icons={[
                { img: "/Assets/images/JavaScript.png", alt: "JavaScript" },
                { img: "/Assets/images/TypeScript.png", alt: "TypeScript" },
                { img: "/Assets/images/Nest.png", alt: "Nest" },
                { img: "/Assets/images/React.png", alt: "React" },
                { img: "/Assets/images/PostgreSQL.png", alt: "PostgreSQL" },
              ]}
              desc={t("about.stacks.principal.desc")}
            />
            <Stack
              tipo={t("about.stacks.frontend.tipo")}
              icons={[
                { img: "/Assets/images/JavaScript.png", alt: "JavaScript" },
                { img: "/Assets/images/HTML.png", alt: "HTML" },
                { img: "/Assets/images/CSS.png", alt: "CSS" },
                { img: "/Assets/images/Sass.png", alt: "Sass" },
                { img: "/Assets/images/Next.png", alt: "Next" },
                { img: "/Assets/images/Figma.png", alt: "Figma" },
              ]}
              desc={t("about.stacks.frontend.desc")}
            />
            <Stack
              tipo={t("about.stacks.backend.tipo")}
              icons={[
                { img: "/Assets/images/CSharp.png", alt: "C#" },
                { img: "/Assets/images/NET.png", alt: ".NET" },
                { img: "/Assets/images/PostgreSQL.png", alt: "PostgreSQL" },
                { img: "/Assets/images/MongoDB.png", alt: "MongoDB" },
              ]}
              desc={t("about.stacks.backend.desc")}
            />
            <Stack
              tipo={t("about.stacks.devops.tipo")}
              icons={[
                { img: "/Assets/images/Git.png", alt: "Git" },
                { img: "/Assets/images/GitHub.png", alt: "GitHub" },
                { img: "/Assets/images/AzureDevOps.png", alt: "AzureDevOps" },
              ]}
              desc={t("about.stacks.devops.desc")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
