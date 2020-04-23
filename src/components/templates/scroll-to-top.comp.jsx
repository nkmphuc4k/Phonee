import React, { useState, useEffect } from 'react';

import { Container } from './scroll-to-top.styled';

function ScrollToTop() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const THRESHOLD = 400;

    const handleScroll = () => {
      if (atTop && window.scrollY >= THRESHOLD) {
        setAtTop(false);
      } else if (!atTop && window.scrollY < THRESHOLD) {
        setAtTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [atTop]);

  return (
    <Container onClick={() => window.scrollTo(0, 0)} atTop={atTop}>
      <ion-icon name="caret-up"></ion-icon>
    </Container>
  );
}

export default ScrollToTop;
