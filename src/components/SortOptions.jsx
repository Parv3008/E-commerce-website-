import React from 'react';

const SortOptions = () => {
  return (
    <div className="sort-options">
      <select>
        <option value="default">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
