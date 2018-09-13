import React, {Component} from 'react';

//import PropTypes from 'prop-types';

import ChartBlock from './ChartBlock';

class Athlete extends Component {

    constructor() {
        super();
        this.state = {
            'name': '',
            'shoes': [],
            'bikes': [],
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    getProfileName() {

        if (!this.props.athlete.firstname) {
            return '';
        }

        return this.props.athlete.firstname + ' ' + this.props.athlete.lastname;
    }

    getProfileImage() {

        if (!this.props.athlete.profile) {
            return '';
        }

        return '<img class="is-rounded" src="' + this.props.athlete.profile + '" alt="' + this.props.athlete.firstname + ' ' + this.props.athlete.lastname + '" />';
    }


    render() {

        let shoes = {};
        let bikes = {};

        if (this.props.athlete !== null) {
            shoes = this.props.athlete.shoes;
            bikes = this.props.athlete.bikes;
        }
        //                                  <ChartBlock data={bikes} label='Bikes' />

        /*
        <div className="media-right">
            <ChartBlock data={shoes} label='Shoes' />
        </div>
*/
        return (
            <div id="Athlete">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-96x96"
                                        dangerouslySetInnerHTML={{__html: this.getProfileImage()}}>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{this.getProfileName()}</p>
                                <p className="subtitle is-6">@geekrunninguk</p>
                                <p>Looking for mud, in all the right places.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

Athlete.propTypes = {};

export default Athlete;
