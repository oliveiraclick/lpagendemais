'use client';

import React from 'react';
import { content } from '@/data/content';
import styles from './Header.module.css';

export default function Header() {
    const { brand } = content;
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo Image */}
                <img
                    src={brand.logoFull}
                    alt={brand.name}
                    className={styles.logo}
                />

                <nav className={styles.nav}>
                    <a onClick={() => scrollTo('features')} className={styles.navLink}>
                        Funcionalidades
                    </a>
                    <a onClick={() => scrollTo('benefits')} className={styles.navLink}>
                        Benefícios
                    </a>
                    <a onClick={() => scrollTo('pricing')} className={styles.navLink}>
                        Planos
                    </a>
                    <a
                        href={brand.ctaUrl}
                        className={`btn btn-primary ${styles.ctaButton}`}
                    >
                        Começar Agora
                    </a>
                </nav>
            </div>
        </header>
    );
}
