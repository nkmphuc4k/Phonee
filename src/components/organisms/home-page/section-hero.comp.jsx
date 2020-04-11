import React from 'react';

import {
  SectionContainer,
  TextWrapper,
  Heading,
  AvailableText,
  CtaButton,
  ImageWrapper,
} from './section-hero.styled';

function SectionHero() {
  return (
    <SectionContainer>
      <TextWrapper>
        <Heading>New Phones Arrivals</Heading>
        <AvailableText>Available Now!</AvailableText>
        <CtaButton>View Collection</CtaButton>
      </TextWrapper>
      <ImageWrapper>
        <img
          src="https://static.wixstatic.com/media/84770f_0fb7b6743f7f4a28a2548a6169bc9743~mv2.png/v1/fill/w_666,h_677,al_c,q_90/84770f_0fb7b6743f7f4a28a2548a6169bc9743~mv2.webp"
          alt="hero"
        />
      </ImageWrapper>
    </SectionContainer>
  );
}

export default SectionHero;
