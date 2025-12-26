import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Properties', path: '/properties' },
        { name: 'Exchange', path: '/exchange' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const navbarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        // Gradient from Dark Navy to slightly lighter Navy/Slate
        background: scrolled ? 'linear-gradient(90deg, rgba(10, 25, 47, 0.98) 0%, rgba(17, 34, 64, 0.98) 100%)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        padding: scrolled ? '0.25rem 0' : '0.5rem 0',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
        color: 'var(--white)', // White text for contrast on dark gradient
    };

    // Override for non-home pages if we want a solid header always, 
    // but let's keep it consistent: Navy background on other pages if not scrolled?
    // Actually, for better readability, let's make it solid Navy on non-home pages if not scrolled.
    const isHome = location.pathname === '/';
    const effectiveStyle = {
        ...navbarStyle,
        background: (scrolled || !isHome) ? 'linear-gradient(90deg, rgba(10, 25, 47, 0.98) 0%, rgba(17, 34, 64, 0.98) 100%)' : 'transparent',
    }

    return (
        <nav style={effectiveStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1' }}>
                        <span style={{
                            background: 'linear-gradient(45deg, var(--accent) 0%, #F4E2D8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: '1.8rem',
                            fontWeight: '800',
                            fontFamily: 'Playfair Display, serif',
                            letterSpacing: '1px'
                        }}>
                            PSR
                        </span>
                        <span style={{
                            color: 'var(--white)',
                            fontSize: '0.65rem',
                            fontWeight: '500',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            opacity: 0.9,
                            marginTop: '2px'
                        }}>
                            Infraa Developers
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    {/* We will use CSS media query for display toggling, but inline styles are tricky for media queries. 
              Ideally we'd use a CSS class. Let's assume standard desktop > 768px. 
              I'll add a style block in the component or rely on global CSS. 
              Let's add a class 'desktop-nav' and style it global or assume inline display flex for now and hide via JS if mobile? 
              No, let's use a simple window width check or better, just standard CSS classes. 
              I'll add the classes to index.css later or now.
           */}
                    <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    style={{
                                        color: 'var(--white)',
                                        fontWeight: location.pathname === link.path ? '600' : '400',
                                        borderBottom: location.pathname === link.path ? '2px solid var(--accent)' : 'none',
                                        paddingBottom: '4px'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/properties">
                        <Button variant="primary" style={{ padding: '0.5rem 1rem' }}>Explore</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', color: 'var(--white)' }}>
                    {isOpen ? <X /> : <Menu />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'var(--primary)',
                            padding: '2rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        style={{ color: 'var(--white)', fontSize: '1.1rem' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/properties" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary">Explore Properties</Button>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            <style>{`
        @media (min-width: 769px) {
            .mobile-toggle { display: none !important; }
            .desktop-menu { display: flex !important; }
        }
        @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
