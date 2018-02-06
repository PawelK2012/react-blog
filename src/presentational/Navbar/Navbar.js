import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
///stateless functional components are functions that taking proertis information
//// and returns jsx element
///// stateless componenets can't access this
////// local methods need to be put in own functions like calcGoalProgress() and percentToDecimal
// export const Navbar = () => (
//     <nav>
//         <ul>
//             <li><Link to="/" activeclassname="selected">Home </Link></li>
//             <li><Link to="/Profile" activeclassname="selected">Profile </Link></li>
//             <li><Link to="/Admin" activeclassname="selected"> Admin </Link></li>
//         </ul>
//     </nav>
// )
// export default Navbar


class Navbar extends Component {
  state = {
    title: 'React Blog',
    open: false,
    width: 250
  }

  styles = {
    appBar: {
        background: '#212121'
    }
};

  toggle = () => {
    this.setState((prevState) => {
      // set it to oposite of prevState.open
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.state.title}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.toggle}
          style={this.styles.appBar}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
         <AppBar title={this.state.title} 
         onLeftIconButtonClick={this.toggle}
         style={this.styles.appBar}/>
          <Divider />
          <Link
            to={'/'}>
            <MenuItem
              onClick={this.toggle}
              primaryText={'News-Feed'}
            />
          </Link>
          <Link
            to={'/profile'}>
            <MenuItem
              onClick={this.toggle}
              primaryText={'Profile'}
            />
          </Link>
          <Link
            to={'/admin'}>
            <MenuItem
              onClick={this.toggle}
              primaryText={'Admin'}
            />
          </Link>
        </Drawer>
      </div>
    )
  }
}
export default Navbar