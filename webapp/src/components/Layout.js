import React from 'react'

import Navigation from './header/Navigation'
import Footer from './footer/Footer'
import './pages/HomePage';
import  Routes from '../Routes';
import {auth, signIn} from './auth';

export default class Layout extends React.Component {
    constructor (props) {
        super(props)
    }


    render () {
        return (
                <div >
                    <Navigation />
                    <div>
                        <Routes/>
                    </div>
                    <Footer />
                </div>
        )
    }
}
