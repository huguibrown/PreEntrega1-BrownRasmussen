
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Title from './components/Title';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter> 
          <Navbar/>
          <Routes> 
           <Route path='/' element={<ItemListContainer/>}/>
           <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
          
      </BrowserRouter>
      </> 
    </div>
  );
}

export default App;
