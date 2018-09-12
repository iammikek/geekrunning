import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Activities from './Activities';
import Athlete from './Athlete';


class Strava extends Component {

    constructor() {
        super();
        this.state = {
            athleteId: 4133009,
            clubId: 13237,
            activities: [
                {id: 1, name: 'Activity 1'},
                {id: 2, name: 'Activity 2'},
                {id: 3, name: 'Activity 1'},
                {id: 4, name: 'Activity 2'},
            ]
        }
    }


    // load Activities info


    //

    componentDidMount() {

    }

    render() {
        return (
            <div>
                Hello Strava Component
                <Athlete></Athlete>
                <Activities activities={this.state.activities}></Activities>
            </div>
        );
    }
}

Strava.propTypes = {};

export default Strava;
