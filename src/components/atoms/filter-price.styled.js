import styled, { css } from 'styled-components';

export const Container = styled.div`
`;

export const Label = styled.label`
  margin-right: 1em;
`;

export const FilterLabel = styled.span`
  margin: 1em;
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  transition: 0.1s;
  user-select: none;

  &:hover {
    color: currentColor;
  }

  ${(props) =>
    props.isChecked &&
    css`

      font-weight: ${(props) => props.theme.fw.semiBold};
    `}
`;
