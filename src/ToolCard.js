import * as React from 'react';
import * as data from './contents.json';
import {Card, CardContent, Typography, CardActions, CardMedia, Button} from '@material-ui/core';

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
        return (
            <CardMedia className="tool-card" image={this.state.screenshot}>
                <CardContent>
                    <Typography variant="title" className="tool-title">
                        <h1>{this.state.name}</h1>
                    </Typography>
                    <Typography variant="body1" className="tool-details">
                        <p>Application Type: {this.state.app}</p>
                        <p>Description: {this.state.description}</p>
                        <p>Applicable Regions: {this.state.region.map((l) => {return l;})}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.websiteButtonClicked}>Website</Button>
                </CardActions>
            </CardMedia>
        )
    }
}