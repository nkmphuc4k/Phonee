import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 3rem 10%;
  background: linear-gradient(
    to right,
    ${(p) => p.theme.styles.colorSecondary},
    ${(p) => p.theme.styles.colorPrimary}
  );
  color: ${(p) => p.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 1fr 1fr;
`;

export const ServiceWrapper = styled.div`
  grid-row: 1/-1;
`;

export const PhoneNumber = styled.p`
  font-size: 1.7em;
`;

export const LinksWrapper = styled.div`
  grid-row: 1/-1;
  display: grid;
  grid-row-gap: 1rem;
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1.5rem;
  justify-self: end;
  font-size: 1.4em;
`;

export const Copyright = styled.p`
  justify-self: end;
  align-self: end;
  letter-spacing: 0.1rem;
`;
