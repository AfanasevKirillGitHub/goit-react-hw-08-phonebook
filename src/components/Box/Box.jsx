import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  borders,
  boxShadow,
  background,
  typography,
} from 'styled-system';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  borders,
  boxShadow,
  background,
  typography
);

export default Box;
