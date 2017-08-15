import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./projects.css"
import './polaroid.css'

class Showcase extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        const { title, image, description, link } = this.props
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="polaroid_container">
                    <div className="polaroid">
                        <div className="polaroid-image">
                            <img src={image} alt="" height="200px"/>
                        </div>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        );
    };
 
}


export default Showcase;