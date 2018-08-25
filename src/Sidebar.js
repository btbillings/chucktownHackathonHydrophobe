import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Filter from './Filter';
import Button from '@material-ui/core/Button';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["", [], []],
    }

    this.updateFilters = this.updateFilters.bind(this);
  }

  updateFilters(newFilters) {
    this.setState({
      filters: newFilters,
    })
    console.log("HERE");
    this.props.passSuperFilters(this.state.filters);
  }

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
        <Button variant="outlined" color="secondary" className={classes.button}>
        GUIDED FILTER
      </Button>
      <Filter passSuperFilters={this.updateFilters}/>
      </Drawer>);
    }
}

/*
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
      </List>*/
export default Sidebar;