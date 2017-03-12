import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';
import axios from 'axios';


export default class DestinationForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {form: '', to: ''};
  }
  onChange(event, value) {
    const target = event.target;
    this.setState({[target.name.id]: value});
  }
  submit() {
    this.props.history.push('./show-list');
    //  this.context.router.push('/show-list')
    //  browserHistory.push('/show-list');
    }
  ajax(currentLocation, destination) {
    axios.post('/getMusic', {
      currentLocation,
      destination,
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <MuiThemeProvider>
              <TextField
                id="origin"
                label="Default"
                floatingLabelText="Origin"
                value={this.state.origin}
                onChange={this.onChange}
                className="center"
              />
            </MuiThemeProvider>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <MuiThemeProvider>
              <TextField
                id="destination"
                label="Default"
                floatingLabelText="Destination"
                value={this.state.destination}
                onChange={this.onChange}
              />
            </MuiThemeProvider>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <MuiThemeProvider>
              <RaisedButton
                id="submit"
                label="Submit"
                onClick={this.submit}
              />
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}
