import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.section`
  max-width: 120rem;
  margin: auto;
`;

export const ProductDetails = styled.div`
  display: flex;
`;

export const ProductImage = styled.div`
  ${(props) => props.theme.mixins.imageFrame}
  max-width: 60rem;
  align-self: flex-start;
`;

export const ProductName = styled.h1`
  text-align: left;
  font-size: 2em;
  font-weight: ${(props) => props.theme.fw.normal};
  border-bottom: 1px solid ${(props) => props.theme.colors.greyLight3};
  padding: 0.5rem 0;
`;

export const ProductInfo = styled.div`
  margin-left: 1em;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SpecHeading = styled.h2`
  text-align: left;
  margin: 1em 0 0.5em;
  font-size: 1.5em;
`;

export const SpecList = styled.ul`
  margin-bottom: 1em;
`;

export const SpecItem = styled.li`
  border-top: 1px solid ${(props) => props.theme.colors.greyLight1};
  padding: 0.5em 0 0.75em;
`;

export const SpecName = styled.span`
  color: ${(props) => props.theme.colors.greyDark2};
  display: inline-block;
  width: 13em;
`;

export const PriceWrapper = styled.p`
  text-align: left;
  font-size: 2em;
`;

export const Price = styled.span`
  font-weight: ${(props) => props.theme.fw.semiBold};
  color: ${(props) => props.theme.colors.red};
  margin-right: 1em;
`;

export const CrossPrice = styled.span`
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.greyLight2};
`;

export const BuyButton = styled(Link)`
  display: block;
  max-width: 50rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 1em;
  margin-top: auto;
  border-radius: 0.4rem;
  background: ${(props) => `
    linear-gradient(to bottom, 
      ${props.theme.colors.orange1}, 
      ${props.theme.colors.orange2})`};
`;
