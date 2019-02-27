import React, { Component } from 'react';
import AddRecipes from './pages/AddRecipes';
import { Global, css } from '@emotion/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global
          styles={css`
            * {
              font-family: 'Inter', sans-serif;
            }
          `}
        />
        <AddRecipes />
      </div>
    );
  }
}

export default App;
