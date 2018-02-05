import React, { Component } from 'react'
import { connect } from 'react-refetch'
import NewsList from '../presentational/News/NewsList'
import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SnackBar from '../presentational/SnackBar/SnackBar'
import NewsService from '../services/NewsService'
let news;
class NewsFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      responseMsg: ' ',
      showSnackBar: false,
      newsData: []
    };
    this.NewsService = new NewsService()
  }

  componentWillMount() {
    this.setState({ responseMsg: ' ', showSnackBar: false });
    this.NewsService.getNews().then(response => {
      news = response
      this.setState({ newsData: response.data });
    }).catch(error => {
      console.log(error)
      this.setState({ responseMsg: 'Error while fetching data: ' + error.message, showSnackBar: true });
    });
  }

  render() {
    return (
      <div>
        {this.state.showSnackBar ? <SnackBar msg={this.state.responseMsg} open={true} /> :
          this.state.newsData.length > 0 ? <NewsList {...news} /> :
            <MuiThemeProvider><CircularProgress className="center" size={100} thickness={7} /></MuiThemeProvider>}
      </div>
    )
  }
}
export default NewsFeed