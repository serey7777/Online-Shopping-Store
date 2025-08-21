// Navbar.js
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css'; // We'll create this CSS file

const Navbar = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Helper function to check if link is active
    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    // Show loading state
    if (loading) {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        MyApp
                    </Link>
                    <div className="navbar-loading">Loading...</div>
                </div>
            </nav>
        );
    }

    // Navbar for non-authenticated users
    if (!user) {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        MyApp
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation links */}
                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <div className="navbar-nav">
                            <Link
                                to="/login"
                                className={`nav-link ${isActiveLink('/login') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className={`nav-link ${isActiveLink('/register') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    // Navbar for Writer (Admin) users
    if (user.role === 'Writer') {
        return (
            <nav className="navbar admin-navbar">
                <div className="navbar-container">
                    <Link to="/admin/dashboard" className="navbar-brand">
                        Admin Panel
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation links */}
                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <div className="navbar-nav">
                            <Link
                                to="/admin/dashboard"
                                className={`nav-link ${isActiveLink('/admin/dashboard') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/admin/users"
                                className={`nav-link ${isActiveLink('/admin/users') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Users
                            </Link>
                            <Link
                                to="/admin/products"
                                className={`nav-link ${isActiveLink('/admin/products') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </div>

                        {/* User info and logout */}
                        <div className="navbar-user">
                            <span className="user-role">Writer</span>
                            <button
                                onClick={handleLogout}
                                className="logout-btn"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    // Navbar for Reader (Customer) users
    if (user.role === 'Reader') {
        return (
            <nav className="navbar customer-navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        MyStore
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation links */}
                    <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <div className="navbar-nav">
                            <Link
                                to="/"
                                className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="/shop"
                                className={`nav-link ${isActiveLink('/shop') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Shop
                            </Link>
                            <Link
                                to="/cart"
                                className={`nav-link ${isActiveLink('/cart') ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                Cart
                            </Link>
                        </div>

                        {/* User info and logout */}
                        <div className="navbar-user">
                            <span className="user-role">Reader</span>
                            <button
                                onClick={handleLogout}
                                className="logout-btn"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    // Fallback (shouldn't reach here normally)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    MyApp
                </Link>
                <div className="navbar-menu">
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;