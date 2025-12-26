import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Prepare WhatsApp message
        const text = `*New Inquiry from Website*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
        const phoneNumber = '919000871104';

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div style={{ paddingTop: '80px' }}>
            {/* Header */}


            <div className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Contact Info */}
                        <div>
                            <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                                Have a question about a property? Want to schedule a visit? Reach out to us today.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <ContactItem
                                    icon={<Phone />}
                                    title="Call Us"
                                    content="+91 9000871104"
                                    link="tel:+919000871104"
                                />
                                <ContactItem
                                    icon={<Mail />}
                                    title="Email Us"
                                    content="psrinfraadevelopers@gmail.com"
                                    link="mailto:psrinfraadevelopers@gmail.com"
                                />
                                <ContactItem
                                    icon={<MapPin />}
                                    title="Visit Us"
                                    content="Hyderabad, Telangana, India"
                                    link="#"
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px' }}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                                    Send Message <Send size={16} />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div style={{ width: '100%', height: '400px', filter: 'grayscale(100%)' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.997573428988!2d78.3725!3d17.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x1998b98d7b36d093!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

const ContactItem = ({ icon, title, content, link }) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(197, 160, 89, 0.1)',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </div>
        <div>
            <h4 style={{ marginBottom: '0.25rem' }}>{title}</h4>
            <a href={link} style={{ color: 'var(--text-muted)', fontWeight: '500' }}>{content}</a>
        </div>
    </div>
);

export default Contact;
