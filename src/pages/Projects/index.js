import "./index.scss";
import ProjectCarrossel from "../../components/ProjectCarrossel";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <main className="Projects">
      <section className="ProjectsContent">
        <h1>{t('projects.titulo')}</h1>
        <ProjectCarrossel projects={projects} />
      </section>
    </main>
  );
}