import React, {Component} from 'react';

interface IProps {
    message: string;
}
export class Greeting extends Component<IProps, {}> {
   render() {
   return <h1>{this.props.message}</h1>
   }
}