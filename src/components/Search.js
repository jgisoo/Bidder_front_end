import React, { useState } from 'react';

function Search({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for items"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;