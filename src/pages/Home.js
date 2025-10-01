import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock, Award, TrendingUp, Users, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard/ProductCard';
import { featuredProducts, bestSellers, newArrivals, onSale } from '../data/products';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <TrendingUp size={16} />
                <span>#1 Supermercado Online</span>
              </div>
              <h1 className="hero-title">
                Tu supermercado online de 
                <span className="gradient-text"> confianza</span>
              </h1>
              <p className="hero-description">
                Productos frescos, precios competitivos y entrega rápida. 
                Haz tu compra desde casa y recibe todo lo que necesitas con la máxima calidad.
              </p>
              <div className="hero-actions">
                <Link to="/productos" className="btn btn-primary btn-xl">
                  Comenzar a comprar
                  <ArrowRight size={20} />
                </Link>
                <Link to="/carrito" className="btn btn-secondary btn-xl">
                  Ver carrito
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <Users size={20} />
                  <span>50K+ Clientes</span>
                </div>
                <div className="stat-item">
                  <Award size={20} />
                  <span>4.9★ Rating</span>
                </div>
                <div className="stat-item">
                  <Zap size={20} />
                  <span>Entrega 2h</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                  alt="Supermercado online" 
                />
                <div className="hero-floating-card">
                  <div className="floating-card-content">
                    <div className="floating-card-icon">🛒</div>
                    <div>
                      <h4>Envío Gratis</h4>
                      <p>En pedidos +$50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">¿Por qué elegir SuperMarket?</h2>
            <p className="section-description">
              Ofrecemos la mejor experiencia de compra online con productos de calidad y servicio excepcional
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={32} />
              </div>
              <h3>Entrega Ultra Rápida</h3>
              <p>Recibe tus productos en menos de 2 horas con nuestro servicio express</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Productos Frescos</h3>
              <p>Garantizamos la máxima calidad y frescura en todos nuestros productos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>Disponible 24/7</h3>
              <p>Haz tu compra cuando quieras, siempre abierto para tu conveniencia</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={32} />
              </div>
              <h3>Calidad Premium</h3>
              <p>Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Productos Destacados</h2>
            <p className="section-description">
              Los productos más populares y mejor valorados por nuestros clientes
            </p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-footer">
            <Link to="/productos" className="btn btn-primary btn-lg">
              Ver todos los productos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* On Sale Section */}
      <section className="on-sale">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ofertas Especiales</h2>
            <p className="section-description">
              Aprovecha estas increíbles ofertas por tiempo limitado
            </p>
          </div>
          <div className="products-grid">
            {onSale.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="best-sellers">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Los Más Vendidos</h2>
            <p className="section-description">
              Los productos que más eligen nuestros clientes
            </p>
          </div>
          <div className="products-grid">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
            <p className="section-description">
              Testimonios reales de clientes satisfechos
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="testimonial-text">
                "Excelente servicio y productos de calidad. La entrega es súper rápida 
                y todo llega fresco. Definitivamente mi supermercado de confianza."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <strong>María González</strong>
                  <span>Cliente desde 2023</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="testimonial-text">
                "Los precios son muy competitivos y la variedad de productos es increíble. 
                Me ahorra mucho tiempo hacer las compras desde casa."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">C</div>
                <div className="author-info">
                  <strong>Carlos Rodríguez</strong>
                  <span>Cliente desde 2022</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <p className="testimonial-text">
                "La calidad de los productos es excepcional. Siempre frescos y deliciosos. 
                El servicio al cliente también es muy bueno."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <strong>Ana Martínez</strong>
                  <span>Cliente desde 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Mantente al día con nuestras ofertas</h2>
              <p>Recibe notificaciones sobre nuevos productos y ofertas exclusivas</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="newsletter-input"
              />
              <button className="btn btn-primary btn-lg">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
