import React, { Component } from 'react'
import NewsItemMasterDetail from '../presentational/News/NewsItemMasterDetail'
import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SnackBar from '../presentational/SnackBar/SnackBar'
import NewsService from '../services/NewsService'
let newsItem;
class NewsItem extends Component {

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
        this.NewsService.getNewsById(this.props.match.params.id).then(response => {
            newsItem = response.data[0]
            this.setState({ newsData: response.data });
        }).catch(error => {
            console.log(error)
            this.setState({ responseMsg: 'Error while fetching data: ' + error.message, showSnackBar: true });
        });
    }

    render() {
        return (
            <div className="news-item-container">
                {this.state.showSnackBar ? <SnackBar msg={this.state.responseMsg} open={true} /> :
                    this.state.newsData.length > 0 ? <NewsItemMasterDetail {...newsItem} />:
                        <MuiThemeProvider><CircularProgress className="center" size={100} thickness={7} /></MuiThemeProvider>}
            </div>
        )
    }
}

export default NewsItem