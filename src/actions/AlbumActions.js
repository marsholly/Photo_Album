import API from '../API';

const AlbumActions = {
  getAllAlbums: API.getAllAlbums,
  createAlbum(album) {
    API.createAlbum(album);
  },
  editAlbum(id, album){
    API.editAlbum(id, album);
  },
  deleteAlbum(id){
    API.deleteAlbum(id);
  },
  addAlbum(albumId, photoId){
    API.addAlbum(albumId, photoId);
  }
}

export default AlbumActions;
