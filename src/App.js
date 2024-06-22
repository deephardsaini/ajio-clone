import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
