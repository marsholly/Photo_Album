import React, { Component } from 'react';
import AlbumActions from '../actions/AlbumActions';
import {browserHistory} from 'react-router';
import moment from 'moment';

export default class AlbumList extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing:null,
      editPic:'',
      editName:''
    }

    this.editAlbum=this.editAlbum.bind(this);
    this.saveMe=this.saveMe.bind(this);
    this.deleteAlbum=this.deleteAlbum.bind(this);
    this.seePic=this.seePic.bind(this);
  }

  editAlbum(id){
    this.setState({
      editing: this.props._id,
      editPic: this.props.pic,
      editName: this.props.name
    })
  }

  saveMe(e){
    let _id = this.props._id;
    let new_pic =this.state.editPic;
    let new_name =this.state.editName;

    let new_obj = {pic: new_pic, name:new_name }
    AlbumActions.editAlbum(_id, new_obj);

    this.setState({editing:null});
  }

  deleteAlbum(id){
    AlbumActions.deleteAlbum(id);
  }

  seePic(){
    let pic = this.props.pic;
    browserHistory.push({pathname:'/albums/viewPic', query:{ pic : pic}});
  }

  render() {
    let { _id, name, pic, createAt }  = this.props;
    if(this.state.editing){
      return (
        <tr>
          <td><input type="text" value = {this.state.editPic} onChange ={e=>this.setState({editPic:e.target.value})}/></td>
          <td><input type="text" value = {this.state.editName} onChange ={e=>this.setState({editName:e.target.value})}/></td>
          <td>{moment(createAt).format('lll')}</td>
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
            <td onClick={this.seePic}>
              <img src={pic} width="200 px" alt="No Image"/>
            </td>
            <td>{name}</td>
            <td>{moment(createAt).format('lll')}</td>
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
