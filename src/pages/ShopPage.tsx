import ProductCard from '../component/ProductCard';
import type { CartItem } from './CartPage';

interface ShopPageProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const ShopPage = ({ onAddToCart }: ShopPageProps) => {
  const products = [
    { id: 301, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', title: 'Classic Leather Shoes', price: '$129.99', category: 'Men' },
    { id: 302, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80', title: 'Designer Sneakers', price: '$159.99', category: 'Women' },
    { id: 303, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80', title: 'Running Sneakers', price: '$89.99', category: 'Men' },
    { id: 304, image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80', title: 'Casual Loafers', price: '$79.99', category: 'Men' },
    { id: 305, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80', title: 'Sports Shoes', price: '$109.99', category: 'Unisex' },
    { id: 306, image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&q=80', title: 'Formal Oxfords', price: '$149.99', category: 'Men' },
    { id: 307, image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&q=80', title: 'Premium Leather Boots', price: '$189.99', category: 'Men' },
    { id: 308, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80', title: 'Athletic Trainers', price: '$119.99', category: 'Unisex' },
    { id: 309, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80', title: 'Vintage Sneakers', price: '$99.99', category: 'Women' },
    { id: 310, image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&q=80', title: 'Summer Sneakers', price: '$59.99', category: 'Women' },
    { id: 311, image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&q=80', title: 'Sporty Runners', price: '$129.99', category: 'Women' },
    { id: 312, image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=600&q=80', title: 'Casual Flats', price: '$79.99', category: 'Women' },
  ];

  const categories = ['All', 'Men', 'Women', 'Unisex'];

  return (
    <div className="shop-page" style={{ paddingTop: '40px' }}>
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-12">
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', fontWeight: 900 }}>Shop All</h1>
            <p className="text-muted">Browse our complete collection of footwear</p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button key={cat} className="btn btn-outline-dark rounded-pill px-4" style={{ fontWeight: 600, letterSpacing: '0.03em' }}>{cat}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 mb-4">
            <div style={{ background: '#111', borderRadius: '12px', padding: '20px', position: 'sticky', top: '100px' }}>
              <h5 className="mb-3">Filters</h5>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Category</h6>
                {['Casual Shoes','Formal Shoes','Sneakers','Boots','Sandals'].map(c => (
                  <div className="form-check" key={c}><input className="form-check-input" type="checkbox" defaultChecked /><label className="form-check-label">{c}</label></div>
                ))}
              </div>
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Gender</h6>
                {['Men','Women','Unisex'].map(g => (
                  <div className="form-check" key={g}><input className="form-check-input" type="checkbox" defaultChecked /><label className="form-check-label">{g}</label></div>
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
              <div className="mb-4">
                <h6 className="fw-bold mb-2">Price Range</h6>
                <input type="range" className="form-range" min="0" max="300" />
                <div className="d-flex justify-content-between"><span className="text-muted">$0</span><span className="text-muted">$300</span></div>
              </div>
              <button className="btn btn-dark w-100">Apply Filters</button>
            </div>
          </div>

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
                    onAddToCart={() => onAddToCart({ id: product.id, image: product.image, title: product.title, price: parseFloat(product.price.replace('$', '')), size: '42' })}
                  />
                </div>
              ))}
            </div>
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
