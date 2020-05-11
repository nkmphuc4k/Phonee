import styled from 'styled-components';

export const FooterContainer = styled.footer``;

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.blueDarker2};
  padding: 1em 3em;
  margin: 3em auto 0;
  max-width: 120rem;
`;

export const PhoneNumber = styled.span`
  font-weight: ${(props) => props.theme.fw.semiBold};
  font-size: 1.2em;
`;

export const CopyRight = styled.a`
  color: inherit;
`;
