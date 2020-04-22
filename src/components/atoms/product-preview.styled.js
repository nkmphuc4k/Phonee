import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
  ${(props) => props.theme.mixins.imageFrame}
  transition: transform 0.2s;
`;

export const Name = styled.h3`
  font-weight: ${(props) => props.theme.fw.normal};
  font-size: 1em;
  margin-top: 1em;
  transition: color 0.2s;
  text-align: center;
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

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 2em 1em 1em;
  color: currentColor;
  border: 1px solid ${(props) => props.theme.colors.greyLight1};
  margin: -1px -1px 0 0;

  &:hover {
    color: currentColor;

    ${Name} {
      color: ${(props) => props.theme.colors.blue};
    }

    ${ImageContainer} {
      transform: translateY(-0.5em);
    }
  }
`;
