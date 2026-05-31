import ProductCard from '../component/ProductCard';
import type { CartItem } from './CartPage';

interface SalePageProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const SalePage = ({ onAddToCart }: SalePageProps) => {
  const products = [
    { id: 401, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', title: 'Classic Leather Shoes', originalPrice: '$179.99', price: '$129.99', discount: 28 },
    { id: 402, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80', title: 'Running Sneakers', originalPrice: '$119.99', price: '$89.99', discount: 25 },
    { id: 403, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80', title: 'Casual Loafers', originalPrice: '$99.99', price: '$79.99', discount: 20 },
    { id: 404, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80', title: 'Sports Shoes', originalPrice: '$139.99', price: '$109.99', discount: 21 },
    { id: 405, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80', title: 'Women Sneakers', originalPrice: '$199.99', price: '$149.99', discount: 25 },
    { id: 406, image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80', title: 'Premium Leather Boots', originalPrice: '$249.99', price: '$189.99', discount: 24 },
    { id: 407, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&q=80', title: 'Sporty Runners', originalPrice: '$199.99', price: '$159.99', discount: 20 },
    { id: 408, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80', title: 'Athletic Trainers', originalPrice: '$149.99', price: '$119.99', discount: 20 },
    { id: 409, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80', title: 'Vintage Sneakers', originalPrice: '$129.99', price: '$99.99', discount: 23 },
    { id: 410, image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&q=80', title: 'Summer Sneakers', originalPrice: '$79.99', price: '$59.99', discount: 25 },
  ];

  return (
    <div className="sale-page" style={{ paddingTop: '40px' }}>
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-12">
            <div className="alert alert-danger d-flex align-items-center" style={{ borderRadius: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="me-2" style={{ color: '#e63946' }}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
              <div><strong>Limited Time Offer!</strong> Up to 40% off on selected items. Free shipping on orders over $100.</div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 900, color: '#e63946' }}>Sale</h1>
            <p className="text-muted">Don't miss out on these amazing deals!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 mb-4">
            <div style={{ background: '#111', borderRadius: '12px', padding: '20px', position: 'sticky', top: '100px' }}>
              <h5 className="mb-3">Filters</h5>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Discount</h6>
                {[['20% - 30%', true],['30% - 40%', true],['40%+', false]].map(([label, checked]) => (
                  <div className="form-check" key={label as string}><input className="form-check-input" type="checkbox" defaultChecked={checked as boolean} /><label className="form-check-label">{label as string}</label></div>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Category</h6>
                {['Casual Shoes','Formal Shoes','Sneakers','Boots'].map(c => (
                  <div className="form-check" key={c}><input className="form-check-input" type="checkbox" defaultChecked /><label className="form-check-label">{c}</label></div>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Size</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['35','36','37','38','39','40','41','42','43','44','45'].map(size => (
                    <button key={size} className="btn btn-outline-secondary btn-sm" style={{ width: '36px', height: '36px', padding: 0, fontSize: '12px' }}>{size}</button>
                  ))}
                </div>
              </div>
              <button className="btn btn-dark w-100">Apply Filters</button>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">{products.length} sale items</span>
              <select className="form-select" style={{ width: 'auto' }}>
                <option>Sort by: Biggest Discount</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    badge={`-${product.discount}%`}
                    onAddToCart={() => onAddToCart({ id: product.id, image: product.image, title: product.title, price: parseFloat(product.price.replace('$', '')), size: '42' })}
                  />
                  <div className="text-center mt-2">
                    <span className="text-muted text-decoration-line-through" style={{ fontSize: '14px' }}>{product.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;
