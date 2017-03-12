import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SongItem from './songItem'
import { browserHistory } from 'react-router';


export default class ListMusic extends React.Component {
  constructor(props) {
    super(props);
  }
  getData() {
    return [
      {
        artist:'asdf',
        album:'adaf',
        title:'what up!'
      },
      {
        artist:'asdf',
        album:'adaf',
        title:'what up!'
      }
    ];
  }
  getListItem(songs) {
    return songs.map((s, i) =>
      <SongItem key={i} song={s}/>
    )
  }
  render() {
    const style = {
      margin: 12,
    };
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton label="Primary" primary={true} style={style} />
       </MuiThemeProvider>
        {this.getListItem(this.getData())}
      </div>
    );
  }
}
