import './index.scss';

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a 
                href="https://github.com/Davi-Oliveira-Brito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
            >
                <img 
                    src="/Assets/images/GitHub.svg" 
                    alt="GitHub" 
                    className="social-icon"
                />
            </a>

            <a 
                href="https://www.linkedin.com/in/davi-oliveira-brito-b7267b252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
            >
                <img 
                    src="/Assets/images/LinkedIn.svg" 
                    alt="LinkedIn" 
                    className="social-icon"
                />
            </a>

            <a 
                href="mailto:davioliveirabrito@outlook.com"
                className="social-link"
            >
                <img 
                    src="/Assets/images/Email.svg" 
                    alt="Email" 
                    className="social-icon"
                />
            </a>
        </div>
    );
}