import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import CardMedia from '@material-ui/core/CardMedia';
import { Row, Col } from 'react-bootstrap';
import Card from './components/card';
import Avatar from './components/avatar';


import { Button, Nav, FormControl } from 'react-bootstrap';


class App extends Component {
  render() {
    return (

      <div className="App">

        <div>
          <Row>
            <Col>
              <Avatar />
            </Col>
            <Col><h1 style={{fontSize: 100,}}>C-four Industries</h1></Col>
          </Row>
        </div>
        <br/>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        <br />
        <div>
          <Card />
        </div>
        <div>
        </div>
      </div>


    );

  }
}

export default App;
