import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _albums = [];

class AlbumStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch (action.type) {
        case 'RECEIVE_ALBUMS':
          _albums = action.albums;
          this.emit('CHANGE');
          break;
        case 'RECEIVE_ONE_ALBUM':
          var { album } = action;
          _albums.push(album);
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
    return _albums;
  }
}

export default new AlbumStore();
