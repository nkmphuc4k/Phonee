import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GridContainer = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(5)}
`;

export const Alert = styled.span`
  color: ${(props) => props.theme.colors.red};
`;

export const ViewAll = styled(Link)`
  margin-left: 1em;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    color: currentColor;
  }
`;
