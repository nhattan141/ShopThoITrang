import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav-content">
                <Link to="/jew" className="link">
                    Jewelry & Accessories
                </Link>
                <Link to="/clothing" className="link">
                    Clothing & Shoes
                </Link>
                <Link to="/living" className="link">
                    Home & Living
                </Link>
                <Link to="/wedding" className="link">
                    Wedding & Party
                </Link>
                <Link to="/toys" className="link">
                    Toys & Entertainment
                </Link>
                <Link to="/art" className="link">
                    Art & Collectibles
                </Link>
                <Link to="/craft" className="link">
                    Craft Supplies & Tools
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
