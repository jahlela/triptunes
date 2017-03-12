import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { entries } from 'lodash'

export default class SongItem extends React.Component:
  getInformation() ->
    song = this.props.song
    Array.from(Object.entries(song)).map(([key, value]) =>
      <li key={key}>{key}: {value}</li>
    )
    [for [key, value] of song~entries():
      <li key={key}>{key}: {value}</li>
    ]

  render() ->
    style = {
      height: 100
      width: 400
      margin: 20
      textAlign: 'center'
      display: 'inline-block'
    }
    <MuiThemeProvider>
      <Paper style={style} zDepth={1} rounded={false}>
        <ul>
          {this.getInformation()}
        </ul>
      </Paper>
    </MuiThemeProvider>
