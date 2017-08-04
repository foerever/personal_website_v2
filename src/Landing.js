import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Particles from 'react-particles-js';

import "./App.css"

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>

                <div className="landing_text">
                    <h1>Hey there, I'm Anthony</h1>
                </div>

            <div className="landing_page">
                <Particles params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#3CA9D1",
                                    blur: 5
                                }
                            }
                        }
                    }}/>
            </div>

            </div>
        );
    };
 
}


export default Landing;