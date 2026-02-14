import "./index.scss";
import SocialLinks from "../../components/SocialLinks";
import { useTranslation } from "react-i18next";

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
        <div className="HomeLeft">
          <h1>Davi Oliveira Brito</h1>
          <p>{t('home.subtitulo')}</p>

          <SocialLinks />

          <button className="btn-download" onClick={CurriculoDownload}>
            {t('home.botao')}
          </button>
        </div>

        <div className="HomeRight">
          <img src="/Assets/images/Me.png" alt={t('home.titulo')} />
        </div>
      </section>
    </main>
  );
}
