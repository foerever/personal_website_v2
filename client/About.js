import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import tingle from 'tingle.js'
import "./App.css"
import Responsive from 'react-responsive';
import me from './images/me.jpg';
import MediaQuery from 'react-responsive';

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
                        I was born in small city in South Korea called Pohang but was raised in Houston, TX where I've pursued a variety of interests ranging from gardening to breakdancing. 
                        My greatest interest, however, has always been in creating.
                        I grew up playing with legos, started working with VEX robots in the 5th grade, moved on to creating CAD designs and circuits in high school, and eventually fell in love with coding during an internship working with NASA's ICESat1 satellite.
                    </p>

                </div>

                <div className="row">

                    {/* regular desktop usage */}
                    <MediaQuery query="(min-width: 801px)">
                        <div className="col-xs-4">
                            <img className = "image-cover" src={me} width="50%" height="50%"/>   
                        </div>

                        <div className="col-xs-7">
                            <h1> About Me </h1>
                            <p>
                                Hi! My name is Sung Soo (Anthony) Cho. I'm currently in my junior year pursuing a BS in computer science at Rice University. 
                                I'm passionate about technology, entrepreneurship, space, and gardening!
                            </p>

                            <p>
                                I was born in a small city in South Korea called Pohang but I grew up in Houston, TX. 
                                While at Rice I've been most involved with the Rice CS Club and Rice Entrepreneurship Community. 
                                I've served as Freshman Representative, Treasurer, HackRice 6 & 7 organizer, and now External Vice President for Rice CS Club.
                                My partner and I have won 11,000 USD from the LILIE New Entrepreneurs Grant and Rice Undergraduate Elevator Pitch Competition.
                            </p>

                            <p>
                                I'm currently working as an intern at United Airlines on the mobile development team. 
                                We get free standby travel! So far I've used that opportunity to visit Rome, Tokyo (x2), LA (x2), New York, Denver, and Chicago (x5 for work).
                                You can watch some of the videos I made of my travels on my <strong><a target="_blank" href="https://www.youtube.com/watch?v=80iAaaTnRXs&list=PLmDh-0r6HcGqGnQpE10EJMH8wUabNROnw&index=3">youtube channel</a></strong>.
                            </p>
                        </div>
                    </MediaQuery>

                    {/* if the user is using a smaller device or makes the viewport smaller */}
                    <MediaQuery query="(max-width: 800px)">
                        <div className="col-xs-10 col-xs-offset-1">
                            <h1>About Me (Brief) </h1>
                            <p>
                                Hi! My name is Sung Soo (Anthony) Cho. I'm currently pursuing a BS in computer science at Rice University. 
                                I'm passionate about technology, entrepreneurship, space, and gardening!
                            </p>

                            <p>Click <strong><a id="more_info">here</a></strong> for a little more of my background</p>
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