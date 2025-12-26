import React from 'react';
import { MapPin, Bed, Maximize, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const PropertyCard = ({ property }) => {
    const { image, title, price, location, type, beds, area } = property;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            style={{
                backgroundColor: 'var(--white)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0'
            }}
        >
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                    src={image}
                    alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'var(--accent)',
                    color: 'var(--primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                }}>
                    {type}
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding: '1rem',
                    color: 'var(--white)'
                }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--white)' }}>{price}</h3>
                </div>
            </div>

            <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{title}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {beds && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Bed size={18} />
                            <span>{beds} Beds</span>
                        </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Maximize size={18} />
                        <span>{area} sqft</span>
                    </div>
                </div>

                <Button variant="outline" style={{ width: '100%' }}>
                    View Details <ArrowRight size={16} />
                </Button>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
