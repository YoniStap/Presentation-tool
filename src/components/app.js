import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './navbar';
import Editor from './editor';
import Fullscreen from './fullscreen';

import SlideList from '../containers/slidelist';
import Preview from '../containers/preview';

export default class App extends Component {
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