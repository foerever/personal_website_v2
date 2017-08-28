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

        // the unique IDs are just global counters to dynamically set content for each new instance of a showcase
        enableUniqueIds(this)
        this.state = {
            originalId: String(this.nextUniqueId()),
            uniqueId: String(this.nextUniqueId()) 
        }
    }

    render(){
        const { title, image, description, link, video, media } = this.props
        return (
            <div>
                {/* description modal content */}
                <div className="hidden_div description" id={this.state.originalId}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    {                    
                        video ? 
                        <div className="video_wrapper">
                            <iframe src={media} width="560" height="349" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>
                        </div>
                        : <div className="image_wrapper"><img src={media} height="300px" width="150px" alt=" "/></div>
                    }
                    <h5>Click <a href={link}><strong>here</strong></a> to learn more</h5>
                </div>

                {/* the jsx for the polaroid itself */}
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="polaroid_container" >
                        <div className="polaroid">
                            <div className="polaroid-image" id={this.state.uniqueId}>
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
        // initialize a new modal object
        var modal = new tingle.modal();

        // listen for clicks on the more info option
        var more_information = document.getElementById(this.state.uniqueId);
        modal.setContent(document.getElementById(this.state.originalId))

        // open the modal when the user wants information on a showcase
        more_information.addEventListener('click', function(){
            modal.open();
        });
        modal.setContent(document.querySelector('.description').innerHTML);

    }
 
}


export default Showcase;