
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Pages from './Components/Pages';
import About from './Components/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Pages/>} />
        <Route path="/" element={<About/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
