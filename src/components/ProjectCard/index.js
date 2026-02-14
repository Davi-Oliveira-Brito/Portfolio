import './index.scss';

export default function ProjectCard({ img, title, desc, languages, cta }) {
    return (
        <div className="ProjectCard">
            <div className="ProjectCard-top">
                <img src={img} alt={title} className="ProjectCard-img" />
            </div>

            <div className="ProjectCard-bottom">
                <h4 className="ProjectCard-name">{title}</h4>
                <p className="ProjectCard-desc">{desc}</p>

                <div className="ProjectCard-languages">
                    {languages.map((lang) => (
                        <span key={lang} className="ProjectCard-tag">{lang}</span>
                    ))}
                </div>

                <a href={cta} target="_blank" rel="noopener noreferrer" className="ProjectCard-cta">
                    Visitar
                    <img src="/Assets/images/Link.png" alt="Link" className="ProjectCard-link-icon" />
                </a>
            </div>
        </div>
    );
}