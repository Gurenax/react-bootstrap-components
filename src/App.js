import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import { Nav, NavItem } from './components/Nav'
import Alert from './components/Alert'
import Card from './components/Card'
import Form from './components/forms/Form'
import FormGroup from './components/forms/FormGroup'
import Label from './components/forms/Label'
import TextField from './components/forms/TextField'
import FormButton from './components/forms/FormButton'
import TextArea from './components/forms/TextArea'
import Checkbox from './components/forms/Checkbox'
import Progress from './components/Progress'
import ButtonGroup from './components/ButtonGroup'
import Container from './components/Container'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <div className='mt-3'>
            <h1>Buttons</h1>
            <Button title='Google' href='https://www.google.com/' />
            <Button title='Second' variation='primary' />
            <Button title='Third' variation='success' />
          </div>

          <div className='mt-3'>
            <h1>Nav</h1>
            <Nav>
              <NavItem>First</NavItem>
              <NavItem active={ true }>Second</NavItem>
              <NavItem>Third</NavItem>
            </Nav>
          </div>

          <div className='mt-3'>
            <h1>Alert</h1>
            <Alert type='primary'>This is a primary alert—check it out!</Alert>
            <Alert type='secondary'>This is a secondary alert—check it out!</Alert>
            <Alert type='success'>This is a success alert—check it out!</Alert>
            <Alert type='danger'>This is a danger alert—check it out!</Alert>
            <Alert type='warning'>This is a warning alert—check it out!</Alert>
            <Alert type='info'>This is a info alert—check it out!</Alert>
            <Alert type='light'>This is a light alert—check it out!</Alert>
            <Alert type='dark'>This is a dark alert—check it out!</Alert>
          </div>

          <div className='mt-3'>
            <h1>Card</h1>
            <Card image='http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg' imageAlt='Random Dog' title='This is a Card' text='Hello World!' buttonLink='http://www.google.com' buttonText='Go to Google' />
          </div>

          <div className='mt-3'>
            <h1>Forms and Fields</h1>
            <Form>
              <FormGroup>
                <Label forId='textName'>Name</Label>
                <TextField id='textName' type='text' placeholder='Enter a name' />
              
                <Label forId='textEmail'>Email</Label>
                <TextField id='textEmail' type='email' placeholder='Enter an email address' />
              
                <Label forId='textPassword'>Password</Label>
                <TextField id='textPassword' type='password' placeholder='Enter a password' />
              </FormGroup>

              <FormGroup type='check'>
                <Label forId='checkMe' type='checkbox'>
                  <Checkbox id='checkMe' checked />
                  Checked by default
                </Label>
              </FormGroup>
              <FormGroup type='check'>
                <Label forId='checkMe2' type='checkbox'>
                  <Checkbox id='checkMe2' />
                  Not checked by default
                </Label>
              </FormGroup>

              <FormGroup>
                <Label forId='textArea'>Description</Label>
                <TextArea id='textArea' rows='5' placeholder='Enter description' />
              </FormGroup>

              <ButtonGroup>
                <FormButton type='submit'>Submit</FormButton>
                <FormButton type='reset'>Clear</FormButton>
              </ButtonGroup>
            </Form>
          </div>

          <div className='mt-3'>
            <h1>Progress</h1>
            <Progress value='0' />
            <br/>
            <Progress value='10' />
            <br/>
            <Progress value='25' />
            <br/>
            <Progress value='50' />
            <br/>
            <Progress value='75' />
            <br/>
            <Progress value='100' />
          </div>

          <div className='mt-3'>
            <h1>Button Group</h1>
            <ButtonGroup>
              <Button title='First' href='https://www.google.com/' />
              <Button title='Second' variation='primary' />
              <Button title='Third' variation='success' />
            </ButtonGroup>
          </div>

        </Container>

      </div>
      
    );
  }
}

export default App;
