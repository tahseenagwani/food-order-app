import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './pages/Footer';

function App() {
  return (
    
    <div className="App">
      <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </Router>
   
    </div>
      );
}

export default App;
