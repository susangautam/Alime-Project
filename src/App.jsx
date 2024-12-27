
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Pages from './Components/Pages';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Pages/>} />
        <Route path="/" element={<About/>} />
        <Route path="/" element={<Footer/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
