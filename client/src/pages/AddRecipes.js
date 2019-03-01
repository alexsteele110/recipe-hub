import React, { Component, Fragment } from 'react';
import RecipeForm from '../components/RecipeForm';
import RecipeCard from '../components/RecipeCard';
import styled from '@emotion/styled';

const temp = {
  ingredients: [
    '3 tbsp. butter',
    '1 small onion, chopped',
    '1 green bell pepper, chopped',
    '2 ribs celery, chopped',
    'Kosher salt',
    'Freshly ground black pepper',
    '4 cloves garlic, minced',
    '1 tbsp. paprika',
    '2 tsp. dried thyme',
    '2 tsp. dried oregano',
    '1 tsp. cayenne',
    '1 1/2 c. low-sodium chicken broth',
    '2 bay leaves',
    '1 (15-oz.) can whole tomatoes, crushed',
    '2 green onions, thinly sliced, plus more for garnish',
    '2 tsp. Worcestershire sauce',
    'Juice of 1/2 lemon',
    '1 tbsp. vegetable oil',
    '1 1/2 lb. shrimp, peeled and deveined',
    'Cooked white rice, for serving',
  ],
  directions: [
    'In a large skillet over medium heat, melt butter. Add onion, pepper, and celery and cook until soft, 5 minutes. Season with salt and pepper. Add garlic, paprika, thyme, oregano, and cayenne and cook until fragrant, 1 to 2 minutes more. Add chicken broth and bring to a boil. Lower to a simmer and cook until reduced by about 1/4, 6 to 8 minutes.',
    'Add tomatoes and cook until reduced by half, about 10 minutes. Add green onions and Worcestershire sauce and cook until thickened, about 10 minutes more. Season again with salt and pepper if needed, then turn off heat and stir in lemon juice.',
    'In a separate large skillet, heat oil. Add shrimp and cook until pink and opaque, about 2 minutes per side. Season with salt and pepper, then add prepared sauce to shrimp. Garnish with green onions and serve with rice.',
  ],
  name: 'Shrimp Creole',
  imageUrl:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190213-shrimp-creole-080-1550848956.jpg?crop=1.00xw:0.847xh;0,0.0638xh&resize=480:*',
  sourceUrl: 'https://www.delish.com/cooking/recipe-ideas/a26470763',
};

const Recipes = styled.div`
  max-width: 67rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class AddRecipes extends Component {
  state = { recipes: [temp] };

  handleNewRecipe = recipe => {
    this.setState({ recipes: [recipe, ...this.state.recipes] });
  };

  renderRecipes = () => {
    return this.state.recipes.map(recipe => {
      console.log(recipe);
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
