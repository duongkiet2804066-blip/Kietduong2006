import HeroSection from '../components/sections/HeroSection';
import DiscountSection from '../components/sections/DiscountSection';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import CollectionSection from '../components/sections/CollectionSection';
import LatestProducts from '../components/sections/LatestProducts';
import type { CartItem } from './CartPage';

interface HomePageProps {
  onAddToCart: (product: Omit<CartItem, 'quantity'>) => void;
  onNavigate?: (page: string) => void;
}

const HomePage = ({ onAddToCart, onNavigate }: HomePageProps) => (
  <main>
    <HeroSection />
    <DiscountSection onNavigate={onNavigate} />
    <FeaturedProducts onAddToCart={onAddToCart} />
    <CollectionSection />
    <LatestProducts onAddToCart={onAddToCart} />
  </main>
);

export default HomePage;
