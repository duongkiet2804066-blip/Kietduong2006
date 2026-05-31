import ProductCard from '../component/ProductCard';
import type { CartItem } from './CartPage';

interface SalePageProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const SalePage = ({ onAddToCart }: SalePageProps) => {
  const products = [
    { id: 401, image: '/images/card-image1.jpg', title: 'Classic Leather Shoes', originalPrice: '$179.99', price: '$129.99', discount: 28 },
    { id: 402, image: '/images/card-image2.jpg', title: 'Running Sneakers', originalPrice: '$119.99', price: '$89.99', discount: 25 },
    { id: 403, image: '/images/card-image3.jpg', title: 'Casual Loafers', originalPrice: '$99.99', price: '$79.99', discount: 20 },
    { id: 404, image: '/images/card-image5.jpg', title: 'Sports Shoes', originalPrice: '$139.99', price: '$109.99', discount: 21 },
    { id: 405, image: '/images/card-image6.jpg', title: 'Formal Oxfords', originalPrice: '$199.99', price: '$149.99', discount: 25 },
    { id: 406, image: '/images/card-large-item1.jpg', title: 'Premium Leather Boots', originalPrice: '$249.99', price: '$189.99', discount: 24 },
    { id: 407, image: '/images/card-large-item2.jpg', title: 'Designer Heels', originalPrice: '$199.99', price: '$159.99', discount: 20 },
    { id: 408, image: '/images/card-large-item3.jpg', title: 'Athletic Trainers', originalPrice: '$149.99', price: '$119.99', discount: 20 },
    { id: 409, image: '/images/card-large-item4.jpg', title: 'Vintage Sneakers', originalPrice: '$129.99', price: '$99.99', discount: 23 },
    { id: 410, image: '/images/card-image1.jpg', title: 'Summer Sandals', originalPrice: '$79.99', price: '$59.99', discount: 25 },
  ];

  return (
    <div className="sale-page" style={{ paddingTop: '40px' }}>
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-12">
            <div className="alert alert-danger d-flex align-items-center" style={{ borderRadius: '12px', background: '#fff3f3', border: '1px solid #ffcccc' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="me-2" style={{ color: '#e63946' }}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
              <div>
                <strong>Limited Time Offer!</strong> Up to 40% off on selected items. Free shipping on orders over $100.
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 900, color: '#e63946' }}>
              Sale
            </h1>
            <p className="text-muted">Don't miss out on these amazing deals!</p>
          </div>
        </div>

        <div className="row">
          {/* Filters Sidebar */}
          <div className="col-lg-3 mb-4">
            <div style={{
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '20px',
              position: 'sticky',
              top: '100px'
            }}>
              <h5 className="mb-3">Filters</h5>
              
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Discount</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">20% - 30%</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">30% - 40%</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">40%+</label>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">Category</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Casual Shoes</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Formal Shoes</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Sneakers</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Boots</label>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">Size</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45'].map(size => (
                    <button
                      key={size}
                      className="btn btn-outline-secondary btn-sm"
                      style={{ width: '36px', height: '36px', padding: 0, fontSize: '12px' }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">Price Range</h6>
                <input type="range" className="form-range" min="0" max="300" />
                <div className="d-flex justify-content-between">
                  <span className="text-muted">$0</span>
                  <span className="text-muted">$300</span>
                </div>
              </div>

              <button className="btn btn-dark w-100">Apply Filters</button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">{products.length} sale items</span>
              <select className="form-select" style={{ width: 'auto' }}>
                <option>Sort by: Biggest Discount</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
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
                    onAddToCart={() => onAddToCart({
                      id: product.id,
                      image: product.image,
                      title: product.title,
                      price: parseFloat(product.price.replace('$', '')),
                      size: '42'
                    })}
                  />
                  <div className="text-center mt-2">
                    <span className="text-muted text-decoration-line-through" style={{ fontSize: '14px' }}>
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Banner */}
            <div className="row mt-5">
              <div className="col-12">
                <div style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
                  borderRadius: '16px',
                  padding: '40px',
                  color: '#fff',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", marginBottom: '16px' }}>
                    Get Extra 10% Off
                  </h3>
                  <p className="mb-4">Subscribe to our newsletter and receive an exclusive discount code</p>
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                        <button className="btn btn-danger" type="button">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;