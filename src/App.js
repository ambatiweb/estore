import './App.css';
import CatNav from './components/CatNav';
import MainComponent from './components/MainComponent';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}
export default App;
