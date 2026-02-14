import "./index.scss";
import SocialLinks from "../../components/SocialLinks";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  const CurriculoDownload = () => {
    const link = document.createElement("a");
    link.href = "/Assets/pdf/CV - Davi Oliveira Brito.pdf";
    link.download = "CV - Davi Oliveira Brito.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { t } = useTranslation();

  return (
    <main className="Home">
      <section className="HomeContent" id="Home">

        <motion.div
          className="HomeLeft"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp}>Davi Oliveira Brito</motion.h1>
          <motion.p variants={fadeUp}>{t("home.subtitulo")}</motion.p>
          <motion.div variants={fadeUp}>
            <SocialLinks />
          </motion.div>
          <motion.button
            className="btn-download"
            variants={fadeUp}
            onClick={CurriculoDownload}
          >
            {t("home.botao")}
          </motion.button>
        </motion.div>

        <motion.div
          className="HomeRight"
          variants={fromRight}
          initial="hidden"
          animate="show"
        >
          <img src="/Assets/images/Me.png" alt={t("home.titulo")} />
        </motion.div>

      </section>
    </main>
  );
}