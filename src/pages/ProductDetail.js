import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Plus, Minus, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, items, updateQuantity } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  const cartItem = items.find(item => item.id === product?.id);
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Producto no encontrado</h2>
            <p>El producto que buscas no existe o ha sido eliminado.</p>
            <button onClick={() => navigate('/productos')} className="btn btn-primary">
              Ver todos los productos
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleUpdateQuantity = (newQuantity) => {
    updateQuantity(product.id, newQuantity);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        fill={i < Math.floor(rating) ? "#fbbf24" : "none"}
        color={i < Math.floor(rating) ? "#fbbf24" : "#d1d5db"}
      />
    ));
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-header">
          <button onClick={() => navigate(-1)} className="back-link">
            <ArrowLeft size={20} />
            Volver
          </button>
          <div className="breadcrumb">
            <span>Productos</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>

        <div className="product-content">
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
              {product.discount && (
                <span className="discount-badge">-{product.discount}%</span>
              )}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header-info">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-actions">
                <button 
                  className={`action-btn ${isLiked ? 'liked' : ''}`}
                  onClick={() => setIsLiked(!isLiked)}
                  title={isLiked ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                </button>
                <button className="action-btn" title="Compartir">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">({product.reviews} reseñas)</span>
            </div>

            <div className="product-tags">
              {product.tags.map((tag, index) => (
                <span key={index} className="product-tag">{tag}</span>
              ))}
            </div>

            <div className="product-price">
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
              <span className="current-price">${product.price}</span>
            </div>

            <div className="product-description">
              <h3>Descripción</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-quantity">
              <label>Cantidad:</label>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="product-actions-main">
              {cartQuantity > 0 ? (
                <div className="cart-controls">
                  <div className="cart-quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleUpdateQuantity(cartQuantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity">{cartQuantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleUpdateQuantity(cartQuantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <span className="cart-status">En el carrito</span>
                </div>
              ) : (
                <button className="btn btn-primary btn-xl add-to-cart-btn" onClick={handleAddToCart}>
                  <ShoppingCart size={20} />
                  Agregar al carrito
                </button>
              )}
            </div>

            <div className="product-features">
              <div className="feature">
                <Truck size={24} />
                <div>
                  <h4>Envío Gratis</h4>
                  <p>En pedidos superiores a $50</p>
                </div>
              </div>
              <div className="feature">
                <Shield size={24} />
                <div>
                  <h4>Garantía de Calidad</h4>
                  <p>Productos frescos garantizados</p>
                </div>
              </div>
              <div className="feature">
                <RotateCcw size={24} />
                <div>
                  <h4>Devoluciones Fáciles</h4>
                  <p>30 días para devoluciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
