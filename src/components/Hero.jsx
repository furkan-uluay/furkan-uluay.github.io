import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { name, role, about, social } = portfolioData;

    return (
        <section className="section flex items-center justify-center min-h-screen relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Background Gradient Blob */}
            <div
                style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: -1
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '-10%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: -1
                }}
            />

            <div className="container text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-mono text-primary mb-4" style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        {name}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-muted mb-8 text-gradient" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem', opacity: 0.9 }}>
                        {role}
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted mb-10 leading-relaxed" style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        {about}
                    </p>

                    <div className="flex justify-center gap-6 mb-12" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                        <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" style={{ transition: 'color 0.2s' }}>
                            <Github size={24} />
                        </a>
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" style={{ transition: 'color 0.2s' }}>
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:contact@example.com`} className="hover:text-primary transition-colors" style={{ transition: 'color 0.2s' }}>
                            <Mail size={24} />
                        </a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-primary text-black font-bold rounded-full flex items-center gap-2 mx-auto"
                        style={{
                            padding: '1rem 2rem',
                            background: 'var(--primary)',
                            color: '#000',
                            borderRadius: '9999px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Work <ArrowRight size={18} />
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
            >
                <div style={{ width: '24px', height: '40px', border: '2px solid var(--text-muted)', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        style={{ width: '4px', height: '4px', background: 'var(--text-main)', borderRadius: '50%' }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
