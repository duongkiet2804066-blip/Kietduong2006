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
  { label: 'Home', active: true },
  { label: 'Men' },
  { label: 'Women' },
  { label: 'Shop' },
  { label: 'Sale', accent: true },
  { label: 'Discount', accent: true },
];

const SOCIAL_ICONS = ['facebook', 'instagram', 'youtube', 'pinterest'];

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

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 992) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      id="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : '0 1px 0 #f0f0f0',
        transition: 'box-shadow 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          background: '#1a1a1a',
          color: '#fff',
          fontSize: 12,
          letterSpacing: '0.04em',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Socials */}
        <ul style={{ listStyle: 'none', display: 'flex', gap: 12, margin: 0, padding: 0 }}>
          {SOCIAL_ICONS.map((icon) => (
            <li key={icon}>
              <a
                href="#"
                style={{ opacity: 0.6, transition: 'opacity 0.2s', display: 'flex' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
              >
                <svg width="16" height="16" style={{ fill: '#fff' }}>
                  <use xlinkHref={`#${icon}`} />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        {/* Promo message */}
        <p style={{ margin: 0, fontWeight: 600 }}>
          ✦ Free Shipping on all orders above $100 ✦
        </p>

        {/* Top links */}
        <ul style={{ listStyle: 'none', display: 'flex', gap: 20, margin: 0, padding: 0 }}>
          <li>
            <a
              href="#"
              style={{ opacity: 0.6, fontSize: 12, transition: 'opacity 0.2s', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ opacity: 0.6, fontSize: 12, transition: 'opacity 0.2s', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            >
              Help
            </a>
          </li>
          {user ? (
            <li>
              <span style={{ opacity: 0.6, fontSize: 12, color: '#fff' }}>
                {user.email}
              </span>
            </li>
          ) : (
            <li>
              <button
                onClick={onLoginClick}
                style={{
                  background: 'none',
                  border: 'none',
                  opacity: 0.6,
                  fontSize: 12,
                  transition: 'opacity 0.2s',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* ── Main nav ── */}
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 28,
            fontWeight: 900,
            color: '#1a1a1a',
            letterSpacing: '-0.03em',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          STYLISH
        </a>

        {/* Desktop nav links */}
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: 36,
            margin: 0,
            padding: 0,
          }}
          className="d-none d-lg-flex"
        >
          {NAV_LINKS.map(({ label, accent }) => {
            const isActive = (label.toLowerCase() === 'home' && currentPage === 'home') ||
                           (label.toLowerCase() === 'men' && currentPage === 'men') ||
                           (label.toLowerCase() === 'women' && currentPage === 'women') ||
                           (label.toLowerCase() === 'shop' && currentPage === 'shop') ||
                           (label.toLowerCase() === 'sale' && currentPage === 'sale') ||
                           (label.toLowerCase() === 'discount' && currentPage === 'discount');
            return (
              <li key={label} style={{ position: 'relative' }}>
                <button
                  onClick={() => onNavigate?.(label.toLowerCase())}
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    color: accent ? '#e63946' : isActive ? '#1a1a1a' : '#555',
                    background: 'none',
                    border: 'none',
                    padding: '4px 0',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    position: 'relative',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#e63946')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = accent ? '#e63946' : isActive ? '#1a1a1a' : '#555')
                  }
                >
                  {label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '100%',
                        height: 2,
                        background: '#1a1a1a',
                        borderRadius: 1,
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {/* Search toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            style={{
              background: 'none',
              border: 'none',
              padding: '10px',
              borderRadius: '50%',
              color: '#1a1a1a',
              cursor: 'pointer',
              display: 'flex',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* User */}
          {user ? (
            <div style={{ position: 'relative' }}>
              <button
                aria-label="Account"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '50%',
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  display: 'flex',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  background: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  padding: '12px',
                  minWidth: '200px',
                  display: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.display = 'block')}
              >
                <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#666', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {user.email}
                </p>
                <button
                  onClick={onLogout}
                  style={{
                    width: '100%',
                    background: '#f5f5f5',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              aria-label="Account"
              style={{
                background: 'none',
                border: 'none',
                padding: '10px',
                borderRadius: '50%',
                color: '#1a1a1a',
                cursor: 'pointer',
                display: 'flex',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}

          {/* Cart */}
          <button
            onClick={onCartOpen}
            aria-label="Cart"
            style={{
              background: 'none',
              border: 'none',
              padding: '10px',
              borderRadius: '50%',
              color: '#1a1a1a',
              cursor: 'pointer',
              display: 'flex',
              position: 'relative',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  background: '#e63946',
                  color: '#fff',
                  borderRadius: '50%',
                  width: 18,
                  height: 18,
                  fontSize: 10,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'popIn 0.35s cubic-bezier(0.68,-0.55,0.27,1.55)',
                  border: '2px solid #fff',
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className="d-flex d-lg-none"
            style={{
              background: 'none',
              border: 'none',
              padding: '10px',
              borderRadius: '50%',
              color: '#1a1a1a',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Search bar ── */}
      <div
        style={{
          maxHeight: searchOpen ? 64 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
          borderTop: searchOpen ? '1px solid #f0f0f0' : 'none',
          background: '#faf9f7',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: '#999', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search for shoes, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={searchOpen}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              fontSize: 15,
              outline: 'none',
              color: '#1a1a1a',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', padding: 4 }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        style={{
          maxHeight: mobileOpen ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.25,0.8,0.25,1)',
          borderTop: mobileOpen ? '1px solid #f0f0f0' : 'none',
          background: '#fff',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
          {NAV_LINKS.map(({ label, accent }) => (
            <li key={label}>
              <button
                onClick={() => {
                  if (onNavigate) onNavigate(label.toLowerCase());
                  setMobileOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px 24px',
                  fontSize: 15,
                  fontWeight: 700,
                  color: accent ? '#e63946' : '#1a1a1a',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #f8f8f8',
                  transition: 'background 0.2s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#faf9f7')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes popIn {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }
      `}</style>
    </header>
  );
};

export default Header;