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
