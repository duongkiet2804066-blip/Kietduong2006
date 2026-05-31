import ProductCard from '../component/ProductCard';
import type { CartItem } from './CartPage';

interface ShopPageProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const ShopPage = ({ onAddToCart }: ShopPageProps) => {
  const products = [
    { id: 301, image: '/images/card-image1.jpg', title: 'Classic Leather Shoes', price: '$129.99', category: 'Men' },
    { id: 302, image: '/images/card-large-item2.jpg', title: 'Designer Heels', price: '$159.99', category: 'Women' },
    { id: 303, image: '/images/card-image2.jpg', title: 'Running Sneakers', price: '$89.99', category: 'Men' },
    { id: 304, image: '/images/card-image3.jpg', title: 'Casual Loafers', price: '$79.99', category: 'Men' },
    { id: 305, image: '/images/card-image5.jpg', title: 'Sports Shoes', price: '$109.99', category: 'Unisex' },
    { id: 306, image: '/images/card-image6.jpg', title: 'Formal Oxfords', price: '$149.99', category: 'Men' },
    { id: 307, image: '/images/card-large-item1.jpg', title: 'Premium Leather Boots', price: '$189.99', category: 'Men' },
    { id: 308, image: '/images/card-large-item3.jpg', title: 'Athletic Trainers', price: '$119.99', category: 'Unisex' },
    { id: 309, image: '/images/card-large-item4.jpg', title: 'Vintage Sneakers', price: '$99.99', category: 'Women' },
    { id: 310, image: '/images/card-image1.jpg', title: 'Summer Sandals', price: '$59.99', category: 'Women' },
    { id: 311, image: '/images/card-image2.jpg', title: 'Elegant Pumps', price: '$129.99', category: 'Women' },
    { id: 312, image: '/images/card-image3.jpg', title: 'Casual Flats', price: '$79.99', category: 'Women' },
  ];

  const categories = ['All', 'Men', 'Women', 'Unisex'];

  return (
    <div className="shop-page" style={{ paddingTop: '40px' }}>
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-12">
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 900 }}>
              Shop All
            </h1>
            <p className="text-muted">Browse our complete collection of footwear</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="btn btn-outline-dark rounded-pill px-4"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
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
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Sandals</label>
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">Gender</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Men</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Women</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Unisex</label>
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
              <span className="text-muted">{products.length} products</span>
              <select className="form-select" style={{ width: 'auto' }}>
                <option>Sort by: Featured</option>
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
                    badge={product.category}
                    onAddToCart={() => onAddToCart({
                      id: product.id,
                      image: product.image,
                      title: product.title,
                      price: parseFloat(product.price.replace('$', '')),
                      size: '42'
                    })}
                  />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;