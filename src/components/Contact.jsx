import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background Glow */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: -1
                }}
            />

            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-gradient"
                >
                    Get In Touch
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-12 justify-center items-center" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 w-full max-w-md"
                        style={{ padding: '2rem', width: '100%', maxWidth: '28rem' }}
                    >
                        <h3 className="text-2xl font-bold mb-6" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Contact Info</h3>

                        <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="p-3 bg-primary/10 rounded-full text-primary" style={{ padding: '0.75rem', background: 'rgba(0, 242, 255, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email</p>
                                    <a href="mailto:furkan.uluay@outlook.com" className="font-medium hover:text-primary transition-colors" style={{ fontWeight: '500', transition: 'color 0.2s' }}>furkan.uluay@outlook.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="p-3 bg-primary/10 rounded-full text-primary" style={{ padding: '0.75rem', background: 'rgba(0, 242, 255, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Phone</p>
                                    <p className="font-medium">Available on LinkedIn</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="p-3 bg-primary/10 rounded-full text-primary" style={{ padding: '0.75rem', background: 'rgba(0, 242, 255, 0.1)', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Location</p>
                                    <p className="font-medium">Istanbul, Turkey</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 w-full max-w-md space-y-4"
                        style={{ padding: '2rem', width: '100%', maxWidth: '28rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-sm font-medium text-muted mb-2" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Name</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'white' }}
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted mb-2" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email</label>
                            <input
                                type="email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'white' }}
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted mb-2" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: 'white', resize: 'vertical' }}
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity mt-4"
                            style={{ width: '100%', background: 'var(--primary)', color: 'black', fontWeight: '700', padding: '0.75rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', marginTop: '1rem' }}
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
