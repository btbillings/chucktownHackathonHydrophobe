import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Sidebar from "./Sidebar";
import ToolCard from "./ToolCard";
class Results extends React.Component {
  render() {
    const classes = this.props.classNames;
    console.log(classes);
    let cards = [];
    for(let i = 0; i < 4; i++)
    {
        cards[i] = <ToolCard id={i} />;
    }
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography>
          {"Results"}
        </Typography>
        {cards}
      </main>
    );
  }
}

export default Results;
