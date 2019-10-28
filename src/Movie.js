import React, { Component } from 'react';

class Movie extends Component{
  render() {
    return (
        <div>
        <h1>The Lord of the Rings: {this.props.message.title}</h1>
        <p>{this.props.message.hours}h {this.props.message.minutes}min</p>
      </div>
    );
  }
}
 
export default Movie;