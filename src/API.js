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
  }
}

export default API;
