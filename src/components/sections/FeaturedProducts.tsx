import ProductCard from '../../component/ProductCard';
import type { CartItem } from '../../pages/CartPage';

interface FeaturedProductsProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const FeaturedProducts = ({ onAddToCart }: FeaturedProductsProps) => {
  const products = [
    { id: 1, image: '/images/card-image1.jpg', title: 'Classic Leather Shoes', price: '$129.99' },
    { id: 2, image: '/images/card-image2.jpg', title: 'Running Sneakers', price: '$89.99' },
    { id: 3, image: '/images/card-image3.jpg', title: 'Casual Loafers', price: '$79.99' },
    { id: 4, image: '/images/card-image5.jpg', title: 'Sports Shoes', price: '$109.99' },
    { id: 5, image: '/images/card-image6.jpg', title: 'Formal Oxfords', price: '$149.99' },
    { id: 6, image: '/images/card-image1.jpg', title: 'Summer Sandals', price: '$59.99' },
  ];

  return (
    <section className="featured-products py-5">
      <div className="container-lg">
        <h2 className="text-center mb-5">Featured Products</h2>
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

export default FeaturedProducts;
