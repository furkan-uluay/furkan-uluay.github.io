import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Code, Database, Server, Terminal } from 'lucide-react';

const iconMap = {
    Languages: Code,
    Frameworks: Server,
    Infrastructure: Database,
    Tools: Terminal
};

const Skills = () => {
    return (
        <section id="skills" className="section bg-black/20" style={{ background: 'rgba(0,0,0,0.2)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-gradient"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {portfolioData.skills.map((skillGroup, index) => {
                        const Icon = iconMap[skillGroup.category] || Code;
                        return (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 hover:border-primary/50 transition-colors duration-300"
                                style={{ padding: '2rem' }}
                            >
                                <div className="flex items-center gap-3 mb-6" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary" style={{ padding: '0.75rem', background: 'rgba(0, 242, 255, 0.1)', borderRadius: '0.5rem', color: 'var(--primary)' }}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ fontSize: '1.5rem', fontWeight: '700' }}>{skillGroup.category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                                            style={{
                                                padding: '0.5rem 1rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                borderRadius: '9999px',
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                cursor: 'default',
                                                border: '1px solid transparent'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                                e.target.style.borderColor = 'var(--primary)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                                e.target.style.borderColor = 'transparent';
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
