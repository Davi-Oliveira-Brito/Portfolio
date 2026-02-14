import Stack from "../../components/Stacks";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerCards = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="About" id="About">
      <section className="AboutContent">

        <motion.div
          className="AboutTop"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp}>{t("about.titulo")}</motion.h1>
          <motion.p variants={fadeUp}>{t("about.bio")}</motion.p>
        </motion.div>

        <motion.div
          className="AboutBottom"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp}>{t("about.tecnologias")}</motion.h1>
          <motion.div
            className="Stacks"
            variants={staggerCards}
          >
            <motion.div variants={fadeUp}>
              <Stack
                tipo={t("about.stacks.principal.tipo")}
                icons={[
                  { img: "/Assets/images/JavaScript.png", alt: "JavaScript" },
                  { img: "/Assets/images/TypeScript.png", alt: "TypeScript" },
                  { img: "/Assets/images/Nest.png", alt: "Nest" },
                  { img: "/Assets/images/React.png", alt: "React" },
                  { img: "/Assets/images/MySQL.png", alt: "MySQL" },
                  { img: "/Assets/images/Sass.png", alt: "Sass" },
                  { img: "/Assets/images/Figma.png", alt: "Figma" },
                ]}
                desc={t("about.stacks.principal.desc")}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Stack
                tipo={t("about.stacks.frontend.tipo")}
                icons={[
                  { img: "/Assets/images/JavaScript.png", alt: "JavaScript" },
                  { img: "/Assets/images/TypeScript.png", alt: "TypeScript" },
                  { img: "/Assets/images/HTML.png", alt: "HTML" },
                  { img: "/Assets/images/CSS.png", alt: "CSS" },
                  { img: "/Assets/images/Sass.png", alt: "Sass" },
                  { img: "/Assets/images/Next.png", alt: "Next" },
                  { img: "/Assets/images/React.png", alt: "React" },
                ]}
                desc={t("about.stacks.frontend.desc")}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Stack
                tipo={t("about.stacks.backend.tipo")}
                icons={[
                  { img: "/Assets/images/Node.png", alt: "Node" },
                  { img: "/Assets/images/Nest.png", alt: "Nest" },
                  { img: "/Assets/images/CSharp.png", alt: "C#" },
                  { img: "/Assets/images/NET.png", alt: ".NET" },
                  { img: "/Assets/images/MySQL.png", alt: "MySQL" },
                  { img: "/Assets/images/PostgreSQL.png", alt: "PostgreSQL" },
                  { img: "/Assets/images/MongoDB.png", alt: "MongoDB" },
                ]}
                desc={t("about.stacks.backend.desc")}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Stack
                tipo={t("about.stacks.devops.tipo")}
                icons={[
                  { img: "/Assets/images/Git.png", alt: "Git" },
                  { img: "/Assets/images/GitHub.png", alt: "GitHub" },
                  { img: "/Assets/images/AzureDevOps.png", alt: "AzureDevOps" },
                ]}
                desc={t("about.stacks.devops.desc")}
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </section>
    </main>
  );
}