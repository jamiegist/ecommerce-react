import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar';
import { Home } from './components/home';
import { Shop } from './components/shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
