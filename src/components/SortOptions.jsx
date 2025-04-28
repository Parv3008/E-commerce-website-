import React from 'react';

const SortOptions = () => {
  return (
    <div className="sort-options">
      <select>
        <option value="default">Sort By</option>
        <option value="lowToHigh">Price: Low → High</option>
        <option value="highToLow">Price: High → Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
