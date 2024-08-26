import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
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
    );
}