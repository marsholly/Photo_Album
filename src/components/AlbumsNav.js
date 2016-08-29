import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';


export default class AlbumsNav extends Component {

  render() {
    return(
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
              <li><Link to="/albums/allAlbums">All Albums</Link></li>
                <li><Link to="/albums/addalbum">Add</Link></li>
                <li><Link to="/albums">X</Link></li>
                <li><Link to="/albums">Y</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
        {this.props.children}
        </div>
      </div>
    )
  }
}
