import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Divider } from 'antd';
import Link from 'next/link';

import logo from '../../static/images/custom – 2@2x.png';
const { Header } = Layout;

class FGuestNavbar extends Component {
    constructor(props) { super(props); }
    render() {
        return(
            <React.Fragment>
                <Header className="guest-navbar-container d-flex flex-row justify-content-center">
                    <img src={logo} className="mr-auto logo-dkj-homepage" />
                    <div className="ml-auto">
                        <Link href="/"><span className="homepage-link">Accueil</span></Link>
                        <Link href="/"><span className="homepage-link ml-2">Prestations</span></Link>
                        <Link href="/"><span className="homepage-link ml-2">Contact</span></Link>
                        <Divider vertical={true} />
                    </div>
                </Header>
            </React.Fragment>
        );
    }
}

function mapStateToProps() {}
const connectReduxGuestNavbar = connect(mapStateToProps)(FGuestNavbar);
export { connectReduxGuestNavbar as FGuestNavbar };