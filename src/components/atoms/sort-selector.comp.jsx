import React from 'react';
import Select from 'react-select';

import { useSelector, useDispatch } from 'react-redux';
import { sorting } from '../../redux/product-filter-sorting/data';
import { selectSorting } from '../../redux/product-filter-sorting/selectors';
import { setSorting } from '../../redux/product-filter-sorting/actions';

import { selectCustomStyles } from './sort-selector.styled';

function ProductDropdown() {
  const selectedSorting = useSelector(selectSorting);
  const dispatch = useDispatch();

  return (
    <Select
      options={sorting}
      styles={selectCustomStyles}
      value={selectedSorting}
      onChange={(payload) => dispatch(setSorting(payload))}
      isSearchable={false}
    />
  );
}
export default ProductDropdown;
