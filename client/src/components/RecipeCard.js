import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  margin: 1rem;
  width: 20rem;
  height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  overflow: hidden;
  animation: ${fade} 0.2s ease-in;
`;

const Media = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 15rem;
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
  margin-bottom: 1rem;
`;

const Directions = styled.div`
  display: flex;
  flex-direction: column;
`;

const DirectionStep = styled.div`
  font-size: 0.875rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Container>
      <Media imageUrl={recipe.imageUrl} />
      <Content>
        <Title
          href={`https://www.allrecipes.com/recipe/${recipe.recipeId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {recipe.name}
        </Title>
        <Subtitle>Source: {recipe.recipeOrigin}</Subtitle>
        <Directions>
          {recipe.directions.map((direction, index) => {
            return (
              <DirectionStep key={index}>
                {index + 1}) {direction}
              </DirectionStep>
            );
          })}
        </Directions>
      </Content>
      <Actions>
        <div>+</div>
      </Actions>
    </Container>
  );
};

export default RecipeCard;
