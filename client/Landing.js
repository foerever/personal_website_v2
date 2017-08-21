import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Particles from 'react-particles-js';
import particlesConfiguration from "./particlesConfiguration";
import "./App.css";
import resume from './resources/sung_soo_cho_resume.pdf'
import Responsive from 'react-responsive';
var MediaQuery = require('react-responsive');

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
                        <div>
                            <h1>Hey there, I'm Anthony</h1>
                        </div>

                        {/* regular desktop usage */}
                        <MediaQuery query="(min-width: 801px)">
                            <div className="landing_icons" id="landing">
                                <a target="_blank" href="https://github.com/foerever"><i className="col-xs-1 fa fa-github fa-4x" aria-hidden="true"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/sungsoocho/"><i className="col-xs-1 fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>
                                <a target="_blank" href={resume}><i className="col-xs-1 fa fa-file-pdf-o fa-4x" aria-hidden="true"></i></a>
                                <a target="_blank" href="mailto:sc80@rice.edu"><i className="col-xs-1 fa fa-envelope-o fa-4x" aria-hidden="true"></i></a>
                            </div>

                            <div className="landing_down" id="landing">
                                <a href="#about_me"><i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i></a>
                            </div>
                        </MediaQuery>

                        {/* if the user is using a smaller device or makes the viewport smaller */}
                        <MediaQuery query="(max-width: 800px)">
                            <div className="landing_icons_mobile" id="landing_mobile">
                                <a target="_blank" href="https://github.com/foerever"><i className="col-xs-2 fa fa-github fa-4x" aria-hidden="true"></i></a>
                                <a target="_blank" href="https://www.linkedin.com/in/sungsoocho/"><i className="col-xs-2 fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>
                                <a target="_blank" href={resume}><i className="col-xs-2 fa fa-file-pdf-o fa-4x" aria-hidden="true"></i></a>
                                <a target="_blank" href="mailto:sc80@rice.edu"><i className="col-xs-2 fa fa-envelope-o fa-4x" aria-hidden="true"></i></a>
                            </div>
                        </MediaQuery>


                    </div>

                    <Particles height='100%' width='100%' style={{position: 'absolute'}} params={particlesConfiguration}/> 
                </div>
        );
    };
 
}


export default Landing;