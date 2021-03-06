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
import RadioButton from './components/forms/RadioButton'
import Progress from './components/Progress'
import ButtonGroup from './components/ButtonGroup'
import Container from './components/grid/Container'
import Row from './components/grid/Row'
import Col from './components/grid/Col'


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
            <Container>
              <Row>
                <Col>
                  <Card imageUrl='http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg' imageAlt='Random Dog 1' title='This is a Card' text='Hello World!' buttonUrl='http://www.google.com' buttonText='Go to Google' />
                </Col>
                <Col>
                  <Card imageUrl='http://www.haustier-news.de/wp-content/uploads/2015/04/chihuahua-darum-ist-er-der-beliebteste-kleinhund-der-welt.jpg' imageAlt='Random Dog 2' title='This is a Card' text='Hello World!' buttonUrl='http://www.google.com' buttonText='Go to Google' buttonColor='danger' />
                </Col>
                <Col>
                  <Card imageUrl='https://i.ytimg.com/vi/opKg3fyqWt4/hqdefault.jpg' imageAlt='Random Dog 3' title='This is a Card' text='Hello World!' buttonUrl='http://www.google.com' buttonText='Go to Google' buttonColor='success' />
                </Col>
              </Row>
            </Container>
          </div>

          <div className='mt-3'>
            <h1>Forms and Fields</h1>
            <Form>
              <FormGroup>
                <Label forId='textName' title='Name' />
                <TextField id='textName' type='text' placeholder='Enter a name' />
              
                <Label forId='textEmail' title='Email' />
                <TextField id='textEmail' type='email' placeholder='Enter an email address' />
              
                <Label forId='textPassword' title='Password' />
                <TextField id='textPassword' type='password' placeholder='Enter a password' />
              </FormGroup>

              <FormGroup>
                <Checkbox id='checkMe' description='Checked by default' checked />
                <Checkbox id='checkMe2' description='Not checked by default' />
                <Checkbox id='checkMe2' description='Disabled by default' disabled />
              </FormGroup>

              <FormGroup>
                <RadioButton id='radio1' group='radioGrp1' value='option1' description='Radio 1' selected />
                <RadioButton id='radio2' group='radioGrp1' value='option2' description='Radio 2' />
                <RadioButton id='radio3' group='radioGrp1' value='option3' description='Radio 3' disabled />
              </FormGroup>

              <FormGroup>
                <Checkbox id='inlineCheck1' description='Checked by default' inline checked />
                <Checkbox id='inlineCheck2' description='Not checked by default' inline />
                <Checkbox id='inlineCheck3' description='Disabled by default' inline disabled />
              </FormGroup>

              <FormGroup>
                <RadioButton id='inlineRadio1' group='radioGrp2' value='option1' description='Radio 1' inline selected />
                <RadioButton id='inlineRadio2' group='radioGrp2' value='option2' description='Radio 2' inline />
                <RadioButton id='inlineRadio3' group='radioGrp2' value='option3' description='Radio 3' inline disabled />
              </FormGroup>

              <FormGroup>
                <Label forId='textArea' title='Description' />
                <TextArea id='textArea' rows='5' placeholder='Enter description' value='' />
              </FormGroup>

              <ButtonGroup>
                <FormButton type='submit' title='Submit' />
                <FormButton type='reset' title='Clear' />
              </ButtonGroup>
            </Form>
          </div>

          <div className='mt-3'>
            <h1>Progress</h1>
            <Progress value='0' striped animated/>
            <br/>
            <Progress value='10' striped animated />
            <br/>
            <Progress value='25' striped animated color='success'/>
            <br/>
            <Progress value='50' striped animated color='info' />
            <br/>
            <Progress value='75' striped animated color='warning' />
            <br/>
            <Progress value='100' striped animated color='danger' />
          </div>

          <div className='mt-3'>
            <h1>Button Group</h1>
            <ButtonGroup>
              <Button title='First' href='https://www.google.com/' />
              <Button title='Second' variation='primary' />
              <Button title='Third' variation='success' />
            </ButtonGroup>
          </div>

          <div className='mt-3'>
            <h1>Container Fluid</h1>
            <Container variation='fluid' className='bg-light'>
              <h2>Row 1</h2>
              <Row>
                <Col span='4' className='bg-success'><h3>Col 1 of 3</h3></Col>
                <Col span='4' className='bg-warning'><h3>Col 2 of 3</h3></Col>
                <Col span='4' className='bg-danger'><h3>Col 3 of 3</h3></Col>
              </Row>

              <h2>Row 2</h2>
              <Row>
                <Col md='6' className='bg-primary'><h3>Col 1 of 2</h3></Col>
                <Col md='6' className='bg-secondary'><h3>Col 2 of 2</h3></Col>
              </Row>

              <h2>Row 3</h2>
              <Row>
                <Col lg='12' className='bg-info'><h3>Col 1 of 1</h3></Col>
              </Row>
            </Container>
          </div>

          <div className='mt-3'>
            <h1>Container Default</h1>
            <Container className='bg-dark text-light'>
              <h2>Row 1</h2>
              <Row>
                <Col span='4' className='bg-success'><h3>Col 1 of 3</h3></Col>
                <Col span='4' className='bg-warning'><h3>Col 2 of 3</h3></Col>
                <Col span='4' className='bg-danger'><h3>Col 3 of 3</h3></Col>
              </Row>

              <h2>Row 2</h2>
              <Row>
                <Col md='6' className='bg-primary'><h3>Col 1 of 2</h3></Col>
                <Col md='6' className='bg-secondary'><h3>Col 2 of 2</h3></Col>
              </Row>

              <h2>Row 3</h2>
              <Row>
                <Col lg='12' className='bg-info'><h3>Col 1 of 1</h3></Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      
    );
  }
}

export default App;
