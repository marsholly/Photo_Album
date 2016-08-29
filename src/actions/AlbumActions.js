import API from '../API';

const AlbumActions = {
  getAllAlbums: API.getAllAlbums,
  createAlbum(album) {
    API.createAlbum(album);
  },
  editAlbums(id, album){
    API.editAlbums(id, album);
  },
  deleteAlbums(id){
    API.deleteAlbums(id);
  }
  // lookup(zipcode){
  //   API.lookup(zipcode);
  // },
  // lookupPrice(low, high){
  //   API.lookupPrice(low, high);
  // },
  // lookupBedroom(low, high){
  //   API.lookupBedroom(low, high);
  // }
}

export default AlbumActions;
