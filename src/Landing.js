import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Particles from 'react-particles-js';
import particlesConfiguration from "./particlesConfiguration"
import "./App.css"

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
                <div className="landing_page">
                    <div className="landing_text">
                        <h1>Hey there, I'm Anthony</h1>
                    </div>

                    <Particles height='100%' width='100%' style={{position: 'absolute'}} params={particlesConfiguration}/> 
                </div>
        );
    };
 
}


export default Landing;