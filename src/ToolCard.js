import * as React from 'react';
import * as data from './contents.json';
import OpenInBrowser from '@material-ui/icons/OpenInBrowser'
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import './stylesheet.css';

export default class ToolCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: data.tools[props.id].name,
            app: data.tools[props.id].app,
            region: data.tools[props.id].region,
            screenshot: data.tools[props.id].screenshot,
            description: data.tools[props.id].description,
            link: data.tools[props.id].link,
        }
        this.websiteButtonClicked = this.websiteButtonClicked.bind(this);
    }

    websiteButtonClicked() {
        window.open(this.state.link, "_blank");
    }

    render() {
        var displayByApp = false;
        var countCheckedApp = 0;

        for (var i = 0; i < this.props.filters[1].length; i++) {
            if (this.props.filters[1][i].checked === true) {
                if (this.state.app === this.props.filters[1][i].name) {
                    displayByApp = true;
                }
            } else {
                countCheckedApp += 1;
            }
        }

        if (countCheckedApp === this.props.filters[1].length) {
            displayByApp = true;
        }

        var displayByRegion = false;
        var countCheckedRegion = 0;

        for (var i = 0; i < this.props.filters[2].length; i++) {
            if (this.props.filters[2][i].checked === true) {
                if (this.state.region.indexOf(this.props.filters[2][i].name) > -1) {
                    displayByRegion = true;
                }
            } else {
                countCheckedRegion += 1;
            }
        }

        if (countCheckedRegion === this.props.filters[2].length) {
            displayByRegion = true;
        }

        var returnHTML = (displayByApp && displayByRegion) ? (
            <Card className="tool-card">
                <img src={process.env.PUBLIC_URL + this.state.screenshot} class="tool-image" alt="Default for tool website."/>
                <CardContent className="tool-title">
                    <Typography variant="title" class="tool-title-text" app={this.state.app}>
                        <h1>{this.state.name}</h1>
                    </Typography>
                </CardContent>
                <CardContent className="tool-details">
                    <Typography variant="body1" className="tool-details-text">
                        <p><strong>Application Type</strong>: {this.state.app}</p>
                        <p><strong>Description</strong>: {this.state.description}</p>
                        <p><strong>Applicable Regions</strong>: {this.state.region.map((l) => {return l;}).join(", ")}</p>
                    </Typography>
                </CardContent>
                <CardActions className="tool-links">
                    <Button size="small" onClick={this.websiteButtonClicked} className="website-button">
                        Website<OpenInBrowser/>
                    </Button>
                </CardActions>
            </Card>
        ) : null;

        console.log(this.state.screenshot);
        return returnHTML;
    }
}