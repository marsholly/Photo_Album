import React, { Component } from 'react';
import AlbumStore from '../stores/AlbumStore';
import AlbumList from './AlbumList';
import AlbumActions from '../actions/AlbumActions';


export default class AllAlbums extends Component {
  constructor(props){
    super(props);

    this.state = {
      albums: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AlbumActions.getAllAlbums();
    AlbumStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    AlbumStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      albums: AlbumStore.getAll()
    });
  }

  render() {
    let {albums} = this.state;
    const listAlbums = albums.map(album => {
      return (
        <AlbumList key={album._id} {...album} />
      )
    })

    return (
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Create_At</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {listAlbums}
            </tbody>
          </table>
      </div>
    )
  }
}
