import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';
import { ENETDOWN } from 'constants';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1rem 1em;
  padding: 1em 1em;
  ${props => props.primary && css`
    background: palevioletred;
    color: #fff;
  `}
`
const BlueBotton = styled(Button)`
  color: blue;
  border: 2px solid blue;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
         
        </header> */}
        <Button primary>I'm a styled Primary Button!</Button>
        <Button>I'm a styled Button!</Button>
        <BlueBotton>Blue button</BlueBotton>

      </div>
    );
  }
}

export default App;


