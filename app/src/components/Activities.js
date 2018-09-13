import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import Activity from './Activity';

class Activities extends Component {

    renderActivities() {
        return this.props.activities.map(activity => {
            return (
                <Activity key={activity.id} activity={activity}>
                </Activity>
            )
        });
    }

    render() {
        return (
            <div id="activities">
            <div className="columns is-mobile activities is-multiline">
                {this.renderActivities()}
            </div>
                <div className="pager">

                </div>
            </div>
        );
    }
}

//Activities.propTypes = {};

export default Activities;
