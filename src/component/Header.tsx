import { useEffect, useState } from 'react';

interface HeaderProps {
  cartCount?: number;
  onCartOpen?: () => void;
  user?: { email: string } | null;
  onLogout?: () => void;
  onLoginClick?: () => void;
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const NAV_LINKS = [
  { label: 'Home' },
  { label: 'Men' },
  { label: 'Women' },
  { label: 'Shop' },
  { label: 'Sale', hot: true },
  { label: 'Discount', hot: true },
];

const Header = ({ cartCount = 0, onCartOpen, user, onLogout, onLoginClick, onNavigate, currentPage = 'home' }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 992) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(10,10,10,0.97)' : '#0a0a0a',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      boxShadow: scrolled ? '0 2px 32px rgba(0,0,0,0.5)' : 'none',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      transition: 'all 0.3s ease',
    }}>
      {/* Top bar */}
      <div style={{
        background: 'linear-gradient(90deg, #e63946, #ff6b35)',
        color: '#fff', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        padding: '7px 24px', textAlign: 'center',
      }}>
        ⚡ FREE SHIPPING ON ALL ORDERS ABOVE $100 &nbsp;|&nbsp; NEW DROP EVERY FRIDAY ⚡
      </div>

      {/* Main nav */}
      <nav style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 24px',
        height: 64, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 24,
      }}>
        {/* Logo */}
        <button onClick={() => onNavigate?.('home')} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 22, fontWeight: 900, color: '#fff',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          flexShrink: 0,
        }}>
          STY<span style={{ color: '#e63946' }}>L</span>ISH
        </button>

        {/* Desktop nav */}
        <ul className="d-none d-lg-flex" style={{
          listStyle: 'none', display: 'flex', gap: 32, margin: 0, padding: 0,
        }}>
          {NAV_LINKS.map(({ label, hot }) => {
            const isActive = label.toLowerCase() === currentPage;
            return (
              <li key={label} style={{ position: 'relative' }}>
                <button
                  onClick={() => onNavigate?.(label.toLowerCase())}
                  style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', background: 'none', border: 'none',
                    color: isActive ? '#fff' : hot ? '#e63946' : 'rgba(255,255,255,0.55)',
                    cursor: 'pointer', padding: '4px 0', transition: 'color 0.2s',
                    fontFamily: 'inherit', position: 'relative',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? '#fff' : hot ? '#e63946' : 'rgba(255,255,255,0.55)')}
                >
                  {label}
                  {hot && (
                    <span style={{
                      position: 'absolute', top: -8, right: -20,
                      background: '#e63946', color: '#fff',
                      fontSize: 8, fontWeight: 900, letterSpacing: '0.05em',
                      padding: '2px 5px', borderRadius: 3,
                    }}>HOT</span>
                  )}
                  {isActive && (
                    <span style={{
                      position: 'absolute', bottom: -4, left: 0,
                      width: '100%', height: 2,
                      background: 'linear-gradient(90deg, #e63946, #ff6b35)',
                      borderRadius: 1,
                    }} />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {/* Search */}
          <button onClick={() => setSearchOpen(!searchOpen)} style={{
            background: searchOpen ? 'rgba(255,255,255,0.1)' : 'none',
            border: 'none', padding: '10px', borderRadius: '50%',
            color: '#fff', cursor: 'pointer', display: 'flex', transition: 'background 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = searchOpen ? 'rgba(255,255,255,0.1)' : 'none')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* User */}
          {user ? (
            <div style={{ position: 'relative' }}>
              <button style={{
                background: 'linear-gradient(135deg, #e63946, #ff6b35)',
                border: 'none', padding: '6px 14px', borderRadius: 20,
                color: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.05em',
              }}>
                {user.email.split('@')[0].toUpperCase()}
              </button>
              <button onClick={onLogout} style={{
                position: 'absolute', top: '110%', right: 0,
                background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', padding: '8px 16px', borderRadius: 8,
                cursor: 'pointer', fontSize: 12, fontWeight: 600,
                whiteSpace: 'nowrap',
              }}>Logout</button>
            </div>
          ) : (
            <button onClick={onLoginClick} style={{
              background: 'none', border: '1px solid rgba(255,255,255,0.2)',
              padding: '7px 16px', borderRadius: 20,
              color: 'rgba(255,255,255,0.8)', cursor: 'pointer',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', transition: 'all 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#e63946'; e.currentTarget.style.borderColor = '#e63946'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >Login</button>
          )}

          {/* Cart */}
          <button onClick={onCartOpen} style={{
            background: 'none', border: 'none', padding: '10px',
            borderRadius: '50%', color: '#fff', cursor: 'pointer',
            display: 'flex', position: 'relative', transition: 'background 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: 4, right: 4,
                background: 'linear-gradient(135deg, #e63946, #ff6b35)',
                color: '#fff', borderRadius: '50%',
                width: 18, height: 18, fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                animation: 'popIn 0.35s cubic-bezier(0.68,-0.55,0.27,1.55)',
              }}>{cartCount}</span>
            )}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="d-flex d-lg-none"
            style={{
              background: 'none', border: 'none', padding: '10px',
              color: '#fff', cursor: 'pointer', borderRadius: '50%',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Search bar */}
      <div style={{
        maxHeight: searchOpen ? 60 : 0, overflow: 'hidden',
        transition: 'max-height 0.3s ease',
        borderTop: searchOpen ? '1px solid rgba(255,255,255,0.07)' : 'none',
        background: '#111',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '10px 24px',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: '#666' }}>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input type="text" placeholder="Search drops, brands, styles..."
            value={query} onChange={(e) => setQuery(e.target.value)}
            autoFocus={searchOpen}
            style={{
              flex: 1, border: 'none', background: 'transparent',
              fontSize: 14, outline: 'none', color: '#fff',
            }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{
              background: 'none', border: 'none', cursor: 'pointer', color: '#666',
            }}>✕</button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: mobileOpen ? 500 : 0, overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        background: '#111',
        borderTop: mobileOpen ? '1px solid rgba(255,255,255,0.07)' : 'none',
      }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
          {NAV_LINKS.map(({ label, hot }) => (
            <li key={label}>
              <button onClick={() => { onNavigate?.(label.toLowerCase()); setMobileOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%', padding: '14px 24px',
                  fontSize: 14, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: hot ? '#e63946' : 'rgba(255,255,255,0.8)',
                  background: 'none', border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                {label}
                {hot && <span style={{
                  background: '#e63946', color: '#fff',
                  fontSize: 8, fontWeight: 900, padding: '2px 6px', borderRadius: 3,
                }}>HOT</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes popIn { from { transform: scale(0); } to { transform: scale(1); } }
      `}</style>
    </header>
  );
};

export default Header;
