import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./projects.css"
import "../App.css"
import Showcase from "./Showcase.js"
import internshipData from './internshipData.js'
import MediaQuery from 'react-responsive';

class Internships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: '0'
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    render() {

        const renderInternshipsSmall = (internshipData) => {
            let internships = []
            internshipData.forEach(project => {
                internships.push(
                    <Showcase key={project.title} {...project}></Showcase>
                )
            });
            return internships
        }

        // function to prepare data to create showcases
        const renderInternships = (internshipData, rowSize) => {
            const numRows = Math.ceil(internshipData.length / rowSize)
            var internshipRows = []
            var count = 0
            for (var i = 0; i < numRows; i++) {
                let internships = []
                for (var j = count; j < rowSize * (i + 1); j++) {
                    var project = internshipData[j]
                    internships.push(
                        <Showcase key={project.title} {...project}></Showcase>
                    )
                    count++
                    if (count == internshipData.length) { break }
                }
                internshipRows.push(internships)
            }
            return internshipRows
        }

        return (
            <div>
                <MediaQuery query="(min-width: 901px)">
                    <div className="container projects_container align_internships">
                        <h1>Internships</h1>
                        <h4>Click to learn more!</h4>
                        {renderInternships(internshipData, 3).map(row =>
                            <tr>{row.map((internship) => <td>{internship}</td>)}</tr>)
                        }
                    </div>
                </MediaQuery>

                <MediaQuery query="(max-width: 900px)">
                    <div className="container projects_container">
                        <h1>Internships</h1>
                        <h4>Click to learn more!</h4>
                        {renderInternshipsSmall(internshipData)}
                    </div>
                </MediaQuery>
            </div>

        );
    };

    // dynamically update the viewport dimensions 
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        // update the width of the viewport upon a user resizing the window as well
        this.setState({ width: window.innerWidth, height: window.innerHeight });

        // only set the modal if the user has the option to view it 
        if (this.state.width < 800 && this.state.width > 0) {
            var modal = new tingle.modal()

            // listens for a user to click on the more info option
            var more_information = document.getElementById('more_info');

            // sets the content of the modal if the viewport is correct
            modal.setContent(document.querySelector('.description').innerHTML);
            more_information.addEventListener('click', function () {
                modal.open();
            });
        }
    }

}


export default Internships;