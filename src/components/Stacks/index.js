import './index.scss';

export default function Stack({ tipo, icons, desc }) {
    return (
        <div className="Stack">
            <h3 className="Stack-tipo">{tipo}</h3>
            <div className="Stack-icons">
                {icons.map((icon) => (
                    <img key={icon.alt} src={icon.img} alt={icon.alt} />
                ))}
            </div>
            <p className="Stack-desc">{desc}</p>
        </div>
    );
}