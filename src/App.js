
import './App.css';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  const URL = "https://ms-react-express-fs-backend.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About URL={URL} />} />
        <Route path='/projects' element={<Projects URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
