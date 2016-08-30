import React,{Component} from 'react';
import PhotoActions from '../actions/PhotoActions';
import { browserHistory } from 'react-router';


export default class AddPhoto extends Component{
  constructor(){
    super();
    this.state={
      pic:''
    }

  this.submitPhoto = this.submitPhoto.bind(this);
  this.resetForm = this.resetForm.bind(this);

 }

  resetForm(){
    this.setState({
      pic:''
    })
  }

  submitPhoto(e){
    e.preventDefault();
    let album ={
      pic: this.state.pic
    }

    PhotoActions.createPhoto(album);
    this.resetForm();
    browserHistory.push('/albums/allPhotos');
  }

  render(){
    let {album} = this.state;
    return (
      <div className ="maindiv">
        <h2 className="text-center">Add New album</h2>
        <form className ="formStyle" onSubmit={this.submitPhoto}>
          <div className="container form-group">
            <input type="text" placeholder ="picture_url" value = {this.state.pic} className="form-control input-lg input2"
              onChange={e=>this.setState({pic: e.target.value})}/>
          </div>
          <div className="container form-group text-center">
              <button type="submit"  className="btn btn-primary btn-lg">Add</button>
          </div>
          </form>
        </div>
      )
    }
  }
