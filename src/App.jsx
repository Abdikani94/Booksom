import './App.css';
import Routers from './AllRouters/Routers';
import { CartProvider } from "./Components/Context/CartContext";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  // Dark mode control
  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <>
      <CartProvider>
        <Header />
        <Routers />
        <Footer />
       <Toaster position="top-right" />
      </CartProvider>

      {/* Add this below everything to enable toast notifications */}
      <Toaster position="top-right" toastOptions={{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }} />
    </>
  );
}

export default App;
