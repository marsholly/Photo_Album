import React, { Component } from 'react'
import AlbumStore from '../stores/AlbumStore'
import PhotoActions from '../actions/PhotoActions'
// import SoldList from './SoldList'

export default class IntoAlbums extends Component{

  constructor(){
    super();
    this.state = {
      houses: AlbumStore.getAll()
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
      houses:  AlbumStore.getAll()
    });
  }

  render(){
  //  const soldList  = this.state.houses.map( house => {
  //     return (
  //       <SoldList key = {house._id} {...house}/>
  //     )
  //   })
    return(
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Address</th>
          <th>Sqft</th>
          <th>Beds</th>
          <th>Baths</th>
          <th>Price</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
      </table>
    )
  }
}
