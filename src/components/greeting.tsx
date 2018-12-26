import React, {Component} from 'react';

// For Information On Theming with Styled-Components and Typescript see:
// https://www.styled-components.com/docs/api#typescript
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


interface IProps {
    message: string;
}
export class Greeting extends Component<IProps, {}> {
   render() {
   return <Wrapper><Title>{this.props.message}</Title></Wrapper>
   }
}