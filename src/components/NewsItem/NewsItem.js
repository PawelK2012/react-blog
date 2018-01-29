import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class NewsItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Card>
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
                    <CardActions>
                        <FlatButton label="Read more" />
                        <FlatButton label="Edit" />
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        )
    }
}
export default NewsItem

