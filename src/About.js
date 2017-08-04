import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./App.css"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="about_container">
                <h1>About Me</h1>
            </div>
        );
    };
 
}


export default About;