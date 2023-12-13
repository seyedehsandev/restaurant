import './App.css';
import About from './component/About';
import Dishes from './component/Dishes';
import Footer from './component/Footer';
import Header from './component/Header';
import Menu from './component/Menu';
import Navbar from "./component/Navbar"
import Review from './component/Review';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Dishes/>
      <About />
      <Menu/>
      <Review/>
      <Footer />
    </div>
  );
}

export default App;
