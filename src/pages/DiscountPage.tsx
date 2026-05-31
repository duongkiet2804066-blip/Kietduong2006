import { useState } from 'react';

const DiscountPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [discountCode] = useState('SAVE20-' + Math.random().toString(36).substring(2, 8).toUpperCase());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '60px', minHeight: '80vh', background: '#0a0a0a' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Hero */}
            <div className="text-center mb-5">
              <span style={{
                display: 'inline-block', background: 'rgba(230,57,70,0.15)',
                border: '1px solid rgba(230,57,70,0.3)',
                color: '#e63946', fontSize: 10, fontWeight: 800,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '6px 18px', borderRadius: 999, marginBottom: 20,
              }}>Exclusive Offer</span>
              <h1 style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: 'clamp(32px,6vw,52px)', fontWeight: 900,
                color: '#fff', letterSpacing: '-0.02em', marginBottom: 16,
              }}>
                Claim Your <span style={{ color: '#e63946' }}>Discount!</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
                Subscribe to our newsletter and get an exclusive discount code for your next purchase
              </p>
            </div>

            {!submitted ? (
              <>
                {/* Main card */}
                <div style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 24, padding: '60px 40px',
                  textAlign: 'center', marginBottom: 32,
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: -60, right: -60,
                    width: 220, height: 220, borderRadius: '50%',
                    background: 'rgba(230,57,70,0.08)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: -40, left: -40,
                    width: 160, height: 160, borderRadius: '50%',
                    background: 'rgba(255,107,53,0.06)',
                  }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: 80, fontWeight: 900,
                      background: 'linear-gradient(90deg, #e63946, #ff6b35)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      marginBottom: 8, lineHeight: 1,
                    }}>20% OFF</div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 32 }}>
                      On your first order when you subscribe
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <div style={{ display: 'flex', gap: 0, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <input
                              type="email"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              style={{
                                flex: 1, background: 'rgba(255,255,255,0.05)',
                                border: 'none', padding: '16px 20px',
                                color: '#fff', fontSize: 14, outline: 'none',
                              }}
                            />
                            <button type="submit" style={{
                              background: 'linear-gradient(90deg, #e63946, #ff6b35)',
                              border: 'none', padding: '16px 28px',
                              color: '#fff', fontWeight: 800, fontSize: 12,
                              letterSpacing: '0.1em', textTransform: 'uppercase',
                              cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'inherit',
                            }}>Get Code</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <p style={{ fontSize: 12, marginTop: 16, color: 'rgba(255,255,255,0.25)' }}>
                      By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="row g-3 mb-5">
                  {[
                    { icon: '🎁', title: 'Instant Discount', desc: 'Get 20% off immediately on your first order' },
                    { icon: '📧', title: 'Exclusive Offers', desc: 'Members-only deals and early access to drops' },
                    { icon: '🚚', title: 'Free Shipping', desc: 'On all orders over $100' },
                  ].map((item) => (
                    <div key={item.title} className="col-md-4">
                      <div style={{
                        background: '#111',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 16, padding: '28px 24px',
                        textAlign: 'center', height: '100%',
                        transition: 'border-color 0.2s',
                      }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(230,57,70,0.4)')}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
                      >
                        <div style={{ fontSize: 40, marginBottom: 14 }}>{item.icon}</div>
                        <h4 style={{ fontWeight: 800, marginBottom: 10, fontSize: 15, color: '#fff' }}>{item.title}</h4>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust */}
                <div className="text-center">
                  <p style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 16, fontSize: 13 }}>
                    Join 50,000+ happy subscribers
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
                    {['✓ No spam', '✓ Unsubscribe anytime', '✓ Secure'].map((item) => (
                      <span key={item} style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>{item}</span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Success */
              <div style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 24, padding: '60px 40px', textAlign: 'center',
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 style={{
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 12,
                }}>Congratulations! 🎉</h2>
                <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>
                  Your exclusive discount code is ready. Check your email at <strong style={{ color: '#fff' }}>{email}</strong>
                </p>
                <div style={{
                  background: 'rgba(230,57,70,0.1)',
                  border: '1px solid rgba(230,57,70,0.3)',
                  borderRadius: 12, padding: '24px', display: 'inline-block', marginBottom: 32,
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Discount Code</p>
                  <div style={{
                    fontSize: 32, fontWeight: 900, color: '#e63946',
                    letterSpacing: '0.1em', fontFamily: 'monospace',
                  }}>{discountCode}</div>
                </div>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => navigator.clipboard.writeText(discountCode)}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 10, padding: '12px 24px',
                      color: '#fff', fontWeight: 700, fontSize: 13,
                      cursor: 'pointer', fontFamily: 'inherit',
                    }}
                  >📋 Copy Code</button>
                  <a href="/" style={{
                    background: 'linear-gradient(90deg, #e63946, #ff6b35)',
                    borderRadius: 10, padding: '12px 24px',
                    color: '#fff', fontWeight: 700, fontSize: 13,
                    textDecoration: 'none', display: 'inline-block',
                  }}>🛍️ Shop Now</a>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.25)', marginTop: 24, fontSize: 12 }}>
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
