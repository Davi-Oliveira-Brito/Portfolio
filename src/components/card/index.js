import './index.scss';

export default function Card({ title, text, technologies }) {
  return (
    <div className="card">
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{text}</p>
      </div>
      
      <div className="card__footer">
        <div className="card__tags">
          {technologies.map((tech, index) => (
            <span key={index} className="card__tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
