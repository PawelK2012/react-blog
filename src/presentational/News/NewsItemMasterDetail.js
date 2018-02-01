import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class NewsItem extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Card className="card">
                    <CardHeader
                        title={this.props.title}
                        subtitle={this.props.subTitle}
                    />
                    <CardMedia
                        overlay={<CardTitle title={this.props.title} subtitle={this.props.subTitle} />}
                    >
                        <img src={this.props.img} alt={this.props.title} />
                    </CardMedia>
                    <CardTitle title={this.props.title} subtitle={this.props.subTitle} />
                    <CardText>{this.props.text}</CardText>
                </Card>
            </MuiThemeProvider>
        )
    }
}
export default NewsItem

