import ProductCard from '../component/ProductCard';
import type { CartItem } from './CartPage';

interface WomenPageProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const WomenPage = ({ onAddToCart }: WomenPageProps) => {
  const products = [
    { id: 201, image: '/sneaker-nu/nike-dunk-low-rose-whisper-dd1503-118-release-date-7_0eef9b89047f491691508f1f3dc6d58f_2048x2048.jpg', title: "Nike Dunk Low Rose Whisper", price: '$159.99' },
    { id: 202, image: '/sneaker-nu/20722234745-giay-Nike-Air-Force-1-Shadow-chinh-hang.jpg', title: "Nike Air Force 1 Shadow", price: '$149.99' },
    { id: 203, image: '/sneaker-nu/nike-air-max-270-white-black-ah8050-100-1_1-430x430.jpg', title: "Nike Air Max 270 White Black", price: '$139.99' },
    { id: 204, image: '/sneaker-nu/CW7358-600-c.jpg', title: "Nike Court Vision Low", price: '$119.99' },
    { id: 205, image: '/sneaker-nu/Giay-Nike-Court-Air-Zoom-Vapor-Pro-2-HC-Sundial-DR6192-700.jpg', title: "Nike Air Zoom Vapor Pro 2", price: '$129.99' },
    { id: 206, image: '/sneaker-nu/giay-nike-vapor-pro-3-nu-trang-nau-01-800x800.jpg', title: "Nike Vapor Pro 3 Brown", price: '$134.99' },
    { id: 207, image: '/sneaker-nu/IMG_6316.jpeg', title: "Nike Classic Sneaker", price: '$109.99' },
    { id: 208, image: '/sneaker-nu/TEST150-6.jpg', title: "Nike Sport Runner", price: '$124.99' },
  ];

  return (
    <div className="women-page" style={{ paddingTop: '40px' }}>
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-12">
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 900 }}>
              Women's Collection
            </h1>
            <p className="text-muted">Explore our elegant collection of women's footwear</p>
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
                  <label className="form-check-label">Heels</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Flats</label>
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
                <h6 className="fw-bold mb-2">Size</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['35', '36', '37', '38', '39', '40', '41'].map(size => (
                    <button
                      key={size}
                      className="btn btn-outline-secondary btn-sm"
                      style={{ width: '40px', height: '40px', padding: 0 }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold mb-2">Heel Height</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Flat (0-1cm)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Low (2-4cm)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">Medium (5-7cm)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">High (8cm+)</label>
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
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    onAddToCart={() => onAddToCart({
                      id: product.id,
                      image: product.image,
                      title: product.title,
                      price: parseFloat(product.price.replace('$', '')),
                      size: '37'
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenPage;