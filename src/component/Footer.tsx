const Footer = () => (
  <footer style={{
    background: '#0a0a0a',
    borderTop: '1px solid rgba(255,255,255,0.07)',
    color: '#fff',
    paddingTop: '60px',
    paddingBottom: '32px',
  }}>
    <div className="container-lg">
      <div className="row mb-5">
        {/* Brand */}
        <div className="col-lg-4 mb-4">
          <div style={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontSize: 28, fontWeight: 900, letterSpacing: '0.18em',
            marginBottom: 16,
          }}>
            STY<span style={{ color: '#e63946' }}>L</span>ISH
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.8, maxWidth: 280 }}>
            Premium footwear for those who move fast and dress sharp. Every step tells your story.
          </p>
          {/* Socials */}
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {['IG', 'TW', 'TK', 'YT'].map((s) => (
              <a key={s} href="#" style={{
                width: 36, height: 36, borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.05em', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#e63946'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e63946'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'none'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'; }}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          { title: 'Shop', links: ['Men\'s Collection', 'Women\'s Collection', 'New Arrivals', 'Sale', 'Discount Codes'] },
          { title: 'Support', links: ['Track Order', 'Shipping Info', 'Returns', 'FAQ', 'Contact Us'] },
          { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Privacy Policy', 'Terms'] },
        ].map((col) => (
          <div key={col.title} className="col-lg-2 col-6 mb-4">
            <h6 style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#fff', marginBottom: 20,
            }}>{col.title}</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {col.links.map((link) => (
                <li key={link} style={{ marginBottom: 10 }}>
                  <a href="#" style={{
                    color: 'rgba(255,255,255,0.4)', fontSize: 13,
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = '#fff')}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)')}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="col-lg-2 mb-4">
          <h6 style={{
            fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#fff', marginBottom: 20,
          }}>Newsletter</h6>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 16 }}>
            Get early access to new drops.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <input type="email" placeholder="your@email.com" style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, padding: '10px 14px',
              color: '#fff', fontSize: 13, outline: 'none',
            }} />
            <button style={{
              background: 'linear-gradient(90deg, #e63946, #ff6b35)',
              border: 'none', borderRadius: 8, padding: '10px',
              color: '#fff', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
            }}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
      }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, margin: 0 }}>
          © 2026 STYLISH. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          {['VISA', 'MC', 'PAYPAL', 'AMEX'].map((pay) => (
            <span key={pay} style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 4, padding: '3px 8px',
              fontSize: 9, fontWeight: 800, letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.4)',
            }}>{pay}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
