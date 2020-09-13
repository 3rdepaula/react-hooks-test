import React from 'react';

import { Container, Name } from './styles';

const Card = (props) => {
  return (
    <Container>
      <Name>{props.title}</Name>
    </Container>
  );
}

export default Card;