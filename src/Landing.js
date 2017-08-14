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
                        <div className="landing_icons">
                            <a href="https://github.com/foerever"><i className="fa fa-github fa-4x icons" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/sungsoocho/"><i className="fa fa-linkedin-square fa-4x icons" aria-hidden="true"></i></a>
                            <a href="/resources/sung_soo_cho_resume.pdf"><i className="fa fa-file-pdf-o fa-4x icons" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <Particles height='100%' width='100%' style={{position: 'absolute'}} params={particlesConfiguration}/> 
                </div>
        );
    };
 
}


export default Landing;