import "./index.scss";
import ProjectCard from "../../components/ProjectCard";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../animations";

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
        <div className="ProjectGrid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              languages={project.languages}
              cta={project.cta}
            />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
