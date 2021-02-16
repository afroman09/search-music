import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Style from "./Header.module.scss";

class Header extends Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const sideList = (
      <div className={Style.list}>
        <List>
          <Link to="/">
            <p className={Style.menuText}>Home</p>
          </Link>
          <Link to="/ArtistSearch">
        <p className={Style.menuText}>アーティスト検索</p>
          </Link>
        </List>
      </div>
    );

    return (
      <div className={Style.menu}>
        <AppBar position="relative" color="#fff" backgroundColor="#121212">
          <Toolbar style={{ backgroundColor:"#121212" }}>
            <IconButton
              className={Style.menuButton}
              aria-label="Menu"
              onClick={this.toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              open={this.state.left}
              onClose={this.toggleDrawer("left", false)}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer("left", false)}
                onKeyDown={this.toggleDrawer("left", false)}
              >
                {sideList}
              </div>
            </Drawer>
            <strong>
              <Link to="/" className={Style.title}>
                Search Music
              </Link>
            </strong>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  Style: PropTypes.object.isRequired,
};

export default withStyles()(Header);
