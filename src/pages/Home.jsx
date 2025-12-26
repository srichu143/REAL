import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.png';
import villaImage from '../assets/villa.png';

import openLandVentureImage from '../assets/open_land_venture.png';

const Home = () => {
    const featuredProperties = [
        {
            id: 1,
            image: villaImage,
            title: 'Luxury Villa in Jubilee Hills',
            price: '₹5.5 Cr',
            location: 'Jubilee Hills, Hyderabad',
            type: 'House',
            beds: 5,
            area: 4500
        },
        {
            id: 2,
            image: openLandVentureImage,
            title: 'NSR County',
            price: '₹1.2 Cr',
            location: 'Peddapur, Sangareddy',
            type: 'Plot',
            beds: null,
            area: 2400
        },
        {
            id: 3,
            image: villaImage, // temporary fallback
            title: 'Modern Apartment',
            price: '₹1.5 Cr',
            location: 'Hitech City, Hyderabad',
            type: 'House',
            beds: 3,
            area: 1800
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                height: '90vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.4)), url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'var(--white)',
                textAlign: 'center',
                padding: '0 1rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container"
                >
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', color: 'var(--white)' }}>
                        Find. Exchange. Own.
                    </h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Your Dream Property Awaits with PSR Infraa Developers.
                    </p>
                    <Link to="/properties">
                        <Button variant="primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem' }}>
                            Explore Properties
                        </Button>
                    </Link>
                </motion.div>
            </section>

            {/* Featured Properties */}
            <section className="section bg-light">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">Featured Properties</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Explore our handpicked selection of premium properties available for sale and exchange.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {featuredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/properties">
                            <Button variant="secondary">
                                View All Properties <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Exchange Promo */}
            <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img
                            src={villaImage}
                            alt="Property Exchange"
                            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>Want to Exchange Your Property?</h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', opacity: 0.9 }}>
                            PSR Infraa Developers offers a unique property exchange service. Upgrade your lifestyle by exchanging your current property for one of our premium listings. Hassle-free and transparent.
                        </p>
                        <Link to="/exchange">
                            <Button variant="primary">Start Exchange Process</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
