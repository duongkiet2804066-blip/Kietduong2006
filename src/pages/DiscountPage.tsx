import { useState } from 'react';

const DiscountPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [discountCode] = useState('SAVE20-' + Math.random().toString(36).substring(2, 8).toUpperCase());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="discount-page" style={{ paddingTop: '40px', minHeight: '80vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Hero Section */}
            <div className="text-center mb-5">
              <h1 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '48px', 
                fontWeight: 900,
                background: 'linear-gradient(135deg, #e63946 0%, #f1faee 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                Claim Your Exclusive Discount!
              </h1>
              <p className="lead text-muted">
                Subscribe to our newsletter and get an exclusive discount code for your next purchase
              </p>
            </div>

            {!submitted ? (
              <>
                {/* Main Offer Card */}
                <div style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
                  borderRadius: '24px',
                  padding: '60px 40px',
                  color: '#fff',
                  textAlign: 'center',
                  marginBottom: '40px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Decorative elements */}
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'rgba(230, 57, 70, 0.2)',
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'rgba(230, 57, 70, 0.15)',
                  }} />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '72px', fontWeight: 900, color: '#e63946', marginBottom: '8px' }}>
                      20% OFF
                    </div>
                    <p style={{ fontSize: '18px', marginBottom: '24px', opacity: 0.9 }}>
                      On your first order when you subscribe
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <div className="input-group input-group-lg">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              style={{ borderRadius: '12px 0 0 12px', border: 'none', padding: '16px 20px' }}
                            />
                            <button 
                              type="submit" 
                              className="btn btn-danger btn-lg"
                              style={{ 
                                borderRadius: '0 12px 12px 0',
                                padding: '16px 32px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                              }}
                            >
                              Get Code
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <p style={{ fontSize: '12px', marginTop: '16px', opacity: 0.7 }}>
                      By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                    </p>
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="row g-4 mb-5">
                  <div className="col-md-4">
                    <div style={{
                      background: '#f8f9fa',
                      borderRadius: '16px',
                      padding: '30px',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎁</div>
                      <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>Instant Discount</h4>
                      <p className="text-muted mb-0">Get 20% off immediately on your first order</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{
                      background: '#f8f9fa',
                      borderRadius: '16px',
                      padding: '30px',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>📧</div>
                      <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>Exclusive Offers</h4>
                      <p className="text-muted mb-0">Receive members-only deals and early access</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div style={{
                      background: '#f8f9fa',
                      borderRadius: '16px',
                      padding: '30px',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                      <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚚</div>
                      <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>Free Shipping</h4>
                      <p className="text-muted mb-0">On all orders over $100</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="text-center">
                  <p className="text-muted mb-3">Join 50,000+ happy subscribers</p>
                  <div className="d-flex justify-content-center gap-4 flex-wrap">
                    <div className="d-flex align-items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#28a745' }}>
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>No spam</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#28a745' }}>
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Unsubscribe anytime</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#28a745' }}>
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>Secure</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Success State */
              <div style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '60px 40px',
                textAlign: 'center',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", marginBottom: '16px' }}>
                  Congratulations! 🎉
                </h2>
                <p className="lead text-muted mb-4">
                  Your exclusive discount code is ready. Check your email at <strong>{email}</strong>
                </p>

                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'inline-block',
                  marginBottom: '24px'
                }}>
                  <p className="text-muted mb-2">Your Discount Code</p>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 900,
                    color: '#e63946',
                    letterSpacing: '0.1em',
                    fontFamily: 'monospace'
                  }}>
                    {discountCode}
                  </div>
                </div>

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button 
                    onClick={() => navigator.clipboard.writeText(discountCode)}
                    className="btn btn-outline-dark btn-lg"
                  >
                    📋 Copy Code
                  </button>
                  <a href="/" className="btn btn-danger btn-lg">
                    🛍️ Shop Now
                  </a>
                </div>

                <p className="text-muted mt-4" style={{ fontSize: '14px' }}>
                  Valid for 30 days. Minimum order $50. Cannot be combined with other offers.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPage;