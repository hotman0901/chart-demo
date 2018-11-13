import React, { Component } from 'react';
// import Bar from '../../components/bar';
// import Line from '../../components/line';
import BizCharts from '../../components/bizCharts';
import Echarts from '../../components/echarts';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {/* <Bar /> */}
                {/* <Line /> */}
                {/* <Scale /> */}
                {/* <BizCharts /> */}
                <Echarts />
            </div>
        );
    }
}
