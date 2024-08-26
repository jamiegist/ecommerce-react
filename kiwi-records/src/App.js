import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import { Home } from './components/home';
import { Shop } from './components/shop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Home />
        </main>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
