import React, { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  background: transparent;
`;

const Content = styled.div`
  display: ${props => (props.show ? 'visible' : 'none')};
  position: absolute;
  top: 1.3rem;
  left: 17rem;
  min-width: 10rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  height: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #eee;
  }
`;

class Dropdown extends Component {
  state = { isOpen: false };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const items = this.props.items.map(item => {
      return <ContentItem key={item}>{item}</ContentItem>;
    });

    return (
      <Container onClick={this.handleClick}>
        {this.props.children}
        <Content show={this.state.isOpen}>{items}</Content>
      </Container>
    );
  }
}

export default Dropdown;
