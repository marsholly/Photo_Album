import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import '../css/style.css'

export default class Welcome extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <Jumbotron>
            <h1 className="text-center">Welcome to Albums</h1>
          </Jumbotron>
        </div>
      </div>
    )
  }
}
