import './home.css';
import img from '../images/kiwi.jpeg';
import Link from 'react-dom';

export function Home() {
    return (
        <div className="home-container container-fluid text-center col-3 mt-4">
            <h1>Welcome to Kiwi Records!</h1>
            <img className="home-img" src={img} alt="" />

            <h2>You're so close to your new favorite record!</h2>
        </div>
    );
}