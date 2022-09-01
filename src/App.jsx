import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {Header} from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';


function App(props) {
  return (
    <>
      <BrowserRouter>
        <div className='Container_Header-Nav'>
          <Header />
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<ItemListContainer />}  />
          <Route path='/category/:categoryId' element={<ItemListContainer />}  />
          <Route path='/detail' element={<ItemDetailContainer />}  />
          <Route path='/cart' element={<Cart />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App