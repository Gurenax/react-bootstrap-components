import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import { Nav, NavItem } from './components/Nav'
import Alert from './components/Alert'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='mt-3'>
          <Button title='Google' href='https://www.google.com/' />
          <Button title='Second' variation='primary' />
          <Button title='Third' variation='success' />
        </div>
        <div className='mt-3'>
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={ true }>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
        </div>
        <div className='mt-3'>
          <Alert type='primary'>This is a primary alert—check it out!</Alert>
          <Alert type='secondary'>This is a secondary alert—check it out!</Alert>
          <Alert type='success'>This is a success alert—check it out!</Alert>
          <Alert type='danger'>This is a danger alert—check it out!</Alert>
          <Alert type='warning'>This is a warning alert—check it out!</Alert>
          <Alert type='info'>This is a info alert—check it out!</Alert>
          <Alert type='light'>This is a light alert—check it out!</Alert>
          <Alert type='dark'>This is a dark alert—check it out!</Alert>
        </div>
      </div>
    );
  }
}

export default App;
