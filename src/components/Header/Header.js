import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User, Heart, Bell } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">🛒</div>
            <div className="logo-text">
              <span className="logo-title">SuperMarket</span>
              <span className="logo-subtitle">Tu supermercado online</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className={`search-container ${isSearchOpen ? 'search-open' : ''}`}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="search-input"
              />
              <button className="search-close" onClick={toggleSearch}>
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            <button className="nav-link-icon" title="Favoritos">
              <Heart size={20} />
            </button>
            <button className="nav-link-icon" title="Notificaciones">
              <Bell size={20} />
            </button>
            <button className="nav-link-icon" title="Perfil">
              <User size={20} />
            </button>
            <Link to="/carrito" className="nav-link cart-link">
              <ShoppingCart size={20} />
              <span>Carrito</span>
              {getTotalItems() > 0 && (
                <span className="cart-badge">{getTotalItems()}</span>
              )}
            </Link>
          </nav>

          {/* Mobile Actions */}
          <div className="mobile-actions">
            <button className="mobile-search-btn" onClick={toggleSearch}>
              <Search size={24} />
            </button>
            <Link to="/carrito" className="mobile-cart-btn">
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="mobile-cart-badge">{getTotalItems()}</span>
              )}
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span>Inicio</span>
            </Link>
            <Link to="/productos" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span>Productos</span>
            </Link>
            <button className="mobile-nav-link">
              <Heart size={20} />
              <span>Favoritos</span>
            </button>
            <button className="mobile-nav-link">
              <Bell size={20} />
              <span>Notificaciones</span>
            </button>
            <button className="mobile-nav-link">
              <User size={20} />
              <span>Mi Perfil</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
