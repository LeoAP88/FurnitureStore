import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';

function App(props) {
  return (
    <>
      <div className='Container_Header-Nav'>
        <Header />
        <NavBar />
      </div>
      <ItemListContainer />
    </>
  );
}

export default App;
