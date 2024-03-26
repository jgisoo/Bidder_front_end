import React from 'react';

function ItemDetails({ item }) {
  return (
    <div>
      <h2>Item Details</h2>
      <p>Title: {item.title}</p>
      <p>Description: {item.description}</p>
      <p>Starting Price: {item.startingPrice}</p>
      <p>Duration: {item.duration}</p>
    </div>
  );
}

export default ItemDetails;