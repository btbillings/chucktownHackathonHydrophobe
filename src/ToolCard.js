import * as React from 'react';
import {Card, CardContent} from '@material-ui/core';

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
                <CardContent >
                </CardContent>
            </Card>
        )
    }
}