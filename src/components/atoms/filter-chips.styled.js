import styled, { css } from 'styled-components';

export const Chip = styled.div`
  margin: 0 1rem 1rem 0;
  padding: 0.5em 0.5em;
  background: ${(props) => props.theme.colors.blue};
  color: white;
  display: inline-block;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 0.9em;

  &::after {
    content: '✕';
    margin-left: 0.5rem;
  }

  ${(props) =>
    props.deleteAll &&
    css`
      background: ${(props) => props.theme.colors.redDarker1};
    `}
`;
