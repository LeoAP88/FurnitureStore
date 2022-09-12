import React from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className='Container_Header-Nav'>
            <Header />
            <NavBar />
          </div>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}


export default App