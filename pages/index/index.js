import React, { Component } from 'react';
import Bar from '../../components/bar';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <div><Bar /></div>;
    }
}
