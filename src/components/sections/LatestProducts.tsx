import ProductCard from '../../component/ProductCard';
import type { CartItem } from '../../pages/CartPage';

interface LatestProductsProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const LatestProducts = ({ onAddToCart }: LatestProductsProps) => {
  const products = [
    { id: 7, image: '/images/card-large-item1.jpg', title: 'Premium Leather Boots', price: '$189.99' },
    { id: 8, image: '/images/card-large-item2.jpg', title: 'Designer Heels', price: '$159.99' },
    { id: 9, image: '/images/card-large-item3.jpg', title: 'Athletic Trainers', price: '$119.99' },
    { id: 10, image: '/images/card-large-item4.jpg', title: 'Vintage Sneakers', price: '$99.99' },
  ];

  return (
    <section className="latest-products py-5">
      <div className="container-lg">
        <h2 className="text-center mb-5">Latest Arrivals</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6 mb-4">
              <ProductCard 
                image={product.image} 
                title={product.title} 
                price={product.price}
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
      </div>
    </section>
  );
};

export default LatestProducts;
