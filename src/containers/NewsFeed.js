import React, { Component } from 'react'
import { connect } from 'react-refetch'
import NewsList from '../components/NewsList/NewsList'
import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class NewsFeed extends Component {

  render() {
    const { newsFetch } = this.props
    if (newsFetch.pending) {
      return (
        <MuiThemeProvider>
          <CircularProgress className="center" size={100} thickness={7} />
        </MuiThemeProvider>)
    } else if (newsFetch.rejected) {
      return <h1>Rejected <span error={newsFetch.reason}></span></h1>
    } else if (newsFetch.fulfilled) {
      return (
        <NewsList {...newsFetch} />
        //this.renderList(newsFetch)
        // <div className="news-feed-container">
        //   <h1>News Feed</h1>
        //   this.renderList
        //   {/* {newsFetch.value.map((newsItm, i) =>
        //     <NewsList key={i}
        //       {...newsItm} />
        //   )} */}
        // </div>
      )
    }
  }
}

export default connect(props => ({
  newsFetch: `http://localhost:63145/api/messages`
}))(NewsFeed)