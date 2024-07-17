"use client"
// components/ContactSection.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import styles from './styles/Contact.module.css';
import ContactForm from './ContactForm';
import GoogleMapsWithAddress from './GoogleMapsWithAddress';

const ContactSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showChevrons, setShowChevrons] = useState(false);

    // Effect to handle scroll event and update chevrons visibility
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                setShowChevrons(scrollTop > 0 || scrollTop + clientHeight < scrollHeight);
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
            handleScroll(); // Initialize visibility on mount
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section className={styles.contactSection} style={{ height: '140%' }}>
            <div className={`${styles.contactContainer}`} ref={containerRef}>
                <div className="flex flex-col items-center p-10 ">
                    <div className="flex flex-col justify-center gap-8 h-full">
                        <GoogleMapsWithAddress />
                        <ContactForm />
                    </div>
                </div>
            </div>
            {showChevrons && (
                <>
                    <FaChevronUp
                        className={`${styles.chevron} ${styles.chevronUp}`}
                        onClick={() => containerRef.current?.scrollBy({ top: -100, behavior: 'smooth' })}
                    />
                    <FaChevronDown
                        className={`${styles.chevron} ${styles.chevronDown}`}
                        onClick={() => containerRef.current?.scrollBy({ top: 100, behavior: 'smooth' })}
                    />
                </>
            )}
        </section>
    );
};

export default ContactSection;