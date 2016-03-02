import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import Preview from './components/preview';
import SlideList from './components/slidelist';
import NavBar from './components/navbar';
import Editor from './components/editor';
import Fullscreen from './components/fullscreen';

class App extends Component {
  render() {
    return (
      <div>
      	<NavBar />
      	<div className="content">
      		<SlideList /><Preview /><Editor />
      	</div>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,document.querySelector('.container'));