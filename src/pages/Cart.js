import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <div className="cart-empty-content">
              <div className="cart-empty-icon">
                <ShoppingBag size={80} />
              </div>
              <h2>Tu carrito está vacío</h2>
              <p>Agrega algunos productos para comenzar tu compra</p>
              <Link to="/productos" className="btn btn-primary btn-lg">
                Comenzar a comprar
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/productos" className="back-link">
            <ArrowLeft size={20} />
            Continuar comprando
          </Link>
          <h1 className="cart-title">Mi Carrito</h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <div className="cart-item-tags">
                    {item.tags?.slice(0, 2).map((tag, index) => (
                      <span key={index} className="cart-item-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="cart-item-actions">
                  <button className="action-btn" title="Agregar a favoritos">
                    <Heart size={18} />
                  </button>
                  <button className="action-btn" title="Compartir">
                    <Share2 size={18} />
                  </button>
                  <button
                    className="action-btn remove"
                    onClick={() => removeFromCart(item.id)}
                    title="Eliminar producto"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3 className="summary-title">Resumen del Pedido</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal ({items.length} productos)</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío</span>
                  <span className="free-shipping">Gratis</span>
                </div>
                <div className="summary-row">
                  <span>Descuento</span>
                  <span className="discount">-$0.00</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <div className="summary-actions">
                <Link to="/checkout" className="btn btn-primary btn-lg checkout-btn">
                  Proceder al pago
                </Link>
                <button
                  className="btn btn-secondary"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>
              </div>

              <div className="summary-benefits">
                <div className="benefit">
                  <span className="benefit-icon">🚚</span>
                  <span>Envío gratis en pedidos superiores a $50</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🔒</span>
                  <span>Pago seguro y protegido</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">↩️</span>
                  <span>Devoluciones fáciles</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">⭐</span>
                  <span>Garantía de satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
