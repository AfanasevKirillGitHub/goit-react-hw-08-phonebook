import PropTypes from 'prop-types';
import { FilterLabel, FilterInput, FilterText } from './Filter.styled';
import { MdFindInPage } from 'react-icons/md';

export const Filter = ({ value, filterOnChange }) => {
  return (
    <FilterLabel>
      <FilterText>
        <MdFindInPage /> Find contacts by name
      </FilterText>
      <FilterInput type="text" value={value} onChange={filterOnChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterOnChange: PropTypes.func.isRequired,
};
