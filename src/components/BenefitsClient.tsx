
import React from 'react';
import { content } from '@/data/content';
import styles from './BenefitsClient.module.css';

export default function BenefitsClient() {
    const { forClient } = content;

    return (
        <section id="benefits" className={`section ${styles.benefitsSection}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>{forClient.title}</h2>
                        <p className={styles.subtitle}>{forClient.subtitle}</p>

                        <div className={styles.list}>
                            {forClient.benefits.map((benefit, index) => (
                                <div key={index} className={styles.item}>
                                    <div className={styles.check}>✓</div>
                                    <div>
                                        <h3 className={styles.itemTitle}>{benefit.title}</h3>
                                        <p className={styles.itemDesc}>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.visual}>
                        {/* Visual representation could be an image or abstract UI */}
                        <div className={styles.phoneMockup}>
                            <div className={styles.screen}>
                                <div className={styles.appHeader}>Barbearia Top</div>
                                <div className={styles.timeSlot}>14:00 - Disponível</div>
                                <div className={styles.timeSlot}>15:00 - Disponível</div>
                                <div className={styles.btnMock}>Agendar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
