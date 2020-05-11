import React from 'react';

import { FooterContainer, Container, PhoneNumber, CopyRight } from './footer.styled';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        Số điện thoại hỗ trợ: <PhoneNumber>1900.0000</PhoneNumber> <br />
        <b>Địa chỉ:</b> KTX Khu B, phường Đông Hòa, thị xã Dĩ An, tỉnh Bình Dương <br />
        <CopyRight href="https://github.com/loia5tqd001/Phonee">
          <strong>Copyright by Nguyen Huynh Loi &copy; 2020</strong>
        </CopyRight>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
