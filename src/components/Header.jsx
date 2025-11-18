import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const activeLinkStyle = {
        textDecoration: 'underline',
        textUnderlineOffset: '5px',
        textDecorationThickness: '3px',
    };

    return (
        <header className="bg-white dark:bg-secondary-dark shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-wrap">
                <h1 className="text-3xl font-bold text-primary-blue">CyberSafe</h1>
                <nav className="flex items-center gap-4 mt-4 md:mt-0">
                    <NavLink to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-blue" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
                    <NavLink to="/threats" className="text-gray-600 dark:text-gray-300 hover:text-primary-blue" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Threats</NavLink>
                    <NavLink to="/practices" className="text-gray-600 dark:text-gray-300 hover:text-primary-blue" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Practices</NavLink>
                    <NavLink to="/resources" className="text-gray-600 dark:text-gray-300 hover:text-primary-blue" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Resources</NavLink>
                    <NavLink to="/news" className="text-gray-600 dark:text-gray-300 hover:text-primary-blue" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>News</NavLink>
                    <NavLink to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-blue" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
                    <ThemeToggle />
                </nav>
            </div>
        </header>
    );
};

export default Header;