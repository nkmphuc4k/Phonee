import React from 'react';

import { Chip } from './filter-chips.styled';

const FilterChip = (props) => {
  return <Chip {...props} />;
};

function FilterChips() {
  return (
    <div>
      <FilterChip>OPPO</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip>13 triệu trở lên</FilterChip>
      <FilterChip deleteAll>Xóa tất cả</FilterChip>
    </div>
  );
}

export default FilterChips;
