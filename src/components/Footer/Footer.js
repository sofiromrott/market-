import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Truck, Shield, Clock, Award } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">🛒</div>
              <div className="footer-logo-text">
                <h3 className="footer-title">SuperMarket</h3>
                <p className="footer-subtitle">Tu supermercado online</p>
              </div>
            </div>
            <p className="footer-description">
              Tu supermercado online de confianza. Productos frescos, precios competitivos 
              y entrega rápida a tu hogar. Calidad garantizada desde 2020.
            </p>
            <div className="social-links">
              <a href="#" className="social-link facebook" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link youtube" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Inicio</Link></li>
              <li><Link to="/productos" className="footer-link">Productos</Link></li>
              <li><Link to="/carrito" className="footer-link">Mi Carrito</Link></li>
              <li><a href="#" className="footer-link">Ofertas Especiales</a></li>
              <li><a href="#" className="footer-link">Nuevos Productos</a></li>
              <li><a href="#" className="footer-link">Productos Destacados</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Categorías</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">🥬 Frutas y Verduras</a></li>
              <li><a href="#" className="footer-link">🥩 Carnes y Aves</a></li>
              <li><a href="#" className="footer-link">🥛 Lácteos</a></li>
              <li><a href="#" className="footer-link">🍞 Panadería</a></li>
              <li><a href="#" className="footer-link">🥤 Bebidas</a></li>
              <li><a href="#" className="footer-link">🍿 Snacks</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <span className="contact-label">Teléfono</span>
                  <span className="contact-value">+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">info@supermarket.com</span>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <span className="contact-label">Dirección</span>
                  <span className="contact-value">123 Main St, Ciudad</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="footer-features">
          <div className="feature-item">
            <Truck size={24} />
            <div>
              <h5>Envío Gratis</h5>
              <p>En pedidos superiores a $50</p>
            </div>
          </div>
          <div className="feature-item">
            <Shield size={24} />
            <div>
              <h5>Pago Seguro</h5>
              <p>Protegido y encriptado</p>
            </div>
          </div>
          <div className="feature-item">
            <Clock size={24} />
            <div>
              <h5>Disponible 24/7</h5>
              <p>Compras en cualquier momento</p>
            </div>
          </div>
          <div className="feature-item">
            <Award size={24} />
            <div>
              <h5>Calidad Garantizada</h5>
              <p>Productos frescos y de calidad</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 SuperMarket. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Términos de Servicio</a>
              <a href="#" className="footer-bottom-link">Política de Privacidad</a>
              <a href="#" className="footer-bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
