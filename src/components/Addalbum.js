import React,{Component} from 'react';
import AlbumActions from '../actions/AlbumActions';
import { browserHistory } from 'react-router';


export default class AddAlbum extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      pic:''
    }

  this.submitAlbum = this.submitAlbum.bind(this);
  this.resetForm = this.resetForm.bind(this);

 }

  resetForm(){
    this.setState({
      name:'',
      pic:''
    })
  }

  submitAlbum(e){
    e.preventDefault();
    let album ={
      name:this.state.name,
      pic: this.state.pic
    }

    AlbumActions.createAlbum(album);
    this.resetForm();
    browserHistory.push('/albums/allAlbums');
  }

  render(){
    let {album} = this.state;
    return (
      <div className ="maindiv">
        <h2 className="text-center">Add New album</h2>
        <form className ="formStyle" onSubmit={this.submitAlbum}>
          <div className="container form-group ">
            <input type="text" placeholder="Name" value = {this.state.name} className="form-control input-lg input1"
              onChange={e=>this.setState({name:e.target.value})}/>
          </div>
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
