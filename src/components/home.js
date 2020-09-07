import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import Card from '../components/card';
import Slider from '../components/slider';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '../components/avatar';
import Form from '../components/form';

import { Button, Nav, FormControl } from 'react-bootstrap';


class home extends Component {
    render() {
        return (

            <div className="App">

                <div>
                    <Avatar />
                    <h1>C-four industries </h1>
                </div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Form">Home</Nav.Link>
                        <Nav.Link href="/Form">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
                <br />
                <div>
                    <Slider />
                </div>
                <div>
                    <Card />
                </div>
            </div>


        );

    }
}

export default home;
