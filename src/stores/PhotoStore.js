import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _photos = [];

class PhotoStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_PHOTOS':
          _photos = action.photos;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_PHOTO':
          var { photo } = action;
          _photos.push(photo);
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _photos;
  }
}

export default new PhotoStore();
