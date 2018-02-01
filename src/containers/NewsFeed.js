import React, { Component } from 'react'
import { connect } from 'react-refetch'
import NewsList from '../presentational/News/NewsList'
import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SnackBar from '../presentational/SnackBar/SnackBar'

class NewsFeed extends Component {

  render() {
    const { newsFetch } = this.props
    if (newsFetch.pending) {
      return (
        <MuiThemeProvider>
          <CircularProgress className="center" size={100} thickness={7} />
        </MuiThemeProvider>)
    } else if (newsFetch.rejected) {
      return (
        <SnackBar msg={newsFetch.reason.message}
          open={true} />
      )
    } else if (newsFetch.fulfilled) {
      return (
        <NewsList {...newsFetch} />
      )
    }
  }
}

export default connect(props => ({
  newsFetch: `http://localhost:63145/api/messages`
}))(NewsFeed)