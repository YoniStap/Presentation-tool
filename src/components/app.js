import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import Preview from './preview';
import NavBar from './navbar';
import Editor from './editor';
import Fullscreen from './fullscreen';

import SlideList from '../containers/slidelist';

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