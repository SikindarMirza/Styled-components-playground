import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'styled-components';


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
const ReversedButton = props => <button {...props}
  children={props.children.split('').reverse()} />

const Link = ({className, children}) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
`
const Input = styled.input`
  padding: 0.5;
  margin: 1;
  color: ${props => props.inputColor || "red"};
  background: #999;
  border: none;
  border-radius: 4px;
  height: 2rem;;
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
        <Button as="a" href="https://www.google.com/" target="_blank">This is a link</Button>
        <BlueBotton as={ReversedButton}>Reversed text using other custom component</BlueBotton>
        <Link>This is a normal link</Link>
        <StyledLink>This is a styled link</StyledLink>
        <Input inputColor="#fff" placeholder="Please enter..." type="text"/>
      </div>
    );
  }
}

export default App;


