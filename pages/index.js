import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import { FGuestNavbar } from '../source/components/component-guest-navbar';
const { Header, Content, Sider } = Layout;

class SHome extends Component {
    constructor(props) { super(props); }
    render() {
        return(
            <Layout>
                <FGuestNavbar />
            </Layout>
        );
    }
}


function mapStateToProps(state)  {}
const connectReduxHome = connect(mapStateToProps)(SHome);
export default connectReduxHome;