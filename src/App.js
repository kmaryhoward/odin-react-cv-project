import React, { Component } from 'react';
import CVCreator from './components/CVCreator';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <CVCreator />
      </StyledAppContainer>
    );
  }
}

export default App;
