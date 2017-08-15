import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import tingle from 'tingle.js'
import { enableUniqueIds } from 'react-html-id'
import './tingle.css'
import "./projects.css"
import './polaroid.css'

class Showcase extends Component {
    constructor(props) {
        super(props);
        enableUniqueIds(this)
        this.state = {
            uniqueId: String(this.nextUniqueId()) 
        }
    }

    render(){
        const { title, image, description, link } = this.props
        return (
            <div>
                <div className="hidden_div description">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>


                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="polaroid_container more_info">
                        <div className="polaroid" id={this.state.uniqueId}>
                            <div className="polaroid-image">
                                <img src={image} alt="" height="200px"/>
                            </div>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>

            </div>
        );
    };

    componentDidMount() {
        var modal = new tingle.modal();
        var testing = "." + this.state.originalId
        var more_information = document.getElementById(this.state.uniqueId);
        more_information.addEventListener('click', function(){
            modal.open();
        });
        modal.setContent(document.querySelector('.description').innerHTML);

    }
 
}


export default Showcase;