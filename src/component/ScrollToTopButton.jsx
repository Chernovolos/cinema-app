import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaArrowAltCircleUp } from "react-icons/fa";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300); // Show button after scrolling down 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button
            onClick={scrollToTop}
            variant="secondary"
            className={`position-fixed end-0 me-3 ${isVisible ? 'd-flex' : 'd-none'}`}
            aria-label="Scroll to top"
            style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                zIndex: 1000,
                alignItems: 'center',
                justifyContent: 'center',
                bottom: '60px'
            }}
        >
            <FaArrowAltCircleUp size={24} color="white" />
        </Button>
    );
};

export default ScrollToTopButton;

