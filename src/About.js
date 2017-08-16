import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import tingle from 'tingle.js'
import "./App.css"
import Responsive from 'react-responsive';
var MediaQuery = require('react-responsive');

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: window.innerWidth, 
            height: '0'
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    render(){
        return (

            <div id="about_me" className="about_container">

                {/* more information to set within the modal  */}
                <div className="description hide">
                    <h1>Full Description</h1>
                    <p>
                        For me, this means working to build Rice's CS community through my role as Treasurer of Rice CS Club.
                        For example, I co-founded Rice's first Learnathon, an amalgam of hackathons and workshops aimed at giving students opportunities to develop new, practical skill sets.                            
                        As a hackathon enthusiast, it also means helping organize HackRice and actively working to build a "hacker" culture here. 
                    </p>

                    <p> 
                        I've also been involved in a variety of entrepreneurial events in Houston such as Houston 3 Day Start Up.
                        One of my goals during my time at Rice is to bring together the CS and Entrepreneurship communities.
                    </p>

                    <p>
                        I was born in small city in South Korea called Pohang. 
                        However, I was raised in Houston, TX where I've pursued a variety of interests ranging from gardening to breakdancing. 
                        My greatest interest, however, has always been in creating.
                        I grew up playing with legos, started working with VEX robots in the 5th grade, moved on to creating CAD designs and circuits in high school, and eventually fell in love with coding during an internship working with NASA's ICESat1 satellite.
                    </p>

                </div>

                <div className="row">

                    {/* regular desktop usage */}
                    <MediaQuery query="(min-width: 800px)">
                        <div className="col-xs-4 about_image">
                            <img src="http://i.imgur.com/2k2QxRe.jpg" width="50%" height="50%"/>   
                        </div>

                        <div className="col-xs-7">
                            <h1>About Me </h1>
                            <p>
                                Hi! My name is Sung Soo (Anthony) Cho. I'm currently pursuing a BS in computer science at Rice University. 
                                I love coding and am always looking for ways to share this passion with others. 
                                For me, this means working to build Rice's CS community through my role as Treasurer of Rice CS Club.
                                For example, I co-founded Rice's first Learnathon, an amalgam of hackathons and workshops aimed at giving students opportunities to develop new, practical skill sets.                            
                                As a hackathon enthusiast, it also means helping organize HackRice and actively working to build a "hacker" culture here.
                            </p>

                            <p>
                                I'm also passionate about entrepreneurship. 
                                In my first semester at Rice, my partner and I won $11,000 in funding for our projects through the LILIE New Entrepeneurs Grant and the Rice Undergraduate Elevator Pitch Competition.
                                I've also been involved in a variety of entrepreneurial events in Houston such as Houston 3 Day Start Up.
                                One of my goals during my time at Rice is to bring together the CS and Entrepreneurship communities.
                            </p>

                            <p>
                                I was born in small city in South Korea called Pohang. 
                                However, I was raised in Houston, TX where I've pursued a variety of interests ranging from gardening to breakdancing. 
                                My greatest interest, however, has always been in creating.
                                I grew up playing with legos, started working with VEX robots in the 5th grade, moved on to creating CAD designs and circuits in high school, and eventually fell in love with coding during an internship working with NASA's ICESat1 satellite.
                            </p> 
                        </div>
                    </MediaQuery>

                    {/* if the user is using a smaller device or makes the viewport smaller */}
                    <MediaQuery query="(max-width: 800px)">
                        <div className="col-xs-10 col-xs-offset-1">
                            <h1>About Me (Brief) </h1>
                            <p>
                                Hi! My name is Sung Soo (Anthony) Cho. I'm currently pursuing a BS in computer science at Rice University. 
                                I love coding and am always looking for ways to share this passion with others. 
                            </p>

                            <p>
                                I'm also passionate about entrepreneurship. 
                                In my first semester at Rice, my partner and I won $11,000 in funding for our projects through the LILIE New Entrepeneurs Grant and the Rice Undergraduate Elevator Pitch Competition.
                            </p>

                            <p>Click <strong><a id="more_info">here</a></strong> for a little more information</p>
                        </div>
                    </MediaQuery>


                </div>
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
            more_information.addEventListener('click', function(){
                modal.open();
            });
        }
    }

 
}


export default About;