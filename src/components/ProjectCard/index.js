import './index.scss';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ProjectCard({ img, title, desc, languages, cta, index }) {
    const { t } = useTranslation();
    const num = String(index + 1).padStart(2, '0');

    return (
        <motion.div
            className="ProjectCard"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
        >
            <a href={cta} target="_blank" rel="noopener noreferrer" className="ProjectCard-img-wrap">
                <img src={img} alt={title} loading="lazy" className="ProjectCard-img" />
                <div className="ProjectCard-overlay">
                    <span>{t('projects.visitar')} →</span>
                </div>
            </a>

            <div className="ProjectCard-body">
                <span className="ProjectCard-num">{num}</span>
                <h3 className="ProjectCard-title">{title}</h3>
                <p className="ProjectCard-desc">{desc}</p>

                <div className="ProjectCard-tags">
                    {languages.map((lang) => (
                        <span key={lang} className="ProjectCard-tag">{lang}</span>
                    ))}
                </div>

                <a href={cta} target="_blank" rel="noopener noreferrer" className="ProjectCard-cta">
                    {t('projects.visitar')}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}
