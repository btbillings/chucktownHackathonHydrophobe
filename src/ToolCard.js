import * as React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

export default class ToolCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "",
            region: [],
            screenshot: "",
            description: ""
        }
    }

    render() {
        return (
            <Card className="tool-card" >
                <CardContent>
                    <Typography variant="title" className="tool-title">
                        <h1>{this.state.name}</h1>
                    </Typography>
                    <Typography variant="body1" className="tool-details">
                        <p>{this.state.description}</p>
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}