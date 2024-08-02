import './navbar.css';

export function NavBar() {
    return (
        <div>
            <header>
                <a href="index.html">
                    Sky Blue Records
                </a>
                <nav className="navbar">
                    <li className="nav-dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Menu
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="index.html">Home</a>
                            <a className="dropdown-item" href="shop.html">Shop</a>
                        </div>
                    </li>
                </nav>
            </header>
        </div>
    );
}