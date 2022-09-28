
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <ItemListContainer texto='No encajes, rompe con el molde'/>  
      </> 
    </div>
  );
}

export default App;
