import React, { Component } from 'react';
import PhotoActions from '../actions/PhotoActions';
import {browserHistory} from 'react-router';
import moment from 'moment';

export default class PhotoList extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing:null,
      editPic:''
    }

    this.editPhoto=this.editPhoto.bind(this);
    this.saveMe=this.saveMe.bind(this);
    this.deletePhoto=this.deletePhoto.bind(this);
    this.seePic=this.seePic.bind(this);
  }

  editPhoto(id){
    this.setState({
      editing: this.props._id,
      editPic: this.props.pic
    })
  }

  saveMe(e){
    let _id = this.props._id;
    let new_pic =this.state.editPic;

    let new_obj = {pic: new_pic}
    PhotoActions.editPhoto(_id, new_obj);

    this.setState({editing:null});
  }

  deletePhoto(id){
    PhotoActions.deletePhoto(id);
  }

  seePic(){
    let pic = this.props.pic;
    browserHistory.push({pathname:'/albums/viewPic', query:{ pic : pic}});
  }

  render() {
    let { _id, pic, createAt }  = this.props;
    if(this.state.editing){
      return (
        <tr>
          <td><input type="text" value = {this.state.editPic} onChange ={e=>this.setState({editPic:e.target.value})}/></td>
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
            <td>{moment(createAt).format('lll')}</td>
            <td>
              <button id = {_id} className="btn btn-success btn-xs" >
                <span className="glyphicon glyphicon-picture"></span>
              </button>
            </td>
            <td>
              <button id = {_id} className="btn btn-primary btn-xs" onClick={()=>this.editPhoto(_id)}>
                <span className="glyphicon glyphicon-pencil"></span>
              </button>
            </td>
            <td>
              <button id = {_id} className="btn btn-danger btn-xs" onClick={()=>this.deletePhoto(_id)}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </td>
          </tr>
        )
      }
  }
}
