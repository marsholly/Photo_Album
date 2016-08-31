import React, { Component } from 'react';
import PhotoStore from '../stores/PhotoStore';
import PhotoList from './PhotoList';
import PhotoActions from '../actions/PhotoActions';


export default class AllPhotos extends Component {
  constructor(props){
    super(props);

    this.state = {
      photos: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PhotoActions.getAllPhotos();
    PhotoStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    PhotoStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      photos: PhotoStore.getAll()
    });
  }

  render() {
    let {photos} = this.state;
    let albumId = this.props.location.query.albumId;
    const listPhotos = photos.map(photo => {
      return (
        <PhotoList key={photo._id} {...photo} albumId={albumId} />
      )
    })

    return (
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Create_At</th>
                <th>Put</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {listPhotos}
            </tbody>
          </table>
      </div>
    )
  }
}
