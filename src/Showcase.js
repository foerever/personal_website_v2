import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./App.css"

class Showcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="showcase_container">
                <h2>{this.props.projectName}</h2>
                <img src={this.props.projectImage} width="100" height="100"/> 
            </div>
        );
    };
 
}


export default Showcase;