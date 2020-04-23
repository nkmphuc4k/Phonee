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

export const ViewMore = styled.button`
  margin: 2em auto;
  padding: 1em 2em;
  border: 1px solid ${(props) => props.theme.colors.greyLight1};
  background: white;
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fw.normal};
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  display: flex;
  align-items: center;

  ion-icon {
    margin-left: 0.3rem;
  }

  &:hover {
    color: white;
    background: ${(props) => props.theme.colors.blue};
  }
`;
