import React, {Component} from 'react';
//import PropTypes from 'prop-types';

import '../css/ChartBlock.css';

import {HorizontalBar} from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

class ChartBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            labels:[]
        }
    }


    componentDidMount() {

    }


    render() {

        let labels = [];
        let values = [];

        if(this.props.data) {

            this.props.data.map((object, i) => {
                labels.push(object.name);
            })

            this.props.data.map((object, i) => {
                values.push((object.distance/1000));
            })
        }

        let data = {
            labels: labels,
            datasets: [
                {
                    label: this.props.label,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    data: values
                }
            ]
        };

        return (
            <div>
                <HorizontalBar data={data}/>
            </div>
        );
    }
}

//ChartBlock.propTypes = {};

export default ChartBlock;
