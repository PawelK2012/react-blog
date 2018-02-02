import React from 'react'
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

export const CreateNewsItem = ({ title, subTitle, text, owner, img, featured, onSave }) => {
  let _title, _subTitle, _text, _owner, _img, _featured

  const save = (e) => {
    e.preventDefaults;
    onSave({
      title: _title.getValue(),
      subTitle: _subTitle.getValue(),
      text: _text.getValue(),
      owner: owner,
      img: _img.getValue(),
      featured: _featured.state.switched
    })
  }

  return (
    <div className="create-news-container">
      <p>Create news</p>
      <form onSubmit={save} className="create-news-form">
        <TextField
          id={'title'}
          hintText="Title"
          ref={input => _title = input}
          fullWidth={true}
          style={styles.textField}
        />
        <TextField
          hintText="Sub Title"
          ref={input => _subTitle = input}
          fullWidth={true}
          style={styles.textField}
        />
        <TextField
          hintText="News Field"
          ref={input => _text = input}
          multiLine={true}
          rows={4}
          fullWidth={true}
          style={styles.textField}
        />
        <TextField
          hintText="URL to your image"
          ref={input => _img = input}
          fullWidth={true}
          style={styles.textField}
          type={'url'}
        />
        <div style={styles.block}>
          <Toggle
            label="Featured item"
            ref={input => _featured = input}
            style={styles.toggle}
            defaultToggled={false}
          />
        </div>
        <RaisedButton label="Save" onClick={save} secondary={true} style={styles.button} />
        <RaisedButton label="Clear" primary={true} style={styles.button} />
      </form>
    </div>
  )
}

CreateNewsItem.defaultProps = {
  title: 'Some title',
  subTitle: 'Some subtitle',
  text: 'News content',
  owner: 'Paa',
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
