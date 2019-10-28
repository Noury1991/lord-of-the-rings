import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './Movie';
 
const movie =[{

    title:'The Fellowship of the Ring',
    hours: 2,
    minutes: 58
},
{
    title:'The Two Towers',
    hours: 2,
    minutes: 59
},
{
    title:'The Return of the King',
    hours: 3,
    minutes: 21
}]

ReactDOM.render(
   <App
    movie={movie}/>,
      document.getElementById('root')
);
