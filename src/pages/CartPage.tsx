import { useState } from 'react';

export interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
}

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
  onClose: () => void;
}

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout, onClose }: CartPageProps) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4" style={{ marginTop: '40px' }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Shopping Cart</h2>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" style={{ color: '#ccc', marginBottom: '20px' }}>
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <h4 className="text-muted">Your cart is empty</h4>
            <p className="text-muted">Looks like you haven't added anything yet.</p>
            <button
              onClick={onClose}
              className="btn btn-dark px-4 py-2"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item d-flex align-items-center py-3 border-bottom">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <div className="flex-grow-1 ms-4">
                      <h5 style={{ fontSize: '16px', fontWeight: 600 }}>{item.title}</h5>
                      <p className="text-muted mb-1">Size: {item.size}</p>
                      <p className="fw-bold mb-0">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="quantity-control d-flex align-items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                          background: '#fff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        -
                      </button>
                      <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 600 }}>{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          border: '1px solid #ddd',
                          background: '#fff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="ms-4" style={{ minWidth: '80px', textAlign: 'right' }}>
                      <span className="fw-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#e63946',
                        cursor: 'pointer',
                        marginLeft: '16px',
                        fontSize: '18px'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cart-summary" style={{
                background: '#f8f9fa',
                borderRadius: '12px',
                padding: '24px',
                position: 'sticky',
                top: '100px'
              }}>
                <h4 className="mb-4">Order Summary</h4>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span className="fw-bold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span className="fw-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>

                {shipping > 0 && (
                  <p className="text-muted small">
                    Free shipping on orders over $100
                  </p>
                )}

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold" style={{ fontSize: '18px' }}>Total</span>
                  <span className="fw-bold" style={{ fontSize: '18px', color: '#e63946' }}>
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={onCheckout}
                  className="btn btn-dark w-100 py-3"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Proceed to Checkout
                </button>

                <div className="text-center mt-3">
                  <button
                    onClick={onClose}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#666',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;