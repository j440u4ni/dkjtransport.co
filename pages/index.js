import React, { Component } from 'react';
import { connect } from 'react-redux';

class SHome extends Component {
    constructor(props) { super(props); }
    render() {
        return(<div></div>);
    }
}


function mapStateToProps(state)  {}
const connectReduxHome = connect(mapStateToProps)(SHome);
export default connectReduxHome;