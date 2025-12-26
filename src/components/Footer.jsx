import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import '../index.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Company Info */}
                    <div>
                        <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>PSR Infraa Developers</h3>
                        <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Your trusted partner in finding the perfect property. Whether you want to buy, sell, or exchange, we make the process seamless and secure.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <SocialIcon icon={<Facebook size={20} />} />
                            <SocialIcon icon={<Instagram size={20} />} />
                            <SocialIcon icon={<Twitter size={20} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><FooterLink to="/">Home</FooterLink></li>
                            <li><FooterLink to="/properties">Properties</FooterLink></li>
                            <li><FooterLink to="/exchange">Exchange Property</FooterLink></li>
                            <li><FooterLink to="/about">About Us</FooterLink></li>
                            <li><FooterLink to="/contact">Contact</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>Contact Us</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <MapPin size={20} color="var(--accent)" />
                                <span>Hyderabad, Telangana, India</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Phone size={20} color="var(--accent)" />
                                <span>+91 9000871104</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail size={20} color="var(--accent)" />
                                <span>psrinfraadevelopers@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-light)' }}>
                    <p>&copy; {new Date().getFullYear()} PSR Infraa Developers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon }) => (
    <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'var(--transition)'
    }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
    >
        {icon}
    </div>
);

const FooterLink = ({ to, children }) => (
    <Link
        to={to}
        style={{ color: 'var(--white)', transition: 'color 0.3s ease' }}
        onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--white)'}
    >
        {children}
    </Link>
);

export default Footer;
