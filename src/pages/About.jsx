import React from 'react';
import { Award, Users, Home, TrendingUp } from 'lucide-react';
import heroImage from '../assets/hero.png';

const About = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Header */}


            {/* Main Content */}
            <div className="section">
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Building Trust, Delivering Dreams</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            PSR Infraa Developers is a premier real estate company dedicated to helping customers find their perfect home or investment property. With years of experience in the Andhra Pradesh real estate market, we specialize in buying, selling, and executing seamless property exchanges.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Our mission is to bring transparency and sophistication to the property market. We believe that every transaction is a step towards a better future for our clients. Whether you are looking for a luxury villa, a commercial plot, or want to exchange your current asset for something better, we are here to guide you every step of the way.
                        </p>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img
                            src={heroImage}
                            alt="Skyskrapers"
                            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <StatItem icon={<Users size={32} />} value="500+" label="Happy Customers" />
                        <StatItem icon={<Home size={32} />} value="10+" label="Projects Completed" />
                        <StatItem icon={<TrendingUp size={32} />} value="100+" label="Successful Exchanges" />
                        <StatItem icon={<Award size={32} />} value="10+" label="Years of Excellence" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatItem = ({ icon, value, label }) => (
    <div style={{ padding: '2rem', backgroundColor: 'var(--white)', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
        <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{value}</h3>
        <p style={{ color: 'var(--text-light)', fontWeight: '500' }}>{label}</p>
    </div>
);

export default About;
