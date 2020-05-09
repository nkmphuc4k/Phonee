import styled from 'styled-components';

export const ProductItem = styled.div`
  margin: 1em 0;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 1em;
  grid-template-areas:
    'image name price'
    'image ... button';
`;

export const ProductImage = styled.div`
  grid-area: image;

  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageFrame = styled.div`
  width: 15rem;
  height: 15rem;
  ${(props) => props.theme.mixins.imageFrame}
`;

export const RemoveItem = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem auto;

  ion-icon {
    margin-right: 0.5rem;
  }
`;

export const ProductName = styled.p`
  grid-area: name;
  font-weight: ${(props) => props.theme.fw.bold};
`;

export const ProductPrice = styled.p`
  grid-area: price;
  color: ${(props) => props.theme.colors.red};
  text-align: right;
`;
