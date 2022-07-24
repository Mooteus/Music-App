import React from 'react';

import tripImage from '../../assets/trip.svg';

import {
  CardContainer,
  CardTitle,
  CardImage,
  CardSubtitle,
  TextContainer,
} from './Card.styled';

function Card() {
  return (
    <CardContainer>
      <CardImage src={tripImage} />
      <TextContainer>
        <CardTitle>Categoria</CardTitle>
        <CardSubtitle>AKSDKADSKKD</CardSubtitle>
      </TextContainer>
    </CardContainer>
  );
}

export default Card;
