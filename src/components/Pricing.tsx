
import React from 'react';
import { content } from '@/data/content';
import styles from './Pricing.module.css';

export default function Pricing() {
    const { pricing, brand } = content;

    return (
        <section id="pricing" className={`section ${styles.pricingSection}`}>
            <div className="container">
                <div className={styles.card}>
                    <h2 className={styles.title}>{pricing.title}</h2>
                    <p className={styles.description}>{pricing.description}</p>

                    <ul className={styles.features}>
                        {pricing.features.map((feature, index) => (
                            <li key={index} className={styles.featureItem}>
                                <span className={styles.check}>✓</span> {feature}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.priceContainer}>
                        <div className={styles.priceWrapper}>
                            <span className={styles.currency}>R$</span>
                            <span className={styles.amount}>{pricing.amount}</span>
                            <span className={styles.period}>{pricing.period}</span>
                        </div>
                    </div>

                    <a href={brand.ctaUrl} className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem' }}>
                        {pricing.cta}
                    </a>

                    {/* @ts-ignore */}
                    {pricing.subtext && <p className={styles.subtext}>{pricing.subtext}</p>}

                    <p className={styles.disclaimer}>Cancelamento grátis a qualquer momento.</p>
                </div>
            </div>
        </section>
    );
}
