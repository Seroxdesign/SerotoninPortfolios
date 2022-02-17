import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/index'
import About from './pages/About/index'
import Login from './pages/Login/index'
import Portfolio from './pages/Portfolio/index'
import Shop from './pages/Shop/index'
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
