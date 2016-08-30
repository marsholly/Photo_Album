import React, { Component } from 'react';
import AlbumActions from '../actions/AlbumActions';
import {browserHistory} from 'react-router';

export default class AlbumList extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing:null,
      editName:''
    }

    this.editAlbum=this.editAlbum.bind(this);
    this.saveMe=this.saveMe.bind(this);
    this.deleteAlbum=this.deleteAlbum.bind(this);
  }

  editAlbum(id){
    this.setState({
      editing: this.props._id,
      editName: this.props.name
    })
  }

  saveMe(e){
    let _id = this.props._id;
    let new_name =this.state.editName;

    let new_obj = {name:new_name }
    AlbumActions.editAlbum(_id, new_obj);

    this.setState({editing:null});
  }

  deleteAlbum(id){
    AlbumActions.deleteAlbum(id);
  }

  render() {
    let { _id, name }  = this.props;
    if(this.state.editing){
      return (
        <tr>
          <td><input type="text" value = {this.state.editName} onChange ={e=>this.setState({editName:e.target.value})}/></td>
          <td>
            <button id ={_id} className='btn btn-default btn-xs' onClick={this.saveMe}>
              <span className='glyphicon glyphicon-ok'></span>
            </button>
          </td>
          <td>
            <button id ={_id} className='btn btn-default btn-xs'>
              <span className='glyphicon glyphicon-remove'></span>
            </button>
         </td>
        </tr>
        )
      }else{
        return(
          <tr className='trFont'>
            <td>{name}</td>
            <td>
              <button id = {_id} className="btn btn-success btn-xs">
                <span className="glyphicon glyphicon-download-alt"></span>
              </button>
            </td>
            <td>
              <button id = {_id} className="btn btn-primary btn-xs" onClick={()=>this.editAlbum(_id)}>
                <span className="glyphicon glyphicon-pencil"></span>
              </button>
            </td>
            <td>
              <button id = {_id} className="btn btn-danger btn-xs" onClick={()=>this.deleteAlbum(_id)}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </td>
          </tr>
        )
      }
  }
}
