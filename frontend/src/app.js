import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DestinationForm from './dirForm';
import MusicList from './listMusic';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const BasicExample = () => (
  <Router>
    <div className="container">
      <Route exact path="/" component={DestinationForm}/>
      <Route path="/show-list" component={MusicList}/>
    </div>
  </Router>
)

export default BasicExample
