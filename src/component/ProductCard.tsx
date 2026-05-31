import { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  link?: string;
  badge?: string;
  onAddToCart?: () => void;
}

const ProductCard = ({ image, title, price, link = '#', badge, onAddToCart }: ProductCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setAdding(true);
    onAddToCart?.();
    setTimeout(() => setAdding(false), 1200);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#111',
        borderRadius: 16,
        overflow: 'hidden',
        border: hovered ? '1px solid rgba(230,57,70,0.4)' : '1px solid rgba(255,255,255,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.25,0.8,0.25,1)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.5)' : '0 4px 16px rgba(0,0,0,0.3)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: 260 }}>
        <a href={link}>
          <img src={image} alt={title} style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.25,0.8,0.25,1)',
            display: 'block',
          }} />
        </a>

        {/* Dark overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
          opacity: hovered ? 1 : 0.3,
          transition: 'opacity 0.3s',
        }} />

        {/* Badge */}
        {badge && (
          <span style={{
            position: 'absolute', top: 12, left: 12,
            background: 'linear-gradient(90deg, #e63946, #ff6b35)',
            color: '#fff', fontSize: 9, fontWeight: 800,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: 4,
          }}>{badge}</span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          style={{
            position: 'absolute', top: 12, right: 12,
            background: wishlisted ? '#e63946' : 'rgba(0,0,0,0.6)',
            border: 'none', borderRadius: '50%',
            width: 34, height: 34,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.7)',
            transition: 'all 0.3s',
            backdropFilter: 'blur(8px)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={wishlisted ? '#fff' : 'none'}>
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Add to cart */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 0.3s',
        }}>
          <button onClick={handleAdd} style={{
            width: '100%',
            background: adding
              ? 'linear-gradient(90deg, #22c55e, #16a34a)'
              : 'linear-gradient(90deg, #e63946, #ff6b35)',
            color: '#fff', border: 'none',
            padding: '11px 0', borderRadius: 10,
            fontWeight: 800, fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            cursor: 'pointer', display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 6,
            transition: 'background 0.3s', fontFamily: 'inherit',
          }}>
            {adding ? (
              <><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg> Added!</>
            ) : (
              <><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg> Add to Cart</>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px 16px' }}>
        <a href={link} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <h3 style={{
            margin: 0, fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.4, letterSpacing: '0.02em',
          }}>{title}</h3>
          <span style={{
            fontWeight: 900, fontSize: 15, color: '#e63946',
            whiteSpace: 'nowrap', fontFamily: "'Helvetica Neue', Arial, sans-serif",
          }}>{price}</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
          {[1,2,3,4,5].map(i => (
            <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i <= 4 ? '#e63946' : 'none'}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 2 }}>(4.0)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
