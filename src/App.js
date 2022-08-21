import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App(props) {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Future items list container'}/>
    </>
  );
}

export default App;
