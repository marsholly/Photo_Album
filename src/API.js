import axios from 'axios';
import ServerActions from './actions/ServerActions';


const API = {
  getAllAlbums(){
    axios.get('/api/albums')
      .then(res => res.data)
      .then(ServerActions.receiveAlbums)
      .catch(console.error);
  },
  createAlbum(album) {
    axios.post('/api/albums', album)
      .then(res => res.data)
      .then(ServerActions.receiveOneAlbum)
      .catch(console.error);
  },
  editAlbum(id, album){
    axios.put(`/api/albums/${id}`, album)
      .then(res => res.data)
      .then(ServerActions.receiveAlbums)
      .catch(console.error);
  },
  deleteAlbum(id) {
    axios.delete(`/api/albums/${id}`)
      .then(this.getAllAlbums())
      .catch(console.error);
  },
  addAlbum(albumId, photoId){
    axios.put(`/api/albums/${albumId}/addPhoto/${photoId}`)
      .then(this.getAllAlbums())
      .catch(console.error);
  },
  getAllPhotos(){
    axios.get('/api/pics')
      .then(res => res.data)
      .then(ServerActions.receivePhotos)
      .catch(console.error);
  },
  createPhoto(photo) {
    axios.post('/api/pics', photo)
      .then(res => res.data)
      .then(ServerActions.receiveOnePhoto)
      .catch(console.error);
  },
  editPhoto(id, photo){
    axios.put(`/api/pics/${id}`, photo)
      .then(res => res.data)
      .then(ServerActions.receivePhotos)
      .catch(console.error);
  },
  deletePhoto(id) {
    axios.delete(`/api/pics/${id}`)
      .then(this.getAllPhotos())
      .catch(console.error);
  }
}

export default API;
