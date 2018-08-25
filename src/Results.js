import React from "react";
import Typography from "@material-ui/core/Typography";
import ToolCard from "./ToolCard";
class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classNames;
    console.log(classes);
    let cards = [];
    for(let i = 0; i < 4; i++)
    {
        cards[i] = <ToolCard id={i} filters={this.props.filters}/>;
    }
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="display2" gutterBottom>
          {"Results"}
        </Typography>
        {cards}
      </main>
    );
  }
}

export default Results;
