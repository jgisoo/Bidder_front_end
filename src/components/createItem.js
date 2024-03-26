import React from 'react';
// import './sell.css'; // Import your CSS file

function Createitem() {
    return (
        <>
            {/* Header */}
            <header>
                <div className="logo">Bidder</div>
            </header>

            {/* Main Content */}
            <div className="sell-container">
                <h2>Create Listing</h2>
                <form id="create-listing-form">
                    <input type="text" placeholder="Title" required />
                    <textarea placeholder="Description" required></textarea>
                    <input type="number" placeholder="Price" required />
                    <input type="text" placeholder="Location" required />
                    <input type="text" placeholder="Condition" required />
                    <input type="text" placeholder="Auction Type" required />

                    <button type="submit" id="create">Create Listing</button>
                </form>

                <hr />
                
                <button type="submit" id="update">Update Listing</button>
                <button type="submit" id="delete">Delete Listing</button>
                <a href="itemDetails.html"><button type="submit" id="view">View Listing</button></a>
            </div>
        </>
    );
}

export default Createitem;
