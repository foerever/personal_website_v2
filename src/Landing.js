import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Particles from 'react-particles-js';
import particlesConfiguration from "./particlesConfiguration";
import "./App.css";
import resume from './resources/sung_soo_cho_resume.pdf'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
                <div className="landing_page" id="landing">
                    <div className="landing_text">
                        <h1>Hey there, I'm Anthony</h1>
                        <div className="landing_icons">
                            <a href="https://github.com/foerever"><i className="col-xs-1 fa fa-github fa-4x" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/in/sungsoocho/"><i className="col-xs-1 fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>
                            <a href={resume} download="anthony_cho_resume"><i className="col-xs-1 fa fa-file-pdf-o fa-4x" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <Particles height='100%' width='100%' style={{position: 'absolute'}} params={particlesConfiguration}/> 
                </div>
        );
    };
 
}


export default Landing;