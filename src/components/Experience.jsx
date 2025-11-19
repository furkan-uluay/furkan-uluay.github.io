import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
    return (
        <section id="experience" className="section relative">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-gradient"
                >
                    Experience
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div
                        className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary opacity-20"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '100%',
                            width: '2px',
                            background: 'linear-gradient(to bottom, var(--primary), var(--secondary))',
                            opacity: 0.3
                        }}
                    />

                    <div className="space-y-12" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                                style={{
                                    display: 'flex',
                                    flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', // Simple inline responsive logic isn't perfect here without media queries, but assuming desktop first for now or will fix with CSS classes if I had them.
                                    // Actually, for a pure inline style approach without media queries, responsiveness is hard.
                                    // I will use a CSS module or standard CSS for complex responsive layouts if I can't rely on Tailwind.
                                    // But I said I'd use Vanilla CSS. I should rely on the classes I defined or add more to index.css.
                                    // Let's use the 'glass' class and some inline styles for positioning.
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 shadow-[0_0_10px_var(--primary)]"
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '16px',
                                        height: '16px',
                                        background: 'var(--primary)',
                                        borderRadius: '50%',
                                        zIndex: 10,
                                        boxShadow: '0 0 15px var(--primary)'
                                    }}
                                />

                                {/* Content Card */}
                                <div className="w-full md:w-[calc(50%-2rem)]" style={{ width: '45%' }}>
                                    <div className="glass p-6 hover:bg-white/5 transition-colors duration-300" style={{ padding: '2rem' }}>
                                        <div className="flex items-center gap-2 text-primary mb-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                                            <Briefcase size={18} />
                                            <h3 className="text-xl font-bold" style={{ fontSize: '1.25rem', fontWeight: '700' }}>{exp.role}</h3>
                                        </div>
                                        <h4 className="text-lg font-semibold mb-2" style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>{exp.company}</h4>
                                        <div className="flex items-center gap-2 text-sm text-muted mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                            <Calendar size={16} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <p className="text-muted leading-relaxed" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="w-full md:w-[calc(50%-2rem)]" style={{ width: '45%' }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
