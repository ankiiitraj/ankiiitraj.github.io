import './App.css';
import Intro from './components/intro/Intro';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router } from "react-router-dom";
import ProductSection from './components/product/ProductSection';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
        <Intro />
        <ProductSection />
        <Contact />
    </div>
  );
}

export default App;
