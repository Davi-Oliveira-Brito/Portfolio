import './index.scss';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

export default function ProjectCarrossel({ projects }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
            setCurrent(0);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleCount = isMobile ? 1 : 2;
    const isCarrossel = projects.length > visibleCount;

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? projects.length - visibleCount : prev - 1));
    };

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev >= projects.length - visibleCount ? 0 : prev + 1));
    };

    const visible = isMobile
        ? [projects[current]]
        : [projects[current], projects[(current + 1) % projects.length]];

    return (
        <div className="ProjectCarrossel">
            {isCarrossel && (
                <button className="carrossel-btn" onClick={prev}>
                    <img src="/Assets/images/Arrow.svg" alt="Anterior" className="arrow-left" />
                </button>
            )}

            <div className="carrossel-track">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        className="carrossel-cards"
                        key={current}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 610 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -610 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {visible.map((project, index) => (
                            <ProjectCard
                                key={index}
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                languages={project.languages}
                                cta={project.cta}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {isCarrossel && (
                <button className="carrossel-btn" onClick={next}>
                    <img src="/Assets/images/Arrow.svg" alt="Próximo" className="arrow-right" />
                </button>
            )}
        </div>
    );
}