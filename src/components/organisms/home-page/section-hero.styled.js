import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionContainer = styled.section`
  /* height: 70vh; */
  background: ${(p) => p.theme.styles.backgroundSecondary};
  display: grid;
  grid-template-columns: 50% 50%;
  color: ${(p) => p.theme.colors.white};
`;

export const TextWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export const Heading = styled.h3`
  font-size: 3rem;
  font-weight: ${(p) => p.theme.fw.semiBold};
  font-style: italic;
`;

export const AvailableText = styled.p`
  font-size: 2rem;
  font-weight: ${(p) => p.theme.fw.thin};
`;

export const CtaButton = styled(Link)`
  padding: 2rem 3rem;
  border: 2px solid white;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  ${(p) => p.theme.mixins.imageFrame}
`;
