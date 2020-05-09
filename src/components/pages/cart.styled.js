import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.section`
  max-width: 70rem;
  margin: auto;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em auto;
`;

export const HeaderLink = styled(Link)`
  &,
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.blue};
  }

  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.fw.normal};

  ion-icon {
    margin-right: 0.5rem;
  }
`;

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
  border-top: 1px solid ${(props) => props.theme.colors.greyLight1};
  padding: 0.5em 0 1em;

  span {
    color: ${(props) => props.theme.colors.red};
    font-weight: ${(props) => props.theme.fw.semiBold};
  }
`;

export const CartContainer = styled.div`
  box-shadow: 0 0 2rem #0002;
  padding: 1.5em 2em;
`;

export const CartProducts = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.greyLight3};
`;

export const PayButton = styled(Link)`
  display: block;
  max-width: 50rem;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 1em;
  margin: 1em auto;
  border-radius: 0.4rem;
  font-weight: ${(props) => props.theme.fw.normal};
  background: ${(props) => `
    linear-gradient(to bottom, 
      ${props.theme.colors.orange1}, 
      ${props.theme.colors.orange2})`};
`;

export const MarginAuto = styled.p`
  margin: auto;
  text-align: center;
`;

export const EmptyCartContainer = styled(CartContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToHomeLink = styled(Link)`
  border: 1px solid currentColor;
  border-radius: 2px;
  padding: 1rem 5em;
  margin-top: 1em;
  font-weight: ${(props) => props.theme.fw.semiBold};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue};
`;
