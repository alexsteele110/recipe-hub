import React, { Component } from 'react';
import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.div`
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: rgba(0, 132, 137, 0.1);
  cursor: pointer;
  transition: all 0.1s ease;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

class ButtonGroup extends Component {
  state = { activeButton: this.props.default };

  handleButtonClick = e => {
    this.setState({ activeButton: e.target.innerText });
    this.props.onActiveChange(e.target.innerText);
  };

  renderButtons = () => {
    return this.props.buttons.map(button => {
      return (
        <Button
          key={button}
          onClick={this.handleButtonClick}
          style={{
            background: `${
              button === this.state.activeButton ? 'rgb(0, 132, 137)' : '#eee'
            }`,
            color: `${button === this.state.activeButton ? 'white' : '#888'}`,
          }}
        >
          {button}
        </Button>
      );
    });
  };

  render() {
    return <ButtonContainer>{this.renderButtons()}</ButtonContainer>;
  }
}

export default ButtonGroup;
