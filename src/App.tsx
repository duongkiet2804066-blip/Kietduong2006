import { useState, useCallback } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import HomePage from './pages/HomePage'
import MenPage from './pages/MenPage'
import WomenPage from './pages/WomenPage'
import ShopPage from './pages/ShopPage'
import SalePage from './pages/SalePage'
import DiscountPage from './pages/DiscountPage'
import LoginPage from './pages/LoginPage'
import CartPage, { type CartItem } from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import './App.css'

type Page = 'home' | 'men' | 'women' | 'shop' | 'sale' | 'discount' | 'login' | 'cart' | 'checkout'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [user, setUser] = useState<{ email: string } | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleLogin = useCallback((email: string) => {
    setUser({ email })
    setCurrentPage('home')
  }, [])

  const handleLogout = useCallback(() => {
    setUser(null)
  }, [])

  const addToCart = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id))
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, quantity } : item))
      )
    }
  }, [])

  const removeItem = useCallback((id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleCheckout = useCallback(() => {
    if (!user) {
      setCurrentPage('login')
    } else {
      setCurrentPage('checkout')
    }
  }, [user])

  const handleOrderComplete = useCallback(() => {
    clearCart()
    setCurrentPage('home')
  }, [clearCart])

  const handleNavigation = useCallback((page: Page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <LoginPage
            onLogin={handleLogin}
            onClose={() => setCurrentPage('home')}
          />
        )
      case 'cart':
        return (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
            onCheckout={() => {
              if (!user) {
                setCurrentPage('login')
              } else {
                setCurrentPage('checkout')
              }
            }}
            onClose={() => setCurrentPage('home')}
          />
        )
      case 'checkout':
        return (
          <CheckoutPage
            cartItems={cartItems}
            user={user}
            onBack={() => setCurrentPage('cart')}
            onOrderComplete={handleOrderComplete}
          />
        )
      case 'men':
        return <MenPage onAddToCart={addToCart} />
      case 'women':
        return <WomenPage onAddToCart={addToCart} />
      case 'shop':
        return <ShopPage onAddToCart={addToCart} />
      case 'sale':
        return <SalePage onAddToCart={addToCart} />
      case 'discount':
        return <DiscountPage />
      case 'home':
      default:
        return <HomePage onAddToCart={addToCart} onNavigate={handleNavigation} />
    }
  }

  return (
    <div className="App">
      <Header
        cartCount={cartCount}
        user={user}
        onLogout={handleLogout}
        onCartOpen={() => setCurrentPage('cart')}
        onLoginClick={() => setCurrentPage('login')}
        onNavigate={handleNavigation}
        currentPage={currentPage}
      />
      
      <main>
        {renderPage()}
      </main>

      {currentPage !== 'checkout' && currentPage !== 'login' && currentPage !== 'cart' && currentPage !== 'discount' && <Footer />}
    </div>
  )
}

export default App