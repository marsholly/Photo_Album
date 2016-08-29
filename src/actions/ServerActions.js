import AppDispatcher from '../AppDispatcher';

const ServerActions = {
  receiveAlbums(albums) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALBUMS',
      albums
    })
  },
  receiveOneAlbum(album) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_ALBUM',
      album
    })
  }
}

export default ServerActions;
