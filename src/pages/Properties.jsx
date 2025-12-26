import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';
import villaImage from '../assets/villa.png';

import openLandVentureImage from '../assets/open_land_venture.png';

// Fallback to villaImage for all for now, to ensure no broken images.
const propertiesData = [
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
        area: 300
    },
    {
        id: 3,
        image: villaImage,
        title: 'Modern Apartment',
        price: '₹1.5 Cr',
        location: 'Hitech City, Hyderabad',
        type: 'House',
        beds: 3,
        area: 1800
    },
    {
        id: 4,
        image: villaImage,
        title: 'Family Home with Garden',
        price: '₹3.2 Cr',
        location: 'Banjara Hills, Hyderabad',
        type: 'House',
        beds: 4,
        area: 3200
    },
    {
        id: 5,
        image: villaImage,
        title: 'Commercial Plot',
        price: '₹2.8 Cr',
        location: 'Madhapur, Hyderabad',
        type: 'Plot',
        beds: null,
        area: 500
    },
    {
        id: 6,
        image: villaImage,
        title: 'Luxury Condo',
        price: '₹2.1 Cr',
        location: 'Gachibowli, Hyderabad',
        type: 'House',
        beds: 3,
        area: 2100
    }
];

const Properties = () => {
    const [filter, setFilter] = useState('All');

    const filteredProperties = filter === 'All'
        ? propertiesData
        : propertiesData.filter(p => p.type === filter);

    return (
        <div style={{ paddingTop: '80px' }}>


            <div className="section">
                <div className="container">
                    {/* Filter */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        {['All', 'House', 'Plot'].map(type => (
                            <Button
                                key={type}
                                variant={filter === type ? 'primary' : 'secondary'}
                                onClick={() => setFilter(type)}
                            >
                                {type}s
                            </Button>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {filteredProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;
