import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '4px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--accent)',
      color: 'var(--primary)',
      border: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--white)',
      border: '2px solid var(--accent)',
    },
    secondary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--white)',
      border: '1px solid var(--accent)',
    },
    text: {
        backgroundColor: 'transparent',
        color: 'var(--primary)',
        padding: '0.5rem 1rem',
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant] }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export default Button;
