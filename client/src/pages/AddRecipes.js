import React, { Component, Fragment } from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeCard from '../components/RecipeCard';
import styled from '@emotion/styled';

const Recipes = styled.div`
  max-width: 67rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class AddRecipes extends Component {
  state = { recipes: [] };

  handleNewRecipe = recipe => {
    this.setState({ recipes: [...this.state.recipes, recipe] });
  };

  renderRecipes = () => {
    return this.state.recipes.map(recipe => {
      return <RecipeCard key={recipe.name} recipe={recipe} />;
    });
  };

  render() {
    return (
      <Fragment>
        <RecipeForm onNewRecipe={this.handleNewRecipe} />
        <Recipes>{this.renderRecipes()}</Recipes>
      </Fragment>
    );
  }
}

export default AddRecipes;
