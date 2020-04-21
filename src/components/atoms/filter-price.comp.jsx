import React, { useState } from 'react';

import { Container, Label, FilterLabel } from './filter-price.styled';

const FilterItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  return <FilterLabel isChecked={isChecked} onClick={() => setIsChecked(!isChecked)} {...props} />;
};

function FilterPrice() {
  return (
    <Container>
      <Label>Chọn mức giá:</Label>
      <FilterItem>Dưới 2 triệu</FilterItem>
      <FilterItem>Từ 2 - 4 triệu</FilterItem>
      <FilterItem>Từ 4 - 7 triệu</FilterItem>
      <FilterItem>Từ 7 - 13 triệu</FilterItem>
      <FilterItem>Trên 13 triệu</FilterItem>
    </Container>
  );
}

export default FilterPrice;
