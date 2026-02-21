import "./index.scss";
import SocialLinks from "../../components/SocialLinks";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

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
  const { t } = useTranslation();

  const CurriculoDownload = () => {
    const toastId = toast.loading(t("home.Warning"), {
      position: "top-right",
      style: {
        background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
        color: "#f5f5f5",
        fontWeight: "500",
        padding: "16px 24px",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      },
    });

    setTimeout(() => {
      toast.dismiss(toastId);
      const link = document.createElement("a");
      link.href = t("home.CV");
      link.download = t("home.CV_Name");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  return (
    <main className="Home">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            color: "#f5f5f5",
            fontWeight: "500",
            padding: "16px 24px",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          },
        }}
      />
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
