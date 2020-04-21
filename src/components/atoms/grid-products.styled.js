import styled from 'styled-components';

export const GridContainer = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(5)}
  background: ${(props) => props.theme.colors.greyLight1};
  grid-gap: 1px;
  border: 1px solid ${(props) => props.theme.colors.greyLight1};
  margin: 3em auto;
`;
