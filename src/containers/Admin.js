import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CreateNewsItem from '../presentational/News/CreateNewsItem'
import NewsService from '../services/NewsService'

import SnackBar from '../presentational/SnackBar/SnackBar'

const styles = {
  slide: {
    padding: 10,
  },
  tabsUnderline: {
    background: 'rgb(0, 188, 212)'
  },
  tabs: {
    background: '#616161'
  }
};

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      showSnackBar: false,
      responseMsg: ' '
    };
    this.NewsService = new NewsService()
    this.addNews = this.addNews.bind(this)
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  addNews(newNews) {
    this.setState({ responseMsg: ' ', showSnackBar: false });
    this.NewsService.post(newNews).then(response => {
      this.setState({ responseMsg: 'News saved', showSnackBar: true });
    }).catch(error => {
      this.setState({ responseMsg: 'News not saved: ' + error.message, showSnackBar: true });
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="tabs-container">
          <Tabs
            tabItemContainerStyle={styles.tabs}
            inkBarStyle={styles.tabsUnderline}
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="News" value={0} />
            <Tab label="User" value={1} />
            <Tab label="Settings" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div style={styles.slide}>
              <CreateNewsItem onSave={this.addNews} />
              {this.state.showSnackBar ? <SnackBar msg={this.state.responseMsg} open={true} /> : null}
            </div>
            <div style={styles.slide}>
              slide 2
            </div>
            <div style={styles.slide}>
              slide n°3
          </div>
          </SwipeableViews>
        </div>
      </MuiThemeProvider>
    )
  }
}
export default Admin