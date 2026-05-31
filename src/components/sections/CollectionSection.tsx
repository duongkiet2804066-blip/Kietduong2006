interface CollectionSectionProps {
  onNavigate?: (page: string) => void;
}

const CollectionSection = ({ onNavigate }: CollectionSectionProps) => (
  <section style={{ background: '#0a0a0a', padding: '80px 0' }}>
    <div className="container-lg">
      <div className="text-center mb-5">
        <span style={{
          display: 'inline-block', background: 'rgba(230,57,70,0.15)',
          border: '1px solid rgba(230,57,70,0.3)',
          color: '#e63946', fontSize: 10, fontWeight: 800,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          padding: '6px 18px', borderRadius: 999, marginBottom: 16,
        }}>Collections</span>
        <h2 style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900,
          color: '#fff', letterSpacing: '-0.02em', margin: 0,
        }}>Shop by Style</h2>
      </div>

      <div className="row g-4">
        {/* Men */}
        <div className="col-md-6">
          <div style={{
            position: 'relative', borderRadius: 20, overflow: 'hidden',
            height: 420, cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
              alt="Men's Collection"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
              onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
            }} />
            <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
              <span style={{
                display: 'inline-block', background: 'rgba(230,57,70,0.9)',
                color: '#fff', fontSize: 9, fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: 3, marginBottom: 10,
              }}>NEW DROP</span>
              <h3 style={{
                color: '#fff', fontSize: 28, fontWeight: 900,
                letterSpacing: '-0.01em', margin: '0 0 16px',
              }}>Men's Collection</h3>
              <button onClick={() => onNavigate?.('men')} style={{
                background: '#fff', color: '#0a0a0a', border: 'none',
                padding: '11px 28px', borderRadius: 8, fontWeight: 800,
                fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e63946'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a0a0a'; }}
              >Shop Now →</button>
            </div>
          </div>
        </div>

        {/* Women - ảnh sneaker nữ */}
        <div className="col-md-6">
          <div style={{
            position: 'relative', borderRadius: 20, overflow: 'hidden',
            height: 420, cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80"
              alt="Women's Collection"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
              onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1.06)')}
              onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
            }} />
            <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}>
              <span style={{
                display: 'inline-block', background: 'rgba(255,107,53,0.9)',
                color: '#fff', fontSize: 9, fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '4px 12px', borderRadius: 3, marginBottom: 10,
              }}>TRENDING</span>
              <h3 style={{
                color: '#fff', fontSize: 28, fontWeight: 900,
                letterSpacing: '-0.01em', margin: '0 0 16px',
              }}>Women's Collection</h3>
              <button onClick={() => onNavigate?.('women')} style={{
                background: '#fff', color: '#0a0a0a', border: 'none',
                padding: '11px 28px', borderRadius: 8, fontWeight: 800,
                fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e63946'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a0a0a'; }}
              >Shop Now →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CollectionSection;
