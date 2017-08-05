import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


/**
 * Page Header, including navbar
 */
class Header extends React.Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }


  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <header>
        <AppBar
          title='Readable'
          iconElementLeft={
            <IconButton>
              <NavigationMenu onTouchTap={this.handleToggle} />
            </IconButton>
          }
        />

        <Drawer open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({open})}
        >
          <AppBar
            title="Readable"
          />

          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to={'/'} />}>Home</MenuItem>
          <MenuItem
            onTouchTap={this.handleClose}
            containerElement={<Link to={'/category'} />}>Category</MenuItem>
        </Drawer>
      </header>
    )
  }
}

export default Header;