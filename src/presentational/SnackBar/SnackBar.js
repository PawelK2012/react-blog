import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Snackbar from 'material-ui/Snackbar'

export default class SnackBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 5000,
      message: props.msg,
      open: props.open,
    };
  }


  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
          <MuiThemeProvider>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="Close"
          autoHideDuration={this.state.autoHideDuration}
          onActionClick={this.handleRequestClose}
        />
        </MuiThemeProvider>
      </div>
    );
  }
}