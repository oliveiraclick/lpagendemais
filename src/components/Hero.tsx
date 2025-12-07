
import React from 'react';
import { content } from '@/data/content';
import styles from './Hero.module.css';

export default function Hero() {
    const { hero, brand } = content;

    return (
        <section className={styles.hero}>
            {/* Background Big Text */}
            <div className={styles.bgText}>DIGITAL</div>

            <div className={styles.container}>
                {/* Left Side: Content */}
                <div className={styles.content}>
                    <div className={styles.badge}>NOVA ERA DA GESTÃO</div>
                    <h1 className={styles.title}>
                        {hero.title}
                    </h1>
                    <p className={styles.description}>{hero.description}</p>
                    <div className={styles.actions}>
                        <a href={brand.ctaUrl} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            {hero.cta}
                        </a>
                    </div>
                </div>

                {/* Right Side: Visual/Floating Elements */}
                <div className={styles.visual}>
                    <div className={styles.floatingCard} style={{ top: '20%', right: '10%' }}>
                        <div className={styles.cardStat}>24h</div>
                        <div className={styles.cardTitle}>Agendamento</div>
                        <div className={styles.cardSub}>7/7 dias por semana</div>
                    </div>

                    <div className={styles.floatingCard} style={{ bottom: '20%', left: '10%', animationDelay: '1s' }}>
                        <div className={styles.cardStat}>Zero</div>
                        <div className={styles.cardTitle}>Furos na Agenda</div>
                        <div className={styles.cardSub}>Com lembretes via IA</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
