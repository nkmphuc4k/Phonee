import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  z-index: 30;
  top: 110%;
  width: 150%;
  background: ${(props) => props.theme.colors.white};
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.greyLight3};
`;

export const Item = styled(Link)`
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.greyLight3};
  }

  &:hover {
    background: ${(props) => props.theme.colors.greyLight5};
  }
  
  color: ${(props) => props.theme.styles.colorText};
  padding: 0.5em;
  padding-right: 2em;
  font-size: 0.95em;
  text-align: left;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 0.5em;
  grid-template-areas:
    'image name'
    'image price';
`;
export const ImageContainer = styled.div`
  grid-area: image;
  width: 5em;
  height: 5em;
  ${(props) => props.theme.mixins.imageFrame}
  transition: transform 0.2s;
`;

export const Name = styled.p`
  font-weight: ${(props) => props.theme.fw.semiBold};
`;

export const Price = styled.span`
  color: ${(props) => props.theme.colors.red};
  margin-right: 0.5em;
`;

export const CrossPrice = styled.span`
  text-decoration: line-through;
`;
