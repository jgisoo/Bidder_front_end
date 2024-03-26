import React from 'react';
// import './itemPage.css';

function itemPage() {
    return (
        <>
            {/* Header */}
            <header>
                <div className="logo">Bidder</div>
                <input type="text" placeholder="Search items..." className="search-bar" />
                <nav>
                    <p><a href="#" id="login-button">Log in | Sign up</a></p>
                </nav>
            </header>

            {/* Item Page */}
            <div className="item-page">
                {/* Item Details */}
                <div className="item-details">
                    <h2>Item Title</h2>
                    <img src="caritem.png" alt="Item 1" />
                    <h3>Highest Bid: 30$</h3>
                    <br />
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Current Highest Bid: $100</p>
                    <p>Bid Increment: $10</p>
                    <p>Time Left: 40:25:00</p>
                    <p>Seller: John Doe</p>
                    <p>Type: Dutch Auction</p>
                    {/* Place Bid Section */}
                    <div className="place-bid">
                        <input type="number" placeholder="Enter Bid Amount" />
                        <button>Place Bid</button>
                        <button className="buy">BUY now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default itemPage;
