import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.mixins.gridDivideIntoColumns(8)}
  user-select: none;
`;

export const ImageContainer = styled.div`
  ${(props) => props.theme.mixins.imageFrame}
  padding: 0.5em 1em;
  border: 1px solid ${(props) => props.theme.colors.greyLight1};
  cursor: pointer;
  position: relative;
  margin: -1px -1px 0 0;
  min-height: 4rem;

  img {
    /* prevent dragging ghost image: https://stackoverflow.com/a/48828721/9787887 */
    pointer-events: none;
  }

  ${(props) =>
    props.isChecked &&
    css`
    
      border-color: ${props.theme.colors.blue};
      z-index: 1;

      &::before {
        content: '✓';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        line-height: 1;
        color: white;
      }

      &::after {
        /* how to draw triangle top left: https://css-tricks.com/the-shapes-of-css/ */
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-top: 2rem solid ${(props) => props.theme.colors.blue};
        border-right: 2.3rem solid #0000;
        z-index: 2;
      }
    `}
`;
