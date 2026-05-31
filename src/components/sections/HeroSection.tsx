const HeroSection = () => (
    <section
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #faf9f7 0%, #f5f0ea 55%, #ede8df 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'rgba(230,57,70,0.04)',
          top: -250,
          right: -200,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'rgba(26,26,26,0.03)',
          bottom: -150,
          left: 60,
          pointerEvents: 'none',
        }}
      />
  
      <div
        className="container-stylish"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          padding: '80px 24px',
        }}
      >
        {/* Left: Text */}
        <div style={{ animation: 'fadeInUp 0.8s ease both' }}>
          <span
            style={{
              display: 'inline-block',
              background: '#1a1a1a',
              color: '#fff',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: 999,
              marginBottom: 28,
            }}
          >
            New Collection 2024
          </span>
  
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(48px, 6vw, 80px)',
              fontWeight: 900,
              color: '#1a1a1a',
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
              margin: '0 0 24px',
            }}
          >
            Step into<br />
            <span style={{ color: '#e63946', fontStyle: 'italic' }}>Style.</span>
          </h1>
  
          <p
            style={{
              fontSize: 18,
              color: '#6b6375',
              lineHeight: 1.75,
              maxWidth: 440,
              margin: '0 0 40px',
              animation: 'fadeInUp 0.8s ease 0.1s both',
            }}
          >
            Discover the finest footwear crafted for those who know that every step tells a story.
          </p>
  
          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.8s ease 0.2s both',
            }}
          >
            <button className="btn-primary">
              Shop Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-outline">View Lookbook</button>
          </div>
  
          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 56,
              paddingTop: 40,
              borderTop: '1px solid rgba(0,0,0,0.08)',
              animation: 'fadeInUp 0.8s ease 0.3s both',
            }}
          >
            {[['2K+', 'Products'], ['50K+', 'Customers'], ['10+', 'Years of Style']].map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 30,
                    fontWeight: 900,
                    color: '#1a1a1a',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {n}
                </div>
                <div style={{ fontSize: 13, color: '#999', marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Right: Image */}
        <div
          style={{
            position: 'relative',
            animation: 'fadeInRight 0.9s ease 0.1s both',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 540,
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(0,0,0,0.14)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80"
              alt="Featured shoe"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
  
          {/* Floating badge */}
          <div
            style={{
              position: 'absolute',
              bottom: -24,
              left: -32,
              background: '#fff',
              borderRadius: 18,
              padding: '18px 26px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              animation: 'float 3.5s ease-in-out infinite',
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#999',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 6,
              }}
            >
              Limited Drop
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: '#e63946',
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              30% OFF
            </div>
          </div>
  
          {/* Second badge top-right */}
          <div
            style={{
              position: 'absolute',
              top: 24,
              right: -20,
              background: '#1a1a1a',
              color: '#fff',
              borderRadius: 14,
              padding: '14px 20px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
              animation: 'float 4s ease-in-out 1s infinite',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 4 }}>👟</div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>Premium</div>
          </div>
        </div>
      </div>
  
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-12px); }
        }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #1a1a1a; color: #fff; border: 2px solid #1a1a1a;
          padding: 14px 36px; border-radius: 4px; font-size: 13px;
          font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; transition: all 0.3s; font-family: inherit;
        }
        .btn-primary:hover { background: #e63946; border-color: #e63946; transform: translateY(-2px); box-shadow: 0 10px 30px rgba(230,57,70,0.3); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #1a1a1a; border: 2px solid #1a1a1a;
          padding: 14px 36px; border-radius: 4px; font-size: 13px;
          font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          cursor: pointer; transition: all 0.3s; font-family: inherit;
        }
        .btn-outline:hover { background: #1a1a1a; color: #fff; transform: translateY(-2px); }
  
        @media (max-width: 900px) {
          section > div[class] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
  
  export default HeroSection;