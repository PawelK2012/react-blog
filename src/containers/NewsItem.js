import React, { Component } from 'react'
import { connect } from 'react-refetch'
import NewsItemMasterDetail from '../components/NewsItemMasterDetail/NewsItemMasterDetail'
import CircularProgress from 'material-ui/CircularProgress'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class NewsItem extends Component {

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
                <div className="news-item-container">
                    <h1>News item</h1>
                    {newsFetch.value.map((newsItm, i) =>
                        <NewsItemMasterDetail key={i}
                            {...newsItm} />
                    )}
                </div>
            )
        }
    }
}

export default connect(props => ({
    newsFetch: `http://localhost:63145/api/getMsg/${props.match.params.id}`
}))(NewsItem)