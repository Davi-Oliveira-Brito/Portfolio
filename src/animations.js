export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const stagger = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

export const staggerCards = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

export const fromRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
