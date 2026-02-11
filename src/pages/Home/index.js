import "./index.scss";
import SocialLinks from "../../components/SocialLinks";
import Header from "../../components/Header";

export default function Home() {
  const CurriculoDownload = () => {
    const link = document.createElement("a");
    link.href = "/Assets/pdf/CV - Davi Oliveira Brito.pdf";
    link.download = "CV - Davi Oliveira Brito.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="Home">
      <Header/>
      
      <section className="HomeContent" id="Home">
        <div className="HomeLeft">
          <h1>Davi Oliveira Brito</h1>
          <p>Desenvolvedor Full Stack</p>
          
          <SocialLinks />
          
          <button className="btn-download" onClick={CurriculoDownload}>
            Baixar CV
          </button>
        </div>

        <div className="HomeRight">
          <img src="/Assets/images/Me.png" alt="Davi Oliveira Brito" />
        </div>
      </section>
    </main>
  );
}