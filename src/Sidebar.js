import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Filter from './Filter';

class Sidebar extends Component {
    render()
    {
        console.log(this.props);
        const classes = this.props.classNames;
        return (
<Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      <Filter />
      </Drawer>);
    }
}

export default Sidebar;