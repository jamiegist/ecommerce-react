import './navbar.css';

export function NavBar() {
    return (
        <div>
            <header>
                <a href="index.html">
                    Sky Blue Records
                </a>
                <nav class="navbar">
                    <li class="nav-dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Menu
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="index.html">Home</a>
                            <a class="dropdown-item" href="shop.html">Shop</a>
                        </div>
                    </li>
                </nav>
            </header>
        </div>
    );
}