
import React from 'react';
import { content } from '@/data/content';
import styles from './FeaturesOwner.module.css';

export default function FeaturesOwner() {
    const { forOwner } = content;

    return (
        <section id="features" className={`section ${styles.featuresSection}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{forOwner.title}</h2>
                    <p className={styles.subtitle}>{forOwner.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    {forOwner.features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{index + 1}</span>
                                <h3 className={styles.cardTitle}>{feature.title}</h3>
                            </div>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
