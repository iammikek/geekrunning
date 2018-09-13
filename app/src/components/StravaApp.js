import React, {Component} from 'react'
//import PropTypes from 'prop-types'

import Activities from './Activities'
import ActivityMap from './ActivityMap'
import Athlete from './Athlete'
import strava from 'strava-v3'

class StravaApp extends Component {

    constructor() {
        super();
        this.state = {
            athleteId: process.env.REACT_APP_STRAVA_ATHLETE_ID,
            clubId: process.env.REACT_APP_STRAVA_CLUB_ID,
            token: process.env.REACT_APP_STRAVA_TOKEN,
            page: 1,
            perPage: 50,
            activities: [],
            athlete: {},
            stats: {}
        }
    }

    // load Activities info

    getActivities() {
        strava.athlete.listActivities({
            'access_token': this.state.token,
            'id': this.state.athleteId,
            'page': this.state.page, // {Integer} Page number.
            'perPage': this.state.perPage // {Integer} Number of items per page. Defaults to 30.
        }, (err, payload, limits) => {
            //do something with your payload, track rate limits
            this.setState({'activities': payload});

           // console.log(payload);
        })
    }

    // load Athlete info
    getAthlete() {

        strava.athlete.get({
            'access_token': this.state.token,
            'id': this.state.athleteId,
            'page': this.state.page, // {Integer} Page number.
            'perPage': this.state.perPage // {Integer} Number of items per page. Defaults to 30.
        }, (err, payload, limits) => {
            //do something with your payload, track rate limits
            this.setState({'athlete': payload});

            console.log(payload);
        })
    }


    //
    componentDidMount() {
        this.getAthlete();
        this.getActivities();
    }

    //
    render() {
        return (
            <div id="StravaApp">
                <Athlete athlete={this.state.athlete} stats={this.state.stats}></Athlete>
                <ActivityMap activities={this.state.activities}></ActivityMap>
                <Activities activities={this.state.activities}></Activities>
            </div>
        );
    }
}

//StravaApp.propTypes = {};

export default StravaApp;
