import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Heart, Star, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, items, updateQuantity } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cartItem = items.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleUpdateQuantity = (newQuantity, e) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, newQuantity);
  };

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        fill={i < Math.floor(rating) ? "#fbbf24" : "none"}
        color={i < Math.floor(rating) ? "#fbbf24" : "#d1d5db"}
      />
    ));
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/producto/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.discount && (
            <span className="discount-badge">-{product.discount}%</span>
          )}
          <div className={`product-overlay ${isHovered ? 'overlay-visible' : ''}`}>
            <button className="overlay-btn" title="Ver detalles">
              <Eye size={20} />
            </button>
          </div>
        </div>
        
        <div className="product-info">
          <div className="product-header">
            <h3 className="product-name">{product.name}</h3>
            <button 
              className={`like-btn ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
              title={isLiked ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
          </div>
          
          <p className="product-category">{product.category}</p>
          
          <div className="product-rating">
            <div className="stars">
              {renderStars(product.rating)}
            </div>
            <span className="rating-text">({product.reviews})</span>
          </div>
          
          <div className="product-tags">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="product-tag">{tag}</span>
            ))}
          </div>
          
          <div className="product-price">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="current-price">${product.price}</span>
          </div>

          <div className="product-actions">
            {quantity > 0 ? (
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={(e) => handleUpdateQuantity(quantity - 1, e)}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={(e) => handleUpdateQuantity(quantity + 1, e)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            ) : (
              <button 
                className="add-to-cart-btn" 
                onClick={handleAddToCart}
                title="Agregar al carrito"
              >
                <ShoppingCart size={16} />
                Agregar
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
