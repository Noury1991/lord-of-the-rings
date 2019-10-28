import React, {Component} from "react";
import "./App.css";
import Movie from './Movie';
import logo from './logo.svg';

class App extends Component {
  render() {

    const allMovies=[
      <Movie message={this.props.movie[0]}/>,
       <Movie message={this.props.movie[1]}/>,
       <Movie message={this.props.movie[2]}/>
    ];
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {allMovies}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
