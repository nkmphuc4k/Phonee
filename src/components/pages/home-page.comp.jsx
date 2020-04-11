import React from 'react';

import SectionHero from '../organisms/home-page/section-hero.comp';

import { HomePageContainer } from './home-page.styled';

function HomePage() {
  return (
    <HomePageContainer>
      <SectionHero />
    </HomePageContainer>
  );
}

export default HomePage;
