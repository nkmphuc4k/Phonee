import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.main`
  background: ${(props) => props.theme.colors.blueDarker2};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.mixins.flexCenter};
  flex-direction: column;

  position: fixed;
  z-index: 100;
  top: 0;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Heading = styled.h1`
  margin-top: -3rem;
  text-shadow: 0 1px 3px #0006;
`;

export const StyledLink = styled(Link)`
  font-weight: ${(props) => props.theme.fw.semiBold};
  color: inherit;
  position: relative;
  border: 2px solid white;
  border-radius: 4px;
  padding: 1em 2em;

  transition: 0.2s;

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.2rem 3px #0005;
  }
`;
