import React, {Component} from 'react';
//import PropTypes from 'prop-types';

// ES6
import ReactMapboxGl, {Layer, Feature, ZoomControl, Popup, Marker, ScaleControl} from "react-mapbox-gl";

import Moment from 'react-moment';

const Map = ReactMapboxGl({
    minZoom: 7,
    maxZoom: 15,
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN
});

class ActivityMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedActivity: {},
            popUpCoordinates: [],
            startDateFormatted: null,
            center: [-2.5789, 51.4545],
            zoom: [10],
            style: "mapbox://styles/brightstormltd/cjm0fg1fr73u22snxt3g6qenl"
        };
    }


    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

        // unset tides if we change the currentStation
        if (prevProps.activities !== this.props.activities) {
            console.log('updated activities');
            this.setCenter();

        }
    }

    actionOpenPopUp(activity) {

        let coordinates = [activity.start_longitude, activity.start_latitude];

        const startDateFormatted = new Date(activity.start_date);

        this.setState({
            selectedActivity: activity,
            popUpCoordinates: coordinates,
            startDateFormatted: startDateFormatted
        });

    }

    setCenter() {

        console.log('update Center');

        let coordinates = [
            this.props.activities[0].start_longitude,
            this.props.activities[0].start_latitude
        ];

        this.setState({
            center: coordinates,
            selectedActivity: this.props.activities[0],
            popUpCoordinates: coordinates
        })
    }


    getDistance() {
        return (this.state.selectedActivity.distance / 1000).toFixed(2);
    }

    renderLayers() {

        return this.props.activities.map(activity => {

            let coordinates = [activity.start_longitude, activity.start_latitude];

            return (
                <Marker
                    key={activity.id}
                    className='marker'
                    coordinates={coordinates}
                    anchor="bottom"
                    offset={[0, 10]}
                    onClick={() => this.actionOpenPopUp(activity)}
                >

                </Marker>
            )
        })
    }

    render() {

        return (
            <div id="ActivityMap">
                <Map
                    style={this.state.style}
                    center={this.state.center}
                    containerStyle={{
                        height: "400px",
                        width: "100%",
                        marginBottom: "30px"
                    }}>
                    {this.renderLayers()}
                    {this.state.selectedActivity.id && (
                        <Popup key={this.state.selectedActivity.id}
                               coordinates={this.state.popUpCoordinates}>
                            <p className="title">
                                {this.state.selectedActivity.name}
                            </p>
                            <p className="subtitle">
                                <Moment format="DD/MM/YYYY - HH:MM" date={this.state.startDateFormatted}/>
                            </p>
                            <p>Distance: {this.getDistance()} km</p>
                            <button onClick={this.props.actionGetActivityRoute}> show</button>

                        </Popup>
                    )}

                    <ScaleControl/>
                    <ZoomControl/>
                </Map>
            </div>
        );
    }
}

//ActivityMap.propTypes = {};

export default ActivityMap;
