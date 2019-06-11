import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./projects.css"
import "../App.css"
import Showcase from "./Showcase.js"
import internshipData from './internshipData.js'

class Internships extends Component {
    render(){

        // function to prepare data to create showcases
        const renderProjects = (internshipData) => {
            let internships = []

            internshipData.forEach(project => {
                internships.push(
                    <Showcase key={project.title} {...project}></Showcase>
                )
            })
            return internships
        }
        return (
            <div className="container projects_container">
                <h1>Internships</h1>
                <h4>Click to learn more!</h4>
                {renderProjects(internshipData)}
            </div>

        );
    };
 
}


export default Internships;