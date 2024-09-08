import './home.css';
import img from '../images/homepage.jpg';
import Link from 'react-dom';

export function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Vetements!</h1>
            <img className="home-img" src={img} alt="" />

            <h2>Shop Now</h2>
        </div>
    );
}