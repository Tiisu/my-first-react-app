import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShopPage from './pages/ShopPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { CartProvider } from './components/CartContext';
import CartPage from './pages/CartPage'


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route>
      <Route index element={<HomePage />} />,
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<h2 className='font-bold text-4xl ml-4'>404😂🤣😂🤣. <br />
        
        lol🤣 This page does not Exits</h2>} />  
    </Route>
  )
  )

function App() {

  return (
    <CartProvider>
       <RouterProvider router={router}/>
    </CartProvider>
   
  )
}

export default App
