import { useDispatch, useSelector } from 'react-redux';
import { filtration } from 'redux/filter/filterSlice';

import { FilterLabel, FilterInput, FilterText } from './Filter.styled';
import { MdFindInPage } from 'react-icons/md';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);

  const filterOnChange = event => dispatch(filtration(event.target.value));

  return (
    <FilterLabel>
      <FilterText>
        <MdFindInPage size={30} /> Find contacts by name
      </FilterText>
      <FilterInput
        placeholder="Please enter name..."
        type="text"
        value={filter}
        onChange={filterOnChange}
      />
    </FilterLabel>
  );
};
