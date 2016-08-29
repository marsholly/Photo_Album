import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Welcome from './components/Welcome';
import App from './components/App';
import AlbumsNav from './components/AlbumsNav';
import Addalbum from './components/Addalbum';
import AllAlbums from './components/AllAlbums';
import ViewPicture from './components/ViewPicture';


render(
  <Router history={browserHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={Welcome}></IndexRoute>
      <Route path='albums' component={AlbumsNav}>
        <Route path='addalbum' component={Addalbum}></Route>
        <Route path='allAlbums' component={AllAlbums}></Route>
        <Route path='viewPic' component={ViewPicture}></Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
