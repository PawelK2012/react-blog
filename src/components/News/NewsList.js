import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        width: '90%',
        height: '100%',
        overflowY: 'auto'
    },
    title: {
        background: 'rgba(255,255,255, 0.5)',
        fontSize: '34px',
        width: '100%'
    }
};

class NewsList extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.root}>
                    <GridList
                        cols={2}
                        cellHeight={200}
                        padding={1}
                        style={styles.gridList}
                    >
                        {this.props.value.map((tile) => (
                            <GridTile
                                key={tile.img}
                                title={<Link to={{ pathname: tile.id }}>{tile.title}</Link>}
                                actionPosition="left"
                                titlePosition="top"
                                titleStyle={styles.title}
                                titleBackground="rgba(0, 0, 0, 0.4)"
                                cols={tile.featured ? 2 : 1}
                                rows={tile.featured ? 2 : 1}
                            >
                                <img src={tile.img} alt={tile.title} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default NewsList