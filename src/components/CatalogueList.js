import React from 'react';
import './catalogue.css';
import logo from './icon.png';



function Catalogue() {
    return (
        <div className="container">
            {/* Header */}
            <header>
                <div className="logo">Bidder</div>
                <img src={logo} width={100} height={100} 
       alt="description"/>
                
                <input type="text" placeholder="Search items..." className="search-bar"   />
                <nav>
                    {/* Catalogue */}
                </nav>
                <ul>
                    <p><div id="login-button">Log in | Sign up</div></p>
                </ul>
            </header>

            {/* Catalogue Page */}
            <div className="catalogue-page">
                {/* Filters */}
                <aside className="filters">
                    <h2>Filters</h2>
                    <select name="category" id="category">
                        <option value="">All Categories</option>
                        <option value="">Vehicle</option>
                        <option value="">Furniture</option>
                        <option value="">House</option>
                        <option value="">Electronics</option>
                    </select>
                    <input type="range" min="0" max="1000" step="50" value="500" id="price-range" />
                    <label htmlFor="price-range">Price</label>
                    <div>                
                        <button>Apply</button>
                    </div>
                </aside>

            </div>

            <div className="items-list">
                <h2>Available Items</h2>
                <div className="item">
                    <div>
                    {/* <img src={carImage} /> */}
                    <h3>Item Title 1</h3>
                    <p>Current Highest Bid: $70</p>
                    <p>Time Left: 1 hour</p>
                    </div>
                    <div>
                    <button>Select Item</button>
                    </div> 
                </div>
                
            </div>

            <div className="items-list">
                <div className="item">
                <div>

                    {/* <img src={bikeImage} alt="Item 2" /> */}
                    <h3>Item Title 2</h3>
                    <p>Current Highest Bid: $80</p>
                    <p>Time Left: 1 day</p>
                    </div>
                    <button>Select Item</button>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Terms and Conditions</li>
                    <li>Social Media</li>
                </ul>
            </footer>
        </div>
    );
}

export default Catalogue;
