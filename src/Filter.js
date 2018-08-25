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
      // filters: ["name", ["type1", "type2",...] , ["region1", "region2",...]]
      filters: ["", [], []],
      allRegions: data.regions,
      selectedRegions: [],
      allApps: data.apps,
      selectedApps: [],
    };

    this.passSuperFilters = this.passSuperFilters.bind(this);
    this.state.selectedApps = this.state.allApps.map((a) => {return {name: a, checked: false}});
    this.state.selectedRegions = this.state.allRegions.map((r) => {return {name: r, checked: false}});
    this.passSuperFilters();
  }

    passSuperFilters() {
        var newFilters = this.state.filters;
        newFilters[1] = this.state.selectedApps;
        newFilters[2] = this.state.selectedRegions;
        this.setState({    
            filters: newFilters,
        })
        this.props.passSuperFilters(this.state.filters);
    }

    handleAppChange = name => event => {
        var newSelectedApps = this.state.selectedApps;
        for (var i = 0; i < newSelectedApps.length; i++) {
            if (newSelectedApps[i].name === name) {
                newSelectedApps[i] = {name: newSelectedApps[i].name, checked: !newSelectedApps[i].checked};
            }
        }
        this.setState({selectedApps: newSelectedApps});
        this.passSuperFilters();
    }

    handleRegionChange = name => event => {
        var newSelectedRegions = this.state.selectedRegions;
        for (var i = 0; i < newSelectedRegions.length; i++) {
            if (newSelectedRegions[i].name === name) {
                newSelectedRegions[i] = {name: newSelectedRegions[i].name, checked: !newSelectedRegions[i].checked};
            }
        }
        this.setState({selectedRegions: newSelectedRegions});
        this.passSuperFilters();
    };

  render() {
    const { classes } = this.props;
    //const error = Object.values(this.state).filter(v => v).length !== 2;
    let filters1 = data.apps.map(app => {
        return(
            <FormControlLabel
                control={
                    <Checkbox
                        checked={this.state.selectedApps[app]}
                        onChange={this.handleAppChange(app)}
                        value={app}
                    />
                }
                label={app}
            />
        )
    })
    let filters2 = data.regions.map(region => {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.selectedRegions[region]}
              onChange={this.handleRegionChange(region)}
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
              <FormLabel component="legend">Tool Categories</FormLabel>
              <FormGroup>
                {filters1}
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Regions</FormLabel>
              <FormGroup>
                {filters2}
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
