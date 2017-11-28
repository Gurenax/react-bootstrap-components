# React Bootstrap Components

## Components

### Grid
- Container
```html
<Container></Container>
<Container className='bg-light'></Container>
<Container variation='fluid' className='bg-light'></Container>
```

- Row
```html
<Row></Row>
<Row className='bg-info'></Row>
```

- Col
```html
<Col></Col>
<Col span='4'></Col>
<Col span='4' sm='4' md='4' lg='4' xl='4'></Col>
<Col span='4' sm='4' md='4' lg='4' xl='4' className='bg-light'></Col>
```

### Button
```html
<Button title='Click Me' />
<Button title='Click Me' variation='primary' />
<Button title='Click Me' variation='primary' href='http://www.google.com' />
```

### Button Group
```html
<ButtonGroup>
  <Button title='Click Me' />
  <Button title='Click Me' variation='primary' />
  <Button title='Click Me' variation='primary' href='http://www.google.com' />
</ButtonGroup>
```

### Nav
```html
<Nav>
  <NavItem>First</NavItem>
  <NavItem active={ true }>Second</NavItem>
  <NavItem>Third</NavItem>
</Nav>
```

### Nav Item
```html
<NavItem>First</NavItem>
<NavItem active={ true }>Second</NavItem>
<NavItem>Third</NavItem>
```

### Alert
```html
<Alert>Hello World!</Alert>
<Alert type='danger'>Hello World!</Alert>
```

### Card
```html
<Card imageUrl='http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg' imageAlt='Random Dog 1' title='This is a Card' text='Hello World!' buttonUrl='http://www.google.com' buttonText='Go to Google' />
```

### Image
```html
<Image className="card-img-top" imageUrl='http://cdn.akc.org/content/hero/puppy-boundaries_header.jpg' alt='Random Dog 1' />
```

### Progress
```html
<Progress value='0' striped animated/>
<Progress value='10' striped animated />
<Progress value='25' striped animated color='success'/>
<Progress value='50' striped animated color='info' />
<Progress value='75' striped animated color='warning' />
<Progress value='100' striped animated color='danger' />
```

### Form
- Label
```html
<Label forId='textName' title='Name' />
<Label forId='textEmail' title='Email' />
<Label forId='textPassword' title='Password' />
```
- Text Field
```html
<TextField id='textName' type='text' placeholder='Enter a name' />
<TextField id='textEmail' type='email' placeholder='Enter an email address' />
<TextField id='textPassword' type='password' placeholder='Enter a password' />
```
- Form Group
```html
<FormGroup>
  <Label forId='textName' title='Name' />
  <TextField id='textName' type='text' placeholder='Enter a name' />

  <Label forId='textEmail' title='Email' />
  <TextField id='textEmail' type='email' placeholder='Enter an email address' />

  <Label forId='textPassword' title='Password' />
  <TextField id='textPassword' type='password' placeholder='Enter a password' />
</FormGroup>
```
- Text Area
```html
<TextArea id='textArea' rows='5' placeholder='Enter description' value='' />
```
- Checkbox
```html
<Checkbox id='checkMe' description='Checked by default' checked />
<Checkbox id='checkMe2' description='Not checked by default' />
<Checkbox id='checkMe2' description='Disabled by default' disabled />
<Checkbox id='inlineCheck1' description='Checked by default' inline checked />
<Checkbox id='inlineCheck2' description='Not checked by default' inline />
<Checkbox id='inlineCheck3' description='Disabled by default' inline disabled />
```
- Radio Button
```html
<RadioButton id='radio1' group='radioGrp1' value='option1' description='Radio 1' selected />
<RadioButton id='radio2' group='radioGrp1' value='option2' description='Radio 2' />
<RadioButton id='radio3' group='radioGrp1' value='option3' description='Radio 3' disabled />
<RadioButton id='inlineRadio1' group='radioGrp2' value='option1' description='Radio 1' inline selected />
<RadioButton id='inlineRadio2' group='radioGrp2' value='option2' description='Radio 2' inline />
<RadioButton id='inlineRadio3' group='radioGrp2' value='option3' description='Radio 3' inline disabled />
```
- Form Button
```html
<FormButton type='submit' title='Submit' />
<FormButton type='reset' title='Clear' />
```


## Notes

- At its most simplest, a React component is a function that returns an HTML element
- The React component function takes key-value pairs called 'props' — very similar to HTML attributes. However, the keys can be named whatever you like.
- React components can also render (return) other React components
- You can bundle up a lot of power in one React component —  multiple HTML elements for example
- Things nested inside a rendered component become accessible as the `children` prop
- React component can dynamically change what HTML tag it will use — e.g. use `<a>` when `href` prop is passed, otherwise use `<button>`
- String interpolation is great for punching prop values into class names

## Info

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
