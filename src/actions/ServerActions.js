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
  },
  receivePhotos(photos) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_PHOTOS',
      photos
    })
  },
  receiveOnePhoto(photo) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ONE_PHOTO',
      photo
    })
  },
}

export default ServerActions;
