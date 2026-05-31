import { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  link?: string;
  badge?: string;
  onAddToCart?: () => void;
}

const ProductCard = ({
  image,
  title,
  price,
  link = '#',
  badge,
  onAddToCart,
}: ProductCardProps) => {
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
        background: '#fff',
        borderRadius: 18,
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.13)'
          : '0 4px 20px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.25,0.8,0.25,1)',
        position: 'relative',
      }}
    >
      {/* Image wrapper */}
      <div style={{ position: 'relative', overflow: 'hidden', height: 280 }}>
        <a href={link}>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.6s cubic-bezier(0.25,0.8,0.25,1)',
              display: 'block',
            }}
          />
        </a>

        {/* Badge */}
        {badge && (
          <span
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              background: '#e63946',
              color: '#fff',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '5px 12px',
              borderRadius: 999,
            }}
          >
            {badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          aria-label="Wishlist"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            background: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'scale(1)' : 'scale(0.7)',
            transition: 'all 0.3s',
            color: wishlisted ? '#e63946' : '#999',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={wishlisted ? '#e63946' : 'none'}>
            <path
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              stroke={wishlisted ? '#e63946' : '#999'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Add to cart overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(12px)',
            transition: 'all 0.35s',
          }}
        >
          <button
            onClick={handleAdd}
            style={{
              width: '100%',
              background: adding ? '#22c55e' : '#fff',
              color: adding ? '#fff' : '#1a1a1a',
              border: 'none',
              padding: '12px 0',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'background 0.3s, color 0.3s',
              fontFamily: 'inherit',
            }}
          >
            {adding ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card info */}
      <div style={{ padding: '16px 20px 20px' }}>
        <a
          href={link}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
            textDecoration: 'none',
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 600,
              color: '#1a1a1a',
              fontFamily: 'inherit',
              lineHeight: 1.4,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#e63946')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#1a1a1a')}
          >
            {title}
          </h3>
          <span
            style={{
              fontWeight: 800,
              fontSize: 17,
              color: '#e63946',
              whiteSpace: 'nowrap',
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {price}
          </span>
        </a>

        {/* Quick view */}
        <button
          style={{
            marginTop: 10,
            background: 'none',
            border: 'none',
            color: '#999',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.2s',
            fontFamily: 'inherit',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#1a1a1a')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#999')}
        >
          Quick View →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;