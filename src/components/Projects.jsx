import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-gradient"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass group relative overflow-hidden rounded-2xl"
                            style={{ borderRadius: '1rem', overflow: 'hidden', position: 'relative', minHeight: '300px', display: 'flex', flexDirection: 'column' }}
                        >
                            {/* Decorative Gradient Background for Card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.05), rgba(112, 0, 255, 0.05))', zIndex: -1 }}
                            />

                            <div className="p-8 flex flex-col h-full" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', zIndex: 1 }}>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', transition: 'color 0.3s' }}>
                                    {project.title}
                                </h3>
                                <p className="text-muted mb-6 flex-grow leading-relaxed" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-primary/80 border border-white/5"
                                            style={{
                                                fontSize: '0.75rem',
                                                fontFamily: 'var(--font-mono)',
                                                padding: '0.25rem 0.5rem',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                color: 'rgba(0, 242, 255, 0.8)',
                                                borderRadius: '0.25rem',
                                                border: '1px solid rgba(255, 255, 255, 0.05)'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto" style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer', transition: 'color 0.2s' }}
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '700', cursor: 'pointer', transition: 'color 0.2s' }}
                                    >
                                        <ExternalLink size={18} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
