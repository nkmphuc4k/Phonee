import React, { useState } from 'react';
import Select from 'react-select';

import { selectCustomStyles } from './sort-selector.styled';

const options = [
  { value: 'featured-products', label: 'Nổi bật' },
  { value: 'price-ascending', label: 'Giá: Tăng dần' },
  { value: 'price-descending', label: 'Giá: Giảm dần' },
];

function ProductDropdown() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <Select
        options={options}
        styles={selectCustomStyles}
        value={selectedOption}
        onChange={setSelectedOption}
        isSearchable={false}
      />
    </>
  );
}
export default ProductDropdown;
