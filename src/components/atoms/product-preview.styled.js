import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 2em 1em 1em;
`;

export const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  ${(props) => props.theme.mixins.imageFrame}
`;

export const Name = styled.h3`
  font-weight: ${(props) => props.theme.fw.normal};
  font-size: 1em;
  margin-top: 1em;
`;

export const PriceWrapper = styled.p`
  text-align: center;
`;

export const Price = styled.span`
  font-weight: ${(props) => props.theme.fw.semiBold};
  color: ${(props) => props.theme.colors.red};
  margin-right: 0.5em;
`;

export const CrossPrice = styled.span`
  text-decoration: line-through;
`;
