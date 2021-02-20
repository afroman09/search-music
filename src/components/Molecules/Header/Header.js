import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#121212",
    color: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#1DB954",
    fontSize: "24px",
    fontWeight: "700",
    cursor: "pointer"
  },
  menuPaper: {
    backgroundColor: "#121212",
    color: "#fff"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => {
              history.push(`/`);
            }}
          >
            SearchMusic
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              history.push(`/`);
            }}
          >
            <HomeIcon />
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <SearchIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{ paper: classes.menuPaper }}
          >
            <MenuItem
              onClick={() => {
                history.push(`/ArtistSearch`);
              }}
            >
              アーティスト検索
            </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push(`/TrackIdSearch`);
                }}
              >
                ID検索
              </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
