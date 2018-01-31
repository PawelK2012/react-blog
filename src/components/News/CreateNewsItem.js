import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  block: {
    maxWidth: 150,
  },
  toggle: {
    marginBottom: 16,
  },
  textField: {
    marginBottom: '15px'
  },
  button: {
    marginLeft: 12,
    float: 'right',
  }
};

class CreateNewsItem extends Component {

  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
  }

  save(e) {
    e.preventDefaults;
    console.log(this.refs.title.getValue())
    console.log(this.refs.subTitle.getValue())
    console.log(this.refs.text.getValue())
    console.log(this.refs.img.getValue())
    console.log(this.refs.featured.state.switched)
    console.log(this.props)
  }

  render() {
    //const { title, subTitle, text, img, featured } = this.props
    return (
      <div onSubmit={this.save} className="create-news-container">
        <p>Create news</p>
        <form className="create-news-form">
          <TextField
            id={'title'}
            hintText="Title"
            ref="title"
            fullWidth={true}
            style={styles.textField}
          />
          <TextField
            hintText="Sub Title"
            ref="subTitle"
            fullWidth={true}
            style={styles.textField}
          />
          <TextField
            hintText="News Field"
            ref="text"
            multiLine={true}
            rows={4}
            fullWidth={true}
            style={styles.textField}
          />
          <TextField
            hintText="URL to your image"
            ref="img"
            fullWidth={true}
            style={styles.textField}
            type={'url'}
          />
          <div style={styles.block}>
            <Toggle
              label="Featured item"
              ref="featured"
              style={styles.toggle}
              defaultToggled={false}
            />
          </div>
          <RaisedButton label="Save" onClick={this.save} secondary={true} style={styles.button} />
          <RaisedButton label="Clear" primary={true} style={styles.button} />
        </form>
      </div>
    )
  }
}

CreateNewsItem.defaultProps = {
  title: 'Some title',
  subTitle: 'Some subtitle',
  text: 'News content',
  img: 'http://dailypost.ng/wp-content/uploads/2017/10/lew.jpg',
  featured: false
}

CreateNewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired
}

export default CreateNewsItem
