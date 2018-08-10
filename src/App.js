import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser.js';

class App extends Component {
  render() 
  {
    return (
      <div id="browser-display">
        <TopicBrowser />
      </div>
    ); //return
  }
}

export default App;
