import './home.css';
import img from '../images/homepage.jpg';
import Link from 'react-dom';
import { useState } from 'react';

export function Home() {
    return (
        <div className='home-container'>
            <h1>L'Eau Clothing</h1>
            <img className='home-img' src={img} alt="" />

            <button className='shop-button'>Shop Now</button>
        </div>
    );
}