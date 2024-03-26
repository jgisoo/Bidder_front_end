import React from 'react';
// import './purchaseProcess.css'; // Import your CSS file

function PurchaseProcessing() {
    return (
        <>
            {/* Header */}
            <header>
                <div className="logo">Bidding Website</div>
                <input type="text" placeholder="Search items..." className="search-bar" style={{ width: '30%' }} />
                <ul>
                    <p><a href="login_signup" id="login-button">Log in | Sign up</a></p>
                </ul>
            </header>

            {/* Main Content */}
            <div className="purchase-container">
                <h2>Purchase Processing</h2>
                <form action="#" method="post">
                    <h3>Personal Information</h3>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required />
                    <h3>Shipping Information</h3>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" required />
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" required />
                    <label htmlFor="zip">ZIP Code:</label>
                    <input type="text" id="zip" name="zip" required />
                    <h3>Payment Information</h3>
                    <label htmlFor="cardname">Name on Card:</label>
                    <input type="text" id="cardname" name="cardname" required />
                    <label htmlFor="cardnumber">Card Number:</label>
                    <input type="text" id="cardnumber" name="cardnumber" required />
                    <label htmlFor="expdate">Expiration Date:</label>
                    <input type="text" id="expdate" name="expdate" placeholder="MM/YYYY" required />
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" required />
                    <input type="submit" value="Purchase" />
                </form>
            </div>
        </>
    );
}

export default PurchaseProcessing;
