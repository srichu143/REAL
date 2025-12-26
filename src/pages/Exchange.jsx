import React from 'react';
import Button from '../components/Button';

const Exchange = () => {
    return (
        <div style={{ paddingTop: '80px' }}>


            <div className="section">
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                            Looking to upgrade or switch locations? Fill out the details below to list your property for exchange.
                            Our team will evaluate your property and connect you with the best available options.
                        </p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--white)', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                        <form>
                            <h3 style={{ marginBottom: '2rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>Your Details</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>

                            <h3 style={{ margin: '2rem 0', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>Property Details</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label>Property Type</label>
                                    <select>
                                        <option>House / Villa</option>
                                        <option>Plot / Land</option>
                                        <option>Apartment</option>
                                        <option>Commercial</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Location</label>
                                    <input type="text" placeholder="City, Area" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description (Size, Age, Features)</label>
                                <textarea rows="4" placeholder="e.g. 200 sq yards plot or 3BHK flat..."></textarea>
                            </div>

                            <h3 style={{ margin: '2rem 0', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>Exchange Preferences</h3>
                            <div className="form-group">
                                <label>What are you looking for?</label>
                                <textarea rows="3" placeholder="Describe the property you want in exchange..."></textarea>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <Button variant="primary" type="submit" style={{ width: '50%' }}>Submit Exchange Request</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exchange;
