import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./projects.css"
import "../App.css"
import Showcase from "./Showcase.js"
import showcaseData from './showcaseData.js'

class Projects extends Component {
    render(){
        
        // function to prepare data to create showcases
        const renderProjects = (showcaseData) => {
            let showcases = []

            showcaseData.forEach(project => {
            showcases.push(
                <Showcase key={project.title} {...project}></Showcase>
            )
            })
            return showcases
        }
        return (
            <div className="container projects_container">
                <h1>Projects</h1>
                <h4>Click to learn more!</h4>
                {renderProjects(showcaseData)}
            </div>

        );
    };
 
}


export default Projects;