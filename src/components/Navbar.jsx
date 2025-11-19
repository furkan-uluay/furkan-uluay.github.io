import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Code2, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'var(--primary)',
                    transformOrigin: '0%',
                    zIndex: 1001
                }}
            />
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6 bg-transparent'
                    }`}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                    transition: 'all 0.3s ease',
                    background: scrolled ? 'var(--bg-card)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    borderBottom: scrolled ? '1px solid var(--border-light)' : 'none'
                }}
            >
                <div className="container flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <a href="#" className="logo flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
                        <Code2 color="var(--primary)" />
                        <span>Alex<span style={{ color: 'var(--primary)' }}>.dev</span></span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    color: 'var(--text-muted)',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                            >
                                {link.name}
                            </a>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--text-main)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0.5rem',
                                borderRadius: '50%',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}> {/* Still keeping mobile hidden for now as per previous step */}
                        <button
                            onClick={toggleTheme}
                            className="text-white"
                            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            className="text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
