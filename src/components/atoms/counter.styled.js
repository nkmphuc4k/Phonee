import styled, { css } from 'styled-components';

export const Container = styled.div`
  grid-area: button;
  align-self: start;

  border: 1px solid ${(props) => props.theme.colors.greyLight4};
  width: max-content;
  display: flex;
  border-radius: 2px;

  > * {
    width: 2em;
    height: 2em;
    font-size: 1.1em;
    ${(props) => props.theme.mixins.flexCenter}

    &:first-child {
      border-right: 1px solid ${(props) => props.theme.colors.greyLight4};
    }
    &:last-child {
      border-left: 1px solid ${(props) => props.theme.colors.greyLight4};
    }
  }
`;

export const Button = styled.div`
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;

    ${(props) =>
      props.disabled &&
      css`
        color: ${(props) => props.theme.colors.greyLight3};
      `};
`;
