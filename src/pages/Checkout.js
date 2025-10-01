import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, MapPin, Clock, CheckCircle, User, Lock, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular procesamiento del pago
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setIsCompleted(true);
    
    // Limpiar carrito después de 5 segundos
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 5000);
  };

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="checkout-empty">
            <h2>No hay productos en tu carrito</h2>
            <p>Agrega algunos productos para proceder con el checkout</p>
            <button onClick={() => navigate('/productos')} className="btn btn-primary">
              Ir a productos
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="checkout-success">
            <div className="success-icon">
              <CheckCircle size={80} />
            </div>
            <h2>¡Pedido realizado con éxito!</h2>
            <p>Tu pedido ha sido procesado y será entregado pronto.</p>
            <div className="success-details">
              <div className="success-item">
                <span className="success-label">Número de pedido:</span>
                <span className="success-value">#SM-{Date.now().toString().slice(-6)}</span>
              </div>
              <div className="success-item">
                <span className="success-label">Total:</span>
                <span className="success-value">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="success-item">
                <span className="success-label">Productos:</span>
                <span className="success-value">{items.length}</span>
              </div>
              <div className="success-item">
                <span className="success-label">Tiempo estimado de entrega:</span>
                <span className="success-value">2-4 horas</span>
              </div>
            </div>
            <p className="redirect-message">Serás redirigido al inicio en unos segundos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <button onClick={() => navigate('/carrito')} className="back-link">
            <ArrowLeft size={20} />
            Volver al carrito
          </button>
          <h1 className="checkout-title">Finalizar Compra</h1>
        </div>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Información Personal */}
            <div className="form-section">
              <h3 className="section-title">
                <User size={20} />
                Información Personal
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellido</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* Información de Envío */}
            <div className="form-section">
              <h3 className="section-title">
                <MapPin size={20} />
                Información de Envío
              </h3>
              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Ciudad</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">Código Postal</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* Información de Pago */}
            <div className="form-section">
              <h3 className="section-title">
                <CreditCard size={20} />
                Información de Pago
              </h3>
              <div className="form-group">
                <label htmlFor="cardName">Nombre en la Tarjeta</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Número de Tarjeta</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="input"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Fecha de Vencimiento</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/AA"
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                    className="input"
                  />
                </div>
              </div>
            </div>

            <div className="security-info">
              <Shield size={20} />
              <span>Tu información está protegida con encriptación SSL</span>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-xl checkout-btn"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Clock size={20} />
                  Procesando...
                </>
              ) : (
                <>
                  <Lock size={20} />
                  Completar Pedido - ${getTotalPrice().toFixed(2)}
                </>
              )}
            </button>
          </form>

          <div className="checkout-summary">
            <div className="summary-card">
              <h3>Resumen del Pedido</h3>
              <div className="order-items">
                {items.map(item => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <span className="item-name">{item.name}</span>
                      <span className="item-quantity">x{item.quantity}</span>
                    </div>
                    <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Envío</span>
                  <span className="free-shipping">Gratis</span>
                </div>
                <div className="total-row">
                  <span>Descuento</span>
                  <span className="discount">-$0.00</span>
                </div>
                <div className="total-row final">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
