import * as React from 'react';
import * as data from contents.json;
import {Card, CardContent, Typography, CardActions, CardMedia} from '@material-ui/core';

export default class ToolCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // filters: ["name", "type", ["region1", "region2",...]]
            filters: ["", "", []]
        }
    }

    passSuperFilters() {
        this.props.passSuperFilters(filters)
    }

    render() {
        return (
            <div>
                {this.props.guided 
                    ? (
                        <div>
                        </div>
                    ) : (
                        <div>
                        </div>
                    )
                }
            </div>
        )
    }
}