import React, { Component } from 'react'
import { connect, PromiseState } from 'react-refetch'
import NewsItem from '../components/NewsItem/NewsItem';

class NewsFeed extends Component {
  render() {
    const { newsFetch } = this.props
    if (newsFetch.pending) {
      return <h1>Pending</h1>
    } else if (newsFetch.rejected) {
      return <h1>Rejected <span error={newsFetch.reason}></span></h1>
    } else if (newsFetch.fulfilled) {
      console.log(newsFetch, " + ")
      return (
        <div>
          <h1> data {newsFetch.value[0].owner}</h1>
          {newsFetch.value.map((newsItm, i) =>
            <NewsItem key={i}
              {...newsItm} />
          )}
        </div>
      )
    }
  }
}

export default connect(props => ({
  newsFetch: `http://localhost:63145/api/messages`
}))(NewsFeed)