import { useState } from 'react';
import type { CartItem } from './CartPage';

interface CheckoutPageProps {
  cartItems: CartItem[];
  user: { email: string } | null;
  onBack: () => void;
  onOrderComplete: () => void;
}

const CheckoutPage = ({ cartItems, user, onBack, onOrderComplete }: CheckoutPageProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId] = useState(`ORD-${Date.now().toString().slice(-8)}`);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      onOrderComplete();
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center py-5" style={{ marginTop: '60px' }}>
              <div style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '60px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#d4edda',
                  color: '#28a745',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", marginBottom: '16px' }}>
                  Order Placed Successfully!
                </h2>
                <p className="text-muted mb-2">Order ID: <strong>{orderId}</strong></p>
                <p className="text-muted mb-4">
                  Thank you for your purchase. We'll send a confirmation email to {formData.email}
                </p>
                <p className="text-muted">Redirecting to home page...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4" style={{ marginTop: '40px' }}>
              <div>
                <button
                  onClick={onBack}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    cursor: 'pointer',
                    fontSize: '14px',
                    marginBottom: '8px'
                  }}
                >
                  ← Back to Cart
                </button>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Checkout</h2>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-7">
              {/* Shipping Information */}
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h4 className="mb-4">Shipping Information</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Street address"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h4 className="mb-4">Payment Information</h4>
                <div className="mb-3">
                  <label className="form-label">Card Number *</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Name on Card *</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Expiry Date *</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">CVV *</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <span style={{ fontSize: '24px' }}>💳</span>
                  <span style={{ fontSize: '24px' }}>🏦</span>
                  <span style={{ fontSize: '24px' }}>💰</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '24px',
                position: 'sticky',
                top: '100px'
              }}>
                <h4 className="mb-4">Order Summary</h4>

                <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '16px' }}>
                  {cartItems.map((item) => (
                    <div key={item.id} className="d-flex align-items-center mb-3 pb-2 border-bottom">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                      />
                      <div className="flex-grow-1 ms-3">
                        <p className="mb-0 fw-bold" style={{ fontSize: '14px' }}>{item.title}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>Qty: {item.quantity}</p>
                      </div>
                      <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span className="fw-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span className="fw-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax (8%)</span>
                  <span className="fw-bold">${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold" style={{ fontSize: '18px' }}>Total</span>
                  <span className="fw-bold" style={{ fontSize: '18px', color: '#e63946' }}>
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100 py-3"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Place Order
                </button>

                <p className="text-muted text-center mt-3" style={{ fontSize: '12px' }}>
                  🔒 Your payment information is secure
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;