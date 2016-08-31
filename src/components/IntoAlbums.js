import React, { Component } from 'react'
import AlbumStore from '../stores/AlbumStore'
import PhotoActions from '../actions/PhotoActions'
import PhotoListForAlbum from './PhotoListForAlbum'

export default class IntoAlbums extends Component{

  constructor(){
    super();
    this.state = {
      albums: AlbumStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }

 componentDidMount(){
    PhotoActions.getAllAlbums();
    AlbumStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    AlbumStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      albums:  AlbumStore.getAll()
    });
  }

  render(){
    let name;
   const albumList  = this.state.albums.map( album => {
      name = album.name;
      return (
        <PhotoListForAlbum key = {album._id} {...album}/>
      )
    })
    return(
      <div>
        <h2>{name}</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Create_At</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {albumList}
          </tbody>
          </table>
      </div>

    )
  }
}
