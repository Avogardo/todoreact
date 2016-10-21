import React, { Component } from 'react';
import TaskList from './TaskList.js';
import './App.css';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList />
          <br />
          <AddButton />
      </div>
    );
  }
}

export default App;