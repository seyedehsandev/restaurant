import './App.css';
import About from './component/About';
import Dishes from './component/Dishes';
import Header from './component/Header';
import Menu from './component/Menu';
import Navbar from "./component/Navbar"
import Review from './component/Review';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Dishes/>
      <About />
      <Menu/>
      <Review/>
    </div>
  );
}

export default App;
