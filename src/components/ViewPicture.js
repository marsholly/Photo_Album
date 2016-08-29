import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import '../css/style.css'

export default class ViewPicture extends Component {
  constructor(props){
    super(props);
    this.goBack=this.goBack.bind(this);
  }

  goBack(){
    browserHistory.push({pathname:'/albums/allAlbums'})
  }
  render() {
    let picture = this.props.location.query.pic;
    return(
      <div className="container">
        <div className="row">
        <a onClick={this.goBack}>
          <img src={picture} alt="No Image"/>
        </a>
        </div>
      </div>
    )
  }
}
