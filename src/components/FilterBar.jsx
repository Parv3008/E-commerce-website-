import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <label>
        <input type="checkbox" />
        Men's Clothing
      </label>
      <label>
        <input type="checkbox" />
        Women's Clothing
      </label>
      <label>
        <input type="checkbox" />
        Jewelry
      </label>
    </div>
  );
};

export default FilterBar;
