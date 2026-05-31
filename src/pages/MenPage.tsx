import ProductCard from '../component/ProductCard';
import type { CartItem } from './CartPage';

interface MenPageProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const MenPage = ({ onAddToCart }: MenPageProps) => {
  const products = [
    { id: 101, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', title: "Men's Classic Leather Shoes", price: '$149.99' },
    { id: 102, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80', title: "Men's Running Sneakers", price: '$119.99' },
    { id: 103, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80', title: "Men's Casual Loafers", price: '$99.99' },
    { id: 104, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&q=80', title: "Men's Sports Shoes", price: '$129.99' },
    { id: 105, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80', title: "Men's Formal Oxfords", price: '$179.99' },
    { id: 106, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80', title: "Men's Leather Boots", price: '$189.99' },
    { id: 107, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80', title: "Men's Athletic Trainers", price: '$139.99' },
    { id: 108, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80', title: "Men's Vintage Sneakers", price: '$109.99' },
  ];

  return (
    <div className="men-page" style={{ paddingTop: '40px' }}>
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-12">
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 900 }}>
              Men's Collection
            </h1>
            <p className="text-muted">Discover our premium collection of men's footwear</p>
          </div>
        </div>

        <div className="row">
          {/* Filters Sidebar */}
          <div className="col-lg-3 mb-4">
            <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', position: 'sticky', top: '100px' }}>
              <h5 className="mb-3">Filters</h5>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Category</h6>
                {['Casual Shoes','Formal Shoes','Sneakers','Boots'].map(c => (
                  <div className="form-check" key={c}>
                    <input className="form-check-input" type="checkbox" defaultChecked />
                    <label className="form-check-label">{c}</label>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Size</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['39','40','41','42','43','44','45'].map(size => (
                    <button key={size} className="btn btn-outline-secondary btn-sm" style={{ width: '40px', height: '40px', padding: 0 }}>{size}</button>
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
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    onAddToCart={() => onAddToCart({ id: product.id, image: product.image, title: product.title, price: parseFloat(product.price.replace('$', '')), size: '42' })}
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

export default MenPage;
