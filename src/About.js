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
                <p>I'm a software developer.</p>
                <p>Many more paragraphs </p>
            </div>
        );
    };
 
}


export default About;