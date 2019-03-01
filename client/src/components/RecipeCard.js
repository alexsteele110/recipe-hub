import React from 'react';
import Dropdown from './Dropdown';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import placeholder from '../assets/images/placeholder.png';
import { ReactComponent as MoreIcon } from '../assets/icons/more-vert.svg';
import { ReactComponent as FavoriteBorderIcon } from '../assets/icons/favorite-border.svg';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  margin: 1.5rem 1rem;
  width: 20rem;
  height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  animation: ${fade} 0.2s ease-in;
`;

const Media = styled.div`
  background-image: url(${props => props.imageUrl || placeholder});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 15rem;
  border-radius: 3px;
`;

const Content = styled.div`
  color: rgb(72, 72, 72);
  padding: 0.75rem;
`;

const Title = styled.a`
  color: rgb(72, 72, 72);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: rgb(0, 132, 137);
  }
`;

const Subtitle = styled.div`
  color: rgb(118, 118, 118);
  font-size: 0.875rem;
`;

const Directions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const DirectionStep = styled.div`
  font-size: 0.875rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const AddCircle = styled.div`
  position: absolute;
  bottom: -1.25rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  transition: all 0.2s ease;
  cursor: pointer;

  svg {
    fill: rgb(0, 132, 137);
  }
`;

const FavoriteCircle = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  svg {
    height: 2rem;
    width: 2rem;
  }
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Container>
      <Media imageUrl={recipe.imageUrl} />
      <Content>
        <Title
          href={recipe.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {recipe.name}
        </Title>
        <Subtitle>Source: {recipe.recipeOrigin}</Subtitle>
        {/* <Directions>
          {recipe.directions.map((direction, index) => {
            return (
              <DirectionStep key={index}>
                {index + 1}) {direction}
              </DirectionStep>
            );
          })}
        </Directions> */}
      </Content>
      <Dropdown items={['one', 'two', 'three']}>
        <AddCircle>
          <MoreIcon />
        </AddCircle>
      </Dropdown>
      <FavoriteCircle>
        <FavoriteBorderIcon />
      </FavoriteCircle>
    </Container>
  );
};

export default RecipeCard;
