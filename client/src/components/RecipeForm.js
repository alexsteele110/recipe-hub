import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';
import { ReactComponent as SpinnerIcon } from '../assets/icons/spinner.svg';
import styled from '@emotion/styled';
import axios from 'axios';

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 24rem;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const FormLabel = styled.span`
  font-size: 0.75rem;
  color: #777;
  margin: 0 0 4px 4px;
`;

const IdInput = styled.input`
  max-width: 8rem;
  padding: 0.5rem 0.25rem;
  position: relative;
  border: 2px solid #cdcdcd;
  border-color: rgba(0, 0, 0, 0.14);
  background-color: #eee;
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FormSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: rgb(0, 132, 137);
  color: white;
  cursor: pointer;
`;

class RecipeForm extends Component {
  state = {
    buttons: ['AllRecipes', 'Delish', 'Testing'],
    activeButton: 'AllRecipes',
    loadingRecipe: false,
  };

  idInput = React.createRef();

  handleOriginChange = val => {
    this.setState({ activeButton: val });
  };

  handleSubmit = async () => {
    this.setState({ loadingRecipe: true });
    const recipeId = this.idInput.current.value;
    const recipeOrigin = this.state.activeButton;
    try {
      const res = await axios.get(
        `/api/${recipeOrigin.toLowerCase()}/${recipeId}`
      );
      this.props.onNewRecipe({
        ...res.data,
        recipeId,
        recipeOrigin,
      });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loadingRecipe: false });
  };

  render() {
    return (
      <FormContainer>
        <FormControl>
          <FormLabel>Recipe origin</FormLabel>
          <ButtonGroup
            default="AllRecipes"
            buttons={this.state.buttons}
            onActiveChange={this.handleOriginChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Recipe ID</FormLabel>
          <IdInput id="recipe-id" type="text" ref={this.idInput} />
        </FormControl>
        <FormButtons>
          <FormSubmit onClick={this.handleSubmit}>
            {this.state.loadingRecipe ? <SpinnerIcon /> : 'Submit'}
          </FormSubmit>
        </FormButtons>
      </FormContainer>
    );
  }
}

export default RecipeForm;
