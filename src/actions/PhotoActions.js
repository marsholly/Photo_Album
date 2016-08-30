import API from '../API';

const PhotoActions = {
  getAllPhotos: API.getAllPhotos,
  createPhoto(photo) {
    API.createPhoto(photo);
  },
  editPhoto(id, photo){
    API.editPhoto(id, photo);
  },
  deletePhoto(id){
    API.deletePhoto(id);
  }
}

export default PhotoActions;
