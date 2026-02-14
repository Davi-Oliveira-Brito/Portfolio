import "./index.scss";
import ProjectCarrossel from "../../components/ProjectCarrossel";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <main className="Projects">
      <motion.section
        className="ProjectsContent"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp}>{t('projects.titulo')}</motion.h1>
        <motion.div variants={fadeUp}>
          <ProjectCarrossel projects={projects} />
        </motion.div>
      </motion.section>
    </main>
  );
}