import { useState } from 'react';
import type { CartItem } from '../pages/CartPage';

export interface ProductDetailData {
  id: number;
  image: string;
  title: string;
  price: string;
  badge?: string;
}

interface ProductDetailProps {
  product: ProductDetailData | null;
  onClose: () => void;
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const SIZES = ['36','37','38','39','40','41','42','43','44','45'];

const REVIEWS = [
  { name: 'Minh T.', rating: 5, text: 'Chất lượng tuyệt vời, đúng size, giao hàng nhanh!', date: '12/05/2026' },
  { name: 'Lan N.',  rating: 4, text: 'Giày đẹp, đế êm, mặc rất thoải mái.', date: '08/05/2026' },
  { name: 'Hùng P.', rating: 5, text: 'Sản phẩm y hình, rất hài lòng!', date: '02/05/2026' },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? '#e63946' : 'none'}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProductDetail = ({ product, onClose, onAddToCart }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity]         = useState(1);
  const [wishlisted, setWishlisted]     = useState(false);
  const [addedToCart, setAddedToCart]   = useState(false);
  const [bought, setBought]             = useState(false);
  const [sizeError, setSizeError]       = useState(false);
  const [tab, setTab]                   = useState<'desc' | 'reviews'>('desc');

  if (!product) return null;

  const price = parseFloat(product.price.replace('$', ''));
  const orig  = (price * 1.25).toFixed(2);

  const guard = (cb: () => void) => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    cb();
  };

  const handleCart = () => guard(() => {
    onAddToCart({ id: product.id, image: product.image, title: product.title, price, size: selectedSize });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  });

  const handleBuy = () => guard(() => {
    onAddToCart({ id: product.id, image: product.image, title: product.title, price, size: selectedSize });
    setBought(true);
    setTimeout(() => { setBought(false); onClose(); }, 1200);
  });

  /* ── styles ──────────────────────────────────────────────────── */
  const S = {
    overlay: {
      position: 'fixed' as const, inset: 0, zIndex: 999,
      background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16, animation: 'pdFadeIn .2s ease',
    },
    modal: {
      background: '#111', borderRadius: 24,
      border: '1px solid rgba(255,255,255,0.08)',
      width: '100%', maxWidth: 880, maxHeight: '90vh',
      overflowY: 'auto' as const,
      boxShadow: '0 40px 100px rgba(0,0,0,.85)',
      animation: 'pdSlideUp .3s cubic-bezier(.25,.8,.25,1)',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      position: 'relative' as const,
    },
    closeBtn: {
      position: 'absolute' as const, top: 14, right: 14, zIndex: 10,
      background: 'rgba(255,255,255,.08)', border: 'none',
      borderRadius: '50%', width: 34, height: 34,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', color: '#fff', fontSize: 15, transition: 'background .2s',
    },
  };

  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.modal} onClick={e => e.stopPropagation()}>

        {/* ── close ── */}
        <button style={S.closeBtn} onClick={onClose}
          onMouseEnter={e => (e.currentTarget.style.background = '#e63946')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.08)')}>
          ✕
        </button>

        {/* ── image panel ── */}
        <div style={{ position: 'relative', borderRadius: '24px 0 0 24px', overflow: 'hidden', minHeight: 500, background: '#1a1a1a' }}>
          {product.badge && (
            <span style={{ position: 'absolute', top: 14, left: 14, zIndex: 2,
              background: 'linear-gradient(90deg,#e63946,#ff6b35)', color: '#fff',
              fontSize: 9, fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: 4 }}>
              {product.badge}
            </span>
          )}
          <img src={product.image} alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 500 }} />

          {/* wishlist on image */}
          <button onClick={() => setWishlisted(w => !w)}
            style={{ position: 'absolute', bottom: 16, right: 16,
              background: wishlisted ? '#e63946' : 'rgba(0,0,0,.6)',
              border: wishlisted ? 'none' : '1px solid rgba(255,255,255,.2)',
              borderRadius: '50%', width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all .3s', backdropFilter: 'blur(8px)' }}
            title={wishlisted ? 'Bỏ yêu thích' : 'Yêu thích'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? '#fff' : 'none'}>
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ── info panel ── */}
        <div style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto' }}>

          {/* title + price */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 24, fontWeight: 900,
              color: '#fff', margin: '0 0 10px', lineHeight: 1.25 }}>{product.title}</h2>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 26, fontWeight: 900, color: '#e63946' }}>{product.price}</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,.3)', textDecoration: 'line-through' }}>${orig}</span>
              <span style={{ background: 'rgba(230,57,70,.15)', color: '#e63946',
                fontSize: 11, fontWeight: 700, padding: '2px 7px', borderRadius: 4 }}>-20%</span>
            </div>
          </div>

          {/* stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {[1,2,3,4,5].map(i => <Star key={i} filled={i <= 4} />)}
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginLeft: 4 }}>4.0 (128 đánh giá)</span>
          </div>

          {/* size picker */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '.1em', textTransform: 'uppercase' }}>Chọn size</span>
              {selectedSize && <span style={{ fontSize: 12, color: '#e63946', fontWeight: 600 }}>Size {selectedSize}</span>}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
              {SIZES.map(s => (
                <button key={s} onClick={() => { setSelectedSize(s); setSizeError(false); }}
                  style={{ width: 42, height: 42, borderRadius: 8, cursor: 'pointer',
                    border: selectedSize === s ? '2px solid #e63946' : sizeError ? '1px solid rgba(230,57,70,.5)' : '1px solid rgba(255,255,255,.12)',
                    background: selectedSize === s ? 'rgba(230,57,70,.15)' : 'transparent',
                    color: selectedSize === s ? '#e63946' : 'rgba(255,255,255,.7)',
                    fontSize: 12, fontWeight: 700, transition: 'all .2s' }}>
                  {s}
                </button>
              ))}
            </div>
            {sizeError && <p style={{ color: '#e63946', fontSize: 11, marginTop: 5, fontWeight: 600 }}>⚠ Vui lòng chọn size</p>}
          </div>

          {/* quantity */}
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Số lượng</span>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,.05)',
              borderRadius: 10, width: 'fit-content', border: '1px solid rgba(255,255,255,.1)', overflow: 'hidden' }}>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
                style={{ width: 38, height: 38, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18 }}>−</button>
              <span style={{ width: 42, textAlign: 'center', fontSize: 14, fontWeight: 700, color: '#fff',
                borderLeft: '1px solid rgba(255,255,255,.1)', borderRight: '1px solid rgba(255,255,255,.1)', lineHeight: '38px' }}>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}
                style={{ width: 38, height: 38, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 18 }}>+</button>
            </div>
          </div>

          {/* action buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Buy */}
            <button onClick={handleBuy} style={{ padding: '13px', borderRadius: 12, border: 'none', cursor: 'pointer',
              background: bought ? 'linear-gradient(90deg,#22c55e,#16a34a)' : 'linear-gradient(90deg,#e63946,#ff6b35)',
              color: '#fff', fontSize: 13, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all .3s',
              boxShadow: bought ? '0 6px 20px rgba(34,197,94,.3)' : '0 6px 20px rgba(230,57,70,.3)' }}>
              {bought
                ? <><CheckIcon /> Đặt hàng thành công!</>
                : <><ArrowIcon /> Mua ngay</>}
            </button>
            {/* Add to cart */}
            <button onClick={handleCart} style={{ padding: '13px', borderRadius: 12, cursor: 'pointer',
              background: addedToCart ? 'rgba(34,197,94,.12)' : 'rgba(255,255,255,.06)',
              border: addedToCart ? '1px solid #22c55e' : '1px solid rgba(255,255,255,.12)',
              color: addedToCart ? '#22c55e' : '#fff', fontSize: 13, fontWeight: 800,
              letterSpacing: '.1em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all .3s' }}>
              {addedToCart
                ? <><CheckIcon /> Đã thêm vào giỏ!</>
                : <><CartIcon /> Thêm vào giỏ hàng</>}
            </button>
            {/* Wishlist */}
            <button onClick={() => setWishlisted(w => !w)} style={{ padding: '11px', borderRadius: 12, cursor: 'pointer',
              background: wishlisted ? 'rgba(230,57,70,.1)' : 'transparent',
              border: wishlisted ? '1px solid rgba(230,57,70,.4)' : '1px solid rgba(255,255,255,.08)',
              color: wishlisted ? '#e63946' : 'rgba(255,255,255,.5)', fontSize: 12, fontWeight: 700,
              letterSpacing: '.08em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'all .3s' }}>
              <HeartIcon filled={wishlisted} />
              {wishlisted ? 'Đã thêm yêu thích' : 'Thêm vào yêu thích'}
            </button>
          </div>

          {/* tabs */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 16 }}>
            <div style={{ display: 'flex', gap: 0, marginBottom: 14, background: 'rgba(255,255,255,.04)', borderRadius: 10, padding: 4 }}>
              {(['desc','reviews'] as const).map(t => (
                <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '7px',
                  background: tab === t ? 'rgba(255,255,255,.1)' : 'transparent',
                  border: 'none', borderRadius: 8, cursor: 'pointer', transition: 'all .2s',
                  color: tab === t ? '#fff' : 'rgba(255,255,255,.4)',
                  fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  {t === 'desc' ? 'Mô tả' : 'Đánh giá (3)'}
                </button>
              ))}
            </div>

            {tab === 'desc' ? (
              <div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, marginBottom: 10 }}>
                  Sản phẩm được làm từ chất liệu cao cấp, thiết kế hiện đại phù hợp mọi phong cách. Đế giày êm ái, hỗ trợ vận động suốt cả ngày.
                </p>
                <ul style={{ paddingLeft: 16, margin: 0 }}>
                  {['Chất liệu cao cấp, bền bỉ','Đế cao su chống trượt','Thiết kế thoáng khí','Đổi size miễn phí trong 30 ngày'].map(i => (
                    <li key={i} style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 5, lineHeight: 1.7 }}>{i}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {REVIEWS.map((r, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,.03)', borderRadius: 10,
                    padding: '10px 12px', border: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{r.name}</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,.3)' }}>{r.date}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 3, marginBottom: 5 }}>
                      {[1,2,3,4,5].map(s => <Star key={s} filled={s <= r.rating} />)}
                    </div>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', margin: 0 }}>{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <style>{`
          @keyframes pdFadeIn  { from{opacity:0} to{opacity:1} }
          @keyframes pdSlideUp { from{opacity:0;transform:translateY(28px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
          @media(max-width:640px){
            div[style*="gridTemplateColumns"]{grid-template-columns:1fr!important}
            div[style*="borderRadius: '24px 0 0 24px'"]{border-radius:24px 24px 0 0!important;min-height:260px!important}
            img[style*="minHeight: 500"]{min-height:260px!important}
          }
        `}</style>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const CartIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ProductDetail;
