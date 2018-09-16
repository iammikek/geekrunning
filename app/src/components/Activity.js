import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import Moment from 'react-moment';
import '../css/Activity.css';

class Activity extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    getLink() {
        return 'View on <a href="https://www.strava.com/activities/' + this.props.activity.id + '"> Strava</a>';
    }

    paceToKM() {
        return (this.props.activity.average_speed * 3.6).toFixed(2) + '  km/h';
    }

    getDistance() {
        return (this.props.activity.distance / 1000).toFixed(2);
    }

    getMovingTime() {
        let date = new Date(null);

        date.setSeconds(this.props.activity.moving_time); // specify value for SECONDS here

        return date.toISOString().substr(11, 8);
    }

    componentDidMount() {
    }

    render() {

        const startDateFormatted = new Date(this.props.activity.start_date);

        return (
            <div className="column is-one-third-desktop is-full-mobile activity">
                <div className="card">
                    <div className="card-content">
                        <p className="title">
                            {this.props.activity.name} {this.props.activity.type}
                        </p>
                        <p className="subtitle">
                            <Moment format="DD/MM/YYYY - HH:MM" date={startDateFormatted}/>
                        </p>
                        <p>Distance: {this.getDistance()} km</p>
                        <p>Moving Time: {this.getMovingTime()}</p>
                        <p>Average Pace: {this.paceToKM()}</p>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item" dangerouslySetInnerHTML={{__html: this.getLink()}}/>
                    </footer>
                </div>
            </div>
        )
    }
}

//Activity.propTypes = {};

export default Activity;