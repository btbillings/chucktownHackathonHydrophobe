import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import * as data from "./contents.json";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // filters: ["name", "type", ["region1", "region2",...]]
      filters: ["", "", []]
    };
  }

  passSuperFilters() {
    this.props.passSuperFilters(this.state.filters);
  }
  state = {
    gilad: true,
    jason: false,
    antoine: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    //const error = Object.values(this.state).filter(v => v).length !== 2;
    let filters = data.regions.map(region => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked="false"
              onChange={this.handleChange(region)}
              value={region}
            />
          }
          label={region}
        />
      );
    });
    return (
      <div>
        {this.props.guided ? (
          <div />
        ) : (
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Regions</FormLabel>
              <FormGroup>
                {filters}
              </FormGroup>
            </FormControl>
          </div>
        )}
      </div>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Filter);
