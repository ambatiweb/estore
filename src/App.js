import { Route, Routes } from 'react-router-dom';
import './App.css';
import CatNav from './components/CatNav';
import TopNav from './components/TopNav';
import LandingPage from './components';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path='/' Component={LandingPage}/>
        <Route path='/productDetails' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
    </div>
  );
}
export default App;
