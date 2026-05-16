import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/authContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import Wishlist from './pages/wishlist.jsx'
import { WishlistProvider } from './context/wishlistContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <CartProvider>
    <WishlistProvider>
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </WishlistProvider>
    </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
