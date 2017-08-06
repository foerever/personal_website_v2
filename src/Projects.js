import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./App.css"
import Showcase from "./Showcase.js"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="projects_container">
                <h1>Projects</h1>
                <Showcase projectName={"Hell Yes"} projectImage={"http://i.imgur.com/usXJ6mF.png"}/>
            </div>
        );
    };
 
}


export default Projects;