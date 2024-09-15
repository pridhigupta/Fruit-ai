import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Fruit.Ai</h1>
            <p className="tagline">"Be Healthy!"</p>
            
            <div className="grid-container">
                <Link to="/chatbot" className="grid-item chat">Chat.</Link>
                <Link to="/translator" className="grid-item translate">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1024px-Google_Translate_logo.svg.png" alt="Translate" className="icon"/>
                </Link>
                <Link to="/faq" className="grid-item faqs">FAQs</Link>
                <Link to="/about" className="grid-item about">About</Link>
            </div>

            <div className="dots-container">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}

export default Home;
