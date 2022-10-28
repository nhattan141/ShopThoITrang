import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav-content">
                <Link to="/home/jew" className="link">
                    Jewelry & Accessories
                </Link>
                <Link to="/home/clothing" className="link">
                    Clothing & Shoes
                </Link>
                <Link to="/home/living" className="link">
                    Home & Living
                </Link>
                <Link to="/home/wedding" className="link">
                    Wedding & Party
                </Link>
                <Link to="/home/toys" className="link">
                    Toys & Entertainment
                </Link>
                <Link to="/home/art" className="link">
                    Art & Collectibles
                </Link>
                <Link to="/home/craft" className="link">
                    Craft Supplies & Tools
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
