import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Sidebar from './Sidebar';
import Results from './Results';
import Guided from './Guided';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 800,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: {
    paddingTop: '10px'
  }, //theme.mixins.toolbar,
  content: {
    paddingTop: '64px',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginLeft: '10px',
    marginRight: '10px'
  }
});

class PermanentDrawer extends React.Component {
  state = {
    anchor: 'left',
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    console.log(this.props);
    const { classes } = this.props;
    const { anchor } = this.state;
console.log(classes);
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                Hydrophobe
              </Typography>
            </Toolbar>
          </AppBar>
          <Sidebar classNames={classes} />
          <Results classNames={classes} />
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);