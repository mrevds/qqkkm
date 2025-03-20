import React, { useState, useEffect } from 'react';
import './Header.css';
import LOGO from "../assets/QQ.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isActive, setIsActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
            setIsMobileMenuOpen(false);
        }, 100);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        setIsDropdownOpen(false);
    };


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header container ${isActive ? 'active' : ''}`}>
            <div className="logo">
                <img src={LOGO} alt="logo" />
            </div>

            <div className="language-switcher">
                <button className="lang-btn" onClick={toggleDropdown}>
                    {t('language')}
                </button>
                {isDropdownOpen && (
                    <ul className="lang-dropdown">
                        <li onClick={() => changeLanguage("ru")}>Русский язык</li>
                        <li onClick={() => changeLanguage("uz")}>Ozbek tili</li>
                        <li onClick={() => changeLanguage("kk")}>Qaraqalpaq tili</li>
                    </ul>
                )}
            </div>

            <div className="burger-menu" onClick={toggleMobileMenu}>
                <div className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
                <div className={`burger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </div>

            <div className={`menu-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="film"></div>
                <ul className="menu">
                    <li><Link to="/">{t('home')}</Link></li>
                    <li><Link to="/contacts">{t('contacts')}</Link></li>
                    <li><Link to="/help">{t('help')}</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
